var express = require('express');
var router = express.Router();
var Question = require('../models/question');
var Answer = require('../models/answer');
var User = require('../models/user');
var assert = require('assert');
router.get('/api/:id', function(req, res, next) {
    //console.log("debug3");
    
    Question.findById(req.params.id, function(err, reply) {
        console.log("debug2:", req.param.id);
        
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



        //ok chu code di ok test co day
        var answerOwner = [];
        var answers = [];
        answers = reply.answers;
        
        var answerlength = answers.length;
        var Promises = [];
        
        for (var i = 0; i < answerlength; i++) {
            Promises.push(Answer.findById((answers[i])));
        }
        
        Promises.push(User.findById(reply.userID).select('_id name avatarUrl'));
        
        Promise.all(Promises).then(ansContents => {
                //var owner = ansContents[ansContents.length - 1];
                var owner = ansContents.pop();
                //get data of user who answers
                console.log(ansContents);
                var count = 0;
                var newPromises = ansContents.map((obj) => {
                    var queryUserAnswer = User.findById(obj.userID).select('name avatarUrl');
                    return queryUserAnswer.then((doc) => {
                        count++;
                        return doc;
                    });
                });
                Promise.all(newPromises).then(docs => {
                    //console.log("debug1: ", docs);
                    res.json({
                        message: 'Success',
                        obj: reply,
                        //questionOwner: ansContents.pop(),
                        questionOwner: owner,
                        answers: ansContents,
                        answerOwner: docs
                    });
                })
                    //This code will work

                }).catch(err => res.json({
                title: 'Shit happens',
                error: err
            }));
        //tu tu
        
        // var answerOwner = [];
        // var answers = [];
        // answers = reply.answers;
        
        // var answerlength = answers.length;
        // var Promises = [];
        // for (i = 0; i < answerlength; i++) {
        //     Promises.push(Answer.findById((answers[i])));
        // }
        // Promises.push(User.findById(reply.userID).select('_id name avatarUrl'));
        // Promise.all(Promises).then(ansContents => {
        //         var owner = ansContents.pop();
        //         //get data of user who answers
        //         var count = 0;
        //         ansContents.forEach(function(obj) {
        //                 var queryUserAnswer = User.findById(obj.userID).select('_id name avatarUrl');
        //                 queryUserAnswer.then(function(doc) {
        //                         //console.log(doc);
        //                         answerOwner.push(doc);
        //                         //console.log(ansContents[x].name = doc.name);
        //                         count++;
        //                         //console.log(count == ansContents.length);
        //                     });
        //                     if (count == ansContents.length) {
        //                         console.log(answerOwner);
        //                         res.json({
        //                             message: 'Success',
        //                             obj: reply,
        //                             //questionOwner: ansContents.pop(),
        //                             questionOwner: owner,
        //                             answers: ansContents,
        //                             answerOwner: answerOwner
        //                         });
        //                     }
        //                 });
        //             //This code will work

        //         }).catch(err => res.json({
        //         title: 'Shit happens',
        //         error: err
        //     }));
            
        //end

        //old code
        /*
        var answerOwner = [];
        var answers = [];
        answers = reply.answers;
        var answerlength = answers.length;
        var Promises = [];
        for (i = 0; i < answerlength; i++) {
            Promises.push(Answer.findById((answers[i])));
        }
        Promises.push(User.findById(reply.userID).select('_id name avatarUrl'));
        Promise.all(Promises).then(ansContents => {
            var owner = ansContents.pop();
            //get data of user who answers
            for(x = 0; x<ansContents.length; x++){
                var queryUserAnswer = User.findById(ansContents[x].userID).select('_id name avatarUrl');
                queryUserAnswer.then(function(doc){
                    console.log(doc);
                    answerOwner.push(ansContents[x]);
                    //console.log(ansContents[x].name = doc.name);
                });
            }
            
            //This code will work
            res.json({
                message: 'Success',
                obj: reply,
                //questionOwner: ansContents.pop(),
                questionOwner: owner,
                answers: ansContents,
                answerOwner: answerOwner
                
            });
        }).catch(err => res.json({
            title: 'Shit happens',
            error: err
        }));
        */
        //end old code
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
        if (req.body.type === "isBest") {
            console.log(req.query.answerID);
            var updateAnswerQuery = Answer.findByIdAndUpdate(req.query.answerID, {
                isBest: true
            });
            assert.ok(!(updateAnswerQuery instanceof require('mpromise')));
            updateAnswerQuery.then(function(doc) {
                res.status(201).json({
                    message: 'update answer success',
                    obj: doc
                });
            });

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
