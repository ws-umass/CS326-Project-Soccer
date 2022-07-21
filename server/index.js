import { Database } from "./database.js";
import express from "express";
import logger from "morgan";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/", express.static("client"));

const headerFields = { "Content-Type": "application/json" };
const badValue = [undefined, null, "", "none"];

const database = new Database("postgres://dnbsqtdlpvwqip:5bf767244217e22ad5e5ad5f42a8bbc54f27b167262ed8155664e496e43ad661@ec2-34-231-63-30.compute-1.amazonaws.com:5432/dbfmhmc15tmrkg");

try {
   await database.connect();
}
catch (error) {
   console.error(error);
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

app.post(
   "/setData",
   async (request, response) => {
      const options = request.body;
      await postData(response, options.course, options.semester, options.professor, options.evaluation, options.grade);
   }
);

// Start the server.
app.listen(port, () => console.log(`\nServer started on http://localhost:${port}`));
