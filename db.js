let connect = function (){
  if(global.connection){
    return global.connection.connect();
}
  const { Pool } =require("pg");
  const pool = new  Pool({
    connectionString: "postgres://jluftzbu:x9ErepsenNZkyGdM3YiVEb3ttQLElQf0@kesavan.db.elephantsql.com/jluftzbu"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect };