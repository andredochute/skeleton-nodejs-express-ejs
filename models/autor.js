const db = require("../db")


class Autor {
  static async inserir(data) {
    const connect = await db.connect();
    const sql = "insert into autores(nome, sobrenome, data_nascimento) values ($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.data_nascimento]
    return await connect.query(sql, values);
  }

  static async selecionar() {
    const connect = await db.connect();
    return await connect.query("Select * From autores");


  }

  static async deletar(data) {
    const connect = await db.connect();
    const sql = "DELETE FROM autores WHERE id=$1";
    const values=[data.id];
    return await connect.query(sql, values);

  }

  static async atualizar(data) {
    const connect = await db.connect();
    const sql = "update autores set nome=$1, sobrenome=$2, data_nascimento=$3 where id=$4";
    const values =[data.nome, data.sobrenome, data.data_nascimento, data.id];
    return await connect.query(sql, values)
  }


}
module.exports = Autor;