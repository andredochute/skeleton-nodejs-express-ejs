let connect = function() {
  if (global.connection) {
    return global.connection.connect();
  }
  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://viuhyzlm:4WyGLa_LuGhAUe7nkO2UZOWwbEcoSVQu@kesavan.db.elephantsql.com/viuhyzlm"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect };