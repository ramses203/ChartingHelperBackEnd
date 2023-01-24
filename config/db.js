const { Pool } = require("pg");
const pool = new Pool({
  user: "root",
  host: "svc.gksl2.cloudtype.app",
  database: "postgres",
  password: "2032",
  port: 32720,
});

module.exports = pool;
