var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
//var db = mongojs('mongodb://hungbm:31121993@ds115798.mlab.com:15798/mytasklist_hungbm', ['tasks','questions']);
var db = mongojs('mongodb://hungbm:31121993@ds119548.mlab.com:19548/qanda', ['topics','users']);

// router.get('/', function(req,res,next){
//     res.render('index.html');
// });
// router.get('/api/listuser', function(req, res){
//     db.users.find(function(err, users){
//         if(err){
//             res.send(err);
//         }
//         res.json(users);
//     });
// });
router.get('/home', function(req, res, next){
    db.topics.find(function(err, topics){
        if(err){
            res.send(err);
        }
        res.json(topics);
    });
});
router.get('/', function(req, res, next){
        db.topics.find(function(err, topics){
        if(err){
            res.send(err);
        }
    });
    //res.send('shjit');
    res.json(topics);
    //res.render('index.html');

    
});

module.exports = router;
