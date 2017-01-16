var express = require('express');
var router = express.Router();
var Question = require('../models/question');
var Answer = require('../models/answer');
var User = require('../models/user');
var StoreID = require('../models/storeID');
var assert = require('assert');
var jwt = require('jsonwebtoken');
router.get('/api/:id', function(req, res, next) {

    Question.findById(req.params.id, function(err, reply) {
        
        if(req.query.userId){
            
        }
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
        Promises.push(StoreID.findOne({userId: req.query.userId}));
        
        Promise.all(Promises).then(ansContents => {
            //var owner = ansContents[ansContents.length - 1];
            var postState = ansContents.pop();
            var owner = ansContents.pop();
            //get data of user who answers
            var count = 0;
            var newPromises = ansContents.map((obj) => {
                var queryUserAnswer = User.findById(obj.userID).select('name avatarUrl');
                return queryUserAnswer.then((doc) => {
                    count++;
                    return doc;
                });
            });
            Promise.all(newPromises).then(docs => {

                    res.json({
                        message: 'Success',
                        obj: reply,
                        postState: postState,
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

router.post('/api/:id/vote', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    var queryPost;
    if (req.body.isQuestion == true) {
        queryPost = Question.findByIdAndUpdate(req.body.postID, {
            $inc: {
                upvote: req.body.value
            }
        });

    }
    else {
        queryPost = Answer.findByIdAndUpdate(req.body.postID, {
            $inc: {
                upvote: req.body.value
            }
        });

    }
    assert.ok(!(queryPost instanceof require('mpromise')));


    //Check user on store yet
    StoreID.findOne({
            userId: decoded.user._id
        }, function(err, result) {

            if (err) {
                return res.status(500).json({
                    title: 'Shit happened at check user stored in StoreID',
                    error: err
                });
            }
            //If not exist
            if (!result) {
                StoreID.create({
                    userId: decoded.user._id,
                    voted: [{
                        postId: req.body.postID,
                        state: req.body.value
                    }]
                }, function(err, createdItem) {
                    if (err) {
                        return res.status(500).json({
                            title: 'Shit happened at creat store',
                            error: err
                        });
                    }
                    //Created success
                 
                });
            }
            else { //exist -> check if postId existed
                StoreID.findOne({
                    userId: decoded.user._id,
                    voted: {
                        $elemMatch: {
                            postId: req.body.postID
                        }
                    }
                }, function(err, resultFindPost) {
                    if (err) {
                        return res.status(500).json({
                            title: 'Shit happened at find postId',
                            error: err
                        });
                    }
                    if (!resultFindPost) { //not found
                        //update voted array
                        StoreID.update({
                                userId: decoded.user._id
                            }, {
                                $push: {
                                    voted: {
                                        postId: req.body.postID,
                                        state: req.body.value
                                    }
                                }
                            },
                            function(err, result) {
                                if (err) {
                                    return res.status(500).json({
                                        title: 'Shit happened at push store in array',
                                        error: err
                                    });
                                }
                       
                            });
                    }
                    else { //Found post
                        StoreID.update({
                                userId: decoded.user._id,
                                "voted.postId": req.body.postID
                            }, {
                                $set: {
                                    "voted.$.state": req.body.value
                                }
                            },
                            function(err, result) {
                                if (err) {
                                    return res.status(500).json({
                                        title: 'Shit happened at change state',
                                        error: err
                                    });
                                }

                            });
                    }
                });
            }
            queryPost.then(function(doc) {
                console.log(doc);
                res.status(201).json({
                    message: 'Saved',
                    obj: doc
                });
            }).catch(err => res.json({
                title: 'Shit happens at promise queryPost',
                error: err
            }));
        }

    );

    //do promise here:




});


module.exports = router;
