import { Database } from "./database.js";

import "dotenv/config";

class Users {
   constructor() {
      this.database = new Database(process.env.DATABASE_URL);
      this.user = [];
   }

   async init() {
      let userData = await this.database.readUser();
      this.user = userData;
   }

   findUser(name) {
      return this.user.some((x) => x.username === name);
   }

   validatePassword(name, pwd) {
      return this.user.some((x) => x.username === name && x.password === pwd);
   }

   addUser(name, pwd) {
      if (this.findUser(name)) {
         return false;
      }
      this.user.push({ username: name, password: pwd });
      this.database.writeUserData(name, pwd);
      return true;
   }
}

const users = new Users();
await users.init();

export { users };
