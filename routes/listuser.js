var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var mongoose = require('mongoose');
//var db = mongojs('mongodb://hungbm:31121993@ds115798.mlab.com:15798/mytasklist_hungbm', ['tasks','questions']);
var db = mongojs('mongodb://hungbm:31121993@ds119548.mlab.com:19548/qanda', ['users']);
var mongoose = require('mongoose');
// router.get('/', function(req,res,next){
//     res.render('index.html');
// });

router.get('/listuser', function(req, res){
    db.users.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});
router.get('/api/', function(req, res,next){
     db.users.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});

module.exports = router;
