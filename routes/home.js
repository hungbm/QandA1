var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://hungbm:31121993@ds115798.mlab.com:15798/mytasklist_hungbm', ['tasks']);

//get all topic
router.get('/', function(req, res, next){
    console.log("here");
    db.topic.find(function(err, topic){
        if(err){
            res.send(err);
        }
        res.json(topic);
    });
});

module.exports = router;