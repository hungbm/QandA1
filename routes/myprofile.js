var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var Question = require('../models/question');
var Answer = require('../models/answer');
var assert = require('assert')
router.get('/api/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Shit happens at get my profile',
                error: err
            });
        }

        //Promise to count 
        var totalPost = 0;
        var totalCorrectAns = 0;

        var queryCountCorrectAns = Answer.count({
            userID: req.params.id,
            isBest: true
        });
        assert.ok(!(queryCountQuestion instanceof require('mpromise')));

        var queryCountQuestion = Question.count({
            userID: req.params.id
        });
        assert.ok(!(queryCountQuestion instanceof require('mpromise')));



        var queryCountAnswer = Answer.count({
            userID: req.params.id
        });
        assert.ok(!(queryCountAnswer instanceof require('mpromise')));

        queryCountQuestion.then(function(doc) {
            totalPost = totalPost + doc;
            queryCountAnswer.then(function(doc) {
                totalPost = totalPost + doc;
                queryCountCorrectAns.then(function(doc) {
                    totalCorrectAns =  doc;
                    res.status(201).json({
                        message: 'success',
                        obj: result,
                        totalPost: totalPost,
                        totalCorrectAns: totalCorrectAns
                    });
                });

            });
        });















    });
});

router.post('/', function(req, res, next) {
    var updateObj = {};

    if (req.body.password != null && req.body.password != '') {
        updateObj.password = bcrypt.hashSync(req.body.password, 10);
        console.log('here');
    }
    if (req.body.avatarUrl != null && req.body.avatarUrl != '') {
        updateObj.avatarUrl = req.body.avatarUrl;
    }
    if (req.body.summary != null && req.body.summary != '') {
        updateObj.summary = req.body.summary;
    }
    if (req.body.name != null && req.body.name != '') {
        updateObj.name = req.body.name;
    }


    User.findByIdAndUpdate(req.body.username, {
        $set: updateObj
    }, {
        new: true
    }, function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Shit happens at update users ',
                error: err
            });
        }
        res.status(201).json({
            message: 'save user success ',
            obj: result
        });
    });
});


module.exports = router;
