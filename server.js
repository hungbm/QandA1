//Routing - https://expressjs.com/en/guide/routing.html
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var signpage = require('./routes/signpage');
// var myprofile = require('./routes/myprofile');
var listuser = require('./routes/listuser');
var askpage = require('./routes/askpage');
var postpage = require('./routes/post');
var port=3000;
var app = express();

mongoose.connect('mongodb://hungbm:31121993@ds119548.mlab.com:19548/qanda');
//app.set('view','./'); //set view = / (go to home)
// app.set('view engine','ejs'); //set 'view engine' = ejs
// app.engine('html',require('ejs').renderFile); //map the EJS template engine to “.html” files
/*
    In this case, EJS provides a .renderFile() method with the same 
    signature that Express expects: (path, options, callback), 
    though note that it aliases this method as ejs.__express internally
     so if you’re using “.ejs” extensions you don’t need to do anything.
*/

//Set static folder
//app.use([path,] callback [, callback...])
app.use(express.static(path.join(__dirname,'./')));


//body parser middleware
/*
    Mounts the specified middleware function or functions 
    at the specified path: the middleware function is executed 
    when the base of the requested path matches path.
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
//When go to home => using index route
app.use('/', index);
app.use('/signpage',signpage);
// app.use('/myprofile',myprofile);
app.use('/listuser',listuser);
app.use('/post',postpage);
app.use('/askpage',askpage);
/*
    Starts a UNIX socket and listens for connections on the given path.
    This method is identical to Node’s http.Server.listen().
*/

app.listen(port, function(){
    console.log('Server started on port: '+port);
});