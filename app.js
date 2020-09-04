// Importando requisitos
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

// Definindo endpoint principal
app.get('/', function(req, res) {
  var wellcome = 
    {
      nome: "HISOKA NARUTO API", 
      repositorio: "123", 
      desenvolvedor: "Gustavo de Oliveira Rosa", 
      Objetivo: "Criar uma API que retornará informações a respeito de personagens selecionados do anime NARUTO.",
    }
  ;

  res.send(JSON.stringify(wellcome));
});


app.listen(8000, function() {
  console.log('Servidor rodando na porta 8000.');
});