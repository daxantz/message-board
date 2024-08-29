const { pool, Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "dax",
  database: "messageboard",
  password: "Maxbenny2497",
  port: 5432,
});
