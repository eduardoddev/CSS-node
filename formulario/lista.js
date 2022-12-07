const express = require ("express");
const app = express();
const {engine} = require('express-handlebars');
const bodyParser = require ('body-parser');
const Post1 = require('./models/Post1');
const Sequelize = require('sequelize');

//template engine
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//BODY PARSER - config
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('../formulario/public/cad.css', express.static(__dirname + '../formulario/public/cad.css'))

/*const sequelize = new Sequelize ('postapp', 'root', 'admin',{
    host: "localhost",
    dialect: "mysql"
})*/

app.get("/", function(req, res){
    Post1.findAll({order:[['id', 'DESC']]}).then(function(posts){
        res.render('home', {posts:posts})
    })
})

app.get('/cad', function(req, res){
    res.render('./layouts/formulario')
})

app.post('/add', function(req, res){
    Post1.create({
        album: req.body.album,
        artista: req.body.artista,
        genero: req.body.genero,
        ano: req.body.ano
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um problema:" + erro)
    })
})

app.listen(8091, function(){
    console.log("Servidor encontrado com sucesso http:localhost: 8091")
});