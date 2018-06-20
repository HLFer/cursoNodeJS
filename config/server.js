var express = require('express');
var app = express();

//Informa para o express que as views serão atribuídas ao ejs
app.set('view engine', 'ejs');

//Informa o caminho das views
app.set('views', './app/views');

//Busca o arquivo mod_teste na pasta raiz do projeto
//var msg = require('./mod_teste')();

module.exports = app;
