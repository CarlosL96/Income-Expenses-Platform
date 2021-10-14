require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

const promisePool = pool.promise();

const checkConnection = async () => {
  try {
    await promisePool.query("SELECT SYSDATE()");
    console.log("Mysql connection done!");
  } catch (error) {
    console.log("Se finaliza proceso - process.exit()");
    console.error(error.stack || error);
    process.exit();
  }
};

checkConnection();

const retrieveUser = async (userName) => {
  const objResponse = { data: null, error: null };
  try {
    const response = await promisePool.query(
      "SELECT username, password FROM users WHERE username=?",
      [userName]
    );
    const user = response[0][0];
    user ? (objResponse.data = user) : (objResponse.error = "Not found");
  } catch (error) {
    console.error(error.stack || error);
    objResponse.error = error;
  }
  return objResponse;
};

module.exports = { retrieveUser };
