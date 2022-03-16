var express = require('express');
var router = express.Router();
const Autor =require("../models/autor");

router.get("/", async function(req, res, next){
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.get("/inserir", async function(req, res, netx){
  const autor = {
    nome: "André",
    sobrenome: "lopes",
    data_nascimento: "2005/03/02"
  }
  const autores = await Autor.inserir(autor);
  res.json(autores);
});


module.exports = router;
