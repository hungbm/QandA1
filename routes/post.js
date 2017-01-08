var express = require('express');
var router = express.Router();
var Question = require('../models/question');
var Answer = require('../models/answer');
var User = require('../models/user');
var assert = require('assert');
router.get('/api/:id', function(req, res, next) {
    Question.findById(req.params.id, function(err, reply) {
        if (err) {
            return res.status(500).json({
                title: 'Shit happens',
                error: err
            });
        }

        //get Data of Question Owner
        // var p_owner = User.findById(reply.userID);
        // assert.ok(!(p_owner instanceof require('mpromise')));

        //get array of 
        //reply contain question content and answer IDs
        //The following code is to get content of answers



        var answers = [];
        answers = reply.answers;
        var answerlength = answers.length;
        var Promises = [];
        for (i = 0; i < answerlength; i++) {
            Promises.push(Answer.findById((answers[i])));
        }
        Promises.push(User.findById(reply.userID).select('_id name avatarUrl'));
        Promise.all(Promises).then(ansContents => {
            res.json({
                message: 'Success',
                obj: reply,
                questionOwner: ansContents.pop(),
                answers: ansContents
                
            });
        }).catch(err => res.json({
            title: 'Shit happens',
            error: err
        }));
    });
});

router.post('/api/:id', function(req, res, next) {

    if (req.body.type) {
        if (req.body.type === "close") {
            Question.findByIdAndUpdate(
                req.params.id, {
                    isClosed: true
                },
                function(err, result) {
                    if (err) {
                        return res.status(500).json({
                            title: 'Shit happens at set Question Close',
                            error: err
                        });

                    }
                    res.status(201).json({
                        message: 'Saved',
                        obj: result
                    });
                });
        }
        if (req.body.type === "answered") {
            Question.findByIdAndUpdate(
                req.params.id, {
                    isAnswered: true
                },
                function(err, result) {
                    if (err) {
                        return res.status(500).json({
                            title: 'Shit happens at set Question Close',
                            error: err
                        });

                    }
                    res.status(201).json({
                        message: 'Saved',
                        obj: result
                    });
                });
        }
        if (req.body.type === "edit") {

        }
    }
    else {

        var answer = new Answer({
            userID: req.body.userID,
            upvote: req.body.upvote,
            isBest: req.body.isBest,
            createdDate: req.body.createdDate,
            store_ID: req.body.store_ID,
            content: req.body.content
        });
        answer.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'Shit happens at save answer',
                    error: err
                });
            }
            //after save answer, time to put answerID into question array:
            Question.findByIdAndUpdate(
                req.params.id, {
                    $push: {
                        answers: result._id
                    }
                },
                function(error, response) {
                    if (error) {
                        return res.status(500).json({
                            message: 'Shit happens at push answerID in array',
                            error: error
                        });
                    }
                });
            res.status(201).json({
                message: 'Saved',
                obj: result
            });

        });
    }
});


module.exports = router;
