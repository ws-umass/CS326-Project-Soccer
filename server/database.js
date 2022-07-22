import pg from "pg";

// Get the Pool class from the pg module.
const { Pool } = pg;

// A class representing a database to store scores.
export class Database {
   constructor(URL) {
      this.dburl = URL;
   }

   async connect() {
      this.pool = new Pool(
         {
            connectionString: this.dburl,
            ssl: { rejectUnauthorized: false } // Required for Heroku connections
         }
      );

      // Create the pool.
      this.client = await this.pool.connect();
   }

   async addTable(name) {
      const queryText = `
         CREATE TABLE IF NOT EXISTS ${name} (
            semester VARCHAR(30),
            professor VARCHAR(30),
            evaluation INTEGER,
            grade NUMERIC(4, 3)
         );
      `;
      await this.client.query(queryText);
   }

   async dropTable(name) {
      const queryText = `DROP TABLE IF EXISTS ${name};`;
      await this.client.query(queryText);
   }

   async getAvgGrade(course, semester) {
      const queryText = `SELECT AVG(grade) FROM ${course} WHERE semester = '${semester}';`;
      const res = await this.client.query(queryText);
      return res.rows[0];
   }

   async getAvgEvaluation(course, semester, professor) {
      const queryText = `
         SELECT AVG(evaluation)
         FROM (
            SELECT * FROM ${course}
            WHERE semester = ${semester}
            AND professor = ${professor}
         ) AS a;
      `;
      const res = await this.client.query(queryText);
      return JSON.parse(res.rows);
   }

   async writeData(course, semester, professor, evaluation, grade) {
      await this.addTable(course);
      const queryText = `
         INSERT INTO ${course} (semester, professor, evaluation, grade)
         VALUES ($1, $2, $3, $4)
         RETURNING *;
      `;
      const res = await this.client.query(queryText, [semester, professor, evaluation, grade]);
      console.log(res.rows);
   }
}
