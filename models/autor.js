const db = require("../db")


class Autor {
  static inserir() {

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
modulo.exports = Autor;