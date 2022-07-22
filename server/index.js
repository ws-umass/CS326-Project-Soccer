import { Database } from "./database.js";
import { users } from "./users.js";

import auth from "./auth.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
import * as http from "http";
import express from "express";
import expressSession from "express-session";
import logger from "morgan";

import "dotenv/config";

// We will use __dirname later on to send files back to the client.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(dirname(__filename));

const app = express();
const port = process.env.PORT || 3000;

const sessionConfig = {
   secret: process.env.SECRET || "SECRET",
   resave: false,
   saveUninitialized: false
}

app.use(expressSession(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use("/", express.static("client"));

auth.configure(app);

const headerFields = { "Content-Type": "application/json" };
const badValue = [undefined, null, "", "none"];

const database = new Database(process.env.DATABASE_URL);

try {
   await database.connect();
}
catch (error) {
   console.error(error);
}

/**
 * @param {express.Request} request
 * @param {express.Response} response
 * @param {express.NextFunction} next 
 */
function checkLoggedIn(request, response, next) {
   if (request.isAuthenticated()) {
      next();
   }
   else {
      response.redirect("/login");
   }
}

/**
 * @param {http.ServerResponse} response 
 * @param {string} name 
 * @param {string} score 
 */
async function postData(response, course, semester, professor, evaluation, grade) {
   if (badValue.some((x) => x === course || x === semester || x === professor || x === evaluation || x === grade)) {
      // 400 - Bad Request
      response.writeHead(400, headerFields);
      response.write(JSON.stringify({ "status": "bad request" }));
      response.end();
   }
   else {
      await database.writeData(course, semester, professor, parseInt(evaluation), parseFloat(grade));
      response.writeHead(200, headerFields);
      response.write(JSON.stringify({ "status": "success" }));
      response.end();
   }
}

/**
 * @param {http.ServerResponse} response 
 */
async function getGrade(response, course, semester) {
   let storage = await database.getAvgGrade(course, semester);
   response.writeHead(200, headerFields);
   response.write(JSON.stringify(storage));
   response.end();
}

/**
 * @param {http.ServerResponse} response 
 */
async function getEvaluation(response, course, semester, professor) {
   let storage = await database.getAvgEvaluation(course, semester, professor);
   response.writeHead(200, headerFields);
   response.write(JSON.stringify(storage));
   response.end();
}

// update
app.post(
   "/setData",
   async (request, response) => {
      const options = request.body;
      await postData(response, options.course, options.semester, options.professor, options.evaluation, options.grade);
   }
);

app.get(
   "/avgGrade",
   async (request, response) => {
      const options = request.query;
      await getGrade(response, options.course, options.semester);
   }
);

app.get(
   "/avgEvaluation",
   async (request, response) => {
      const options = request.query;
      await getEvaluation(response, options.course, options.semester, options.professor);
   }
);

app.post("/", (request, response) => response.redirect("/"));

app.get("/", (request, response) => { response.sendFile("client/index.html", { root: __dirname }) });

app.get("/login", (request, response) => { response.sendFile("client/login.html", { root: __dirname }) });

app.post(
   "/login",
   auth.authenticate(
      "local",
      {
         // use username/password authentication
         successRedirect: "/private", // when we login, go to /private
         failureRedirect: "/login", // otherwise, back to login
      }
   )
);

app.post("/logout", (request, response) => response.redirect("/logout"));

app.get(
   "/logout",
   (request, response) => {
      request.logout(); // Logs us out!
      response.redirect("/"); // back to login
   }
);

app.post(
   "/register",
   (request, response) => {
      const { username, password } = request.body;
      if (users.addUser(username, password)) {
         response.redirect("/login");
      }
      else {
         response.redirect("/register");
      }
   }
);

app.get("/register", (request, response) => { response.sendFile("client/register.html", { root: __dirname }) });

app.get(
   "/private",
   checkLoggedIn,
   (request, response) => {
      response.redirect("/private/" + request.user);
   }
);

app.get(
   "/private/:userID/",
   checkLoggedIn,
   (request, response) => {
      if (request.params.userID === request.user) {
         response.sendFile("client/private.html", { root: __dirname });
      }
      else {
         response.redirect("/private");
      }
   }
);

// Start the server.
app.listen(port, () => console.log(`\nServer started on http://localhost:${port}`));
