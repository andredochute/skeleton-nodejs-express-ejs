var express = require('express');
var router = express.Router();
const Autor =require("../models/autor");

router.get("/", async function(req, res, next){
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});


router.post("/inserir", async function(req, res, netx){
  const autores = await Autor.inserir(req.body);
  res.json(autores);
 
});

router.get("/deletar", async function(req, res, netx){
  const deletar = {
    id: "2"
  }
  const autores = await Autor.deletar(deletar);
  res.json(autores);
});

router.put("/atualizar", async function(req, res, netx){
  // const atualizar = {
  //   nome: "guilherme",
  //   sobrenome: "silva",
  //   data_nascimento: "2007/03/02",
  //   id: "1"
  // }
  const autores = await Autor.atualizar(req.body);
  res.json(autores);

   });

module.exports = router;
