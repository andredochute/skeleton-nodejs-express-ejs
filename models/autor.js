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

  static deletar() {

  }

  static autualizar() {

  }


}
module.exports = Autor;