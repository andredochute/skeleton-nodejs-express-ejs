var express = require('express');
var router = express.Router();
const Autor =require("../models/autor");

router.get("/", async function(req, res, netx){
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});




module.exports = router;
