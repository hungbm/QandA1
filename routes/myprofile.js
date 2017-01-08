var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var Question = require('../models/question');
var Answer = require('../models/answer');
var assert = require('assert');
var jwt = require('jsonwebtoken');


router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secret', function(error, decoded) {
        if (error) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: error
            })
        }
        next();

    })
});


router.get('/api/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, result) {
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
            userID: decoded.user._id,
            isBest: true
        });
        assert.ok(!(queryCountQuestion instanceof require('mpromise')));

        var queryCountQuestion = Question.count({
            userID: decoded.user._id
        });
        assert.ok(!(queryCountQuestion instanceof require('mpromise')));

        var queryCountAnswer = Answer.count({
            userID: decoded.user._id
        });
        assert.ok(!(queryCountAnswer instanceof require('mpromise')));


        //Get question and filter time desc
        var listQuestion = []
        var queryGetQues = Question.find({
            userID: decoded.user._id
        }).limit(1).sort({
            createdDate: -1
        });
        assert.ok(!(queryGetQues instanceof require('mpromise')));


        //Get answers and filter time desc
        var listAnswers = []
        var queryGetAns = Answer.find({
            userID: decoded.user._id
        }).limit(1).sort({
            createdDate: -1
        });
        assert.ok(!(queryGetAns instanceof require('mpromise')));
        queryGetAns.then(function(doc) {
            listAnswers = doc;
            queryGetQues.then(function(doc) {
                listQuestion = doc;
                queryCountCorrectAns.then(function(doc) {
                    totalCorrectAns = doc;
                    res.status(201).json({
                        message: 'success',
                        obj: result,
                        listQuestion: listQuestion,
                        listAnswers: listAnswers,
                        totalCorrectAns: totalCorrectAns
                    });
                });
            });
        })
    });
});


router.get('/activities', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    console.log(req.query.quantity);
    if (req.query.type === 'all') {
        var listQ = [];
        var listA = [];
        var queryQ = Question.find({
            userID: decoded.user._id
        }).skip(parseInt(req.query.quantity)).limit(10).sort({
            createdDate: -1
        });
        assert.ok(!(queryQ instanceof require('mpromise')));

        var queryA = Answer.find({
            userID: decoded.user._id
        }).skip(parseInt(req.query.quantity)).limit(10).sort({
            createdDate: -1
        });
        assert.ok(!(queryA instanceof require('mpromise')));
        queryQ.then(function(doc) {
            listQ = doc;
            queryA.then(function(doc) {
                listA = doc;
                res.status(201).json({
                    message: 'get activities success',
                    obj: listQ.concat(listA)
                });
            });
        });

    }

    if (req.query.type === 'ans') {
        var query = Answer.find({
            userID: decoded.user._id
        }).skip(parseInt(req.query.quantity)).limit(10).sort({
            createdDate: -1
        });
        assert.ok(!(query instanceof require('mpromise')));
        query.then(function(doc) {
            res.status(201).json({
                message: 'get activities success',
                obj: doc
            });
        });

    }

    if (req.query.type === 'qus') {
        var query = Question.find({
            userID: decoded.user._id
        }).skip(parseInt(req.query.quantity)).limit(10).sort({
            createdDate: -1
        });
        assert.ok(!(query instanceof require('mpromise')));
        query.then(function(doc) {
            res.status(201).json({
                message: 'get activities success',
                obj: doc
            });
        });
    }
});

router.post('/', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
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
