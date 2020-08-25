
// npm install --save pg
// find out more here: https://node-postgres.com/

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

const helloWorld = () => {
  pool.query(
    "SELECT * FROM visitors",
    (error, results) => {
      if (error) {
        throw error;
      }

      console.log(results.rows);
    }
  );
};

helloWorld();

