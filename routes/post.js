var express = require('express');
var router = express.Router();
var Question = require('../models/question');
var Answer = require('../models/answer');
router.get('/api/:id', function (req, res, next) {
    Question.findById(req.params.id, function (err, reply) {
        if (err) {
            return res.status(500).json({
                title: 'Shit happens',
                error: err
            });
        }
        //reply contain question content and answer IDs
        //The following code is to get content of answers

        var answers = [];
        answers = reply.answers;
        var answerlength = answers.length;
        var Promises = [];
        for (i = 0; i < answerlength; i++) {
            Promises.push(Answer.findById((answers[i])));
        }
        Promise.all(Promises).then(ansContents => res.json({
            message: 'Success',
            obj: reply,
            answers: ansContents
        })).catch(err=>res.json({
            title: 'Shit happens',
                error: err
        })) 


    });
});

router.post('/api/:id', function (req, res, next) {
    var answer = new Answer({
        userID: req.body.userID,
        upvote: req.body.upvote,
        isBest: req.body.isBest,
        createdDate: req.body.createdDate,
        store_ID: req.body.store_ID,
        content: req.body.content
    });
    answer.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Shit happens at save answer',
                error: err
            });
        }
        //after save answer, time to put answerID into question array:
        Question.findByIdAndUpdate(
            req.params.id,
            { $push: { answers: result._id } },
            function (error, response) {
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
});

// router.get('/api/:id', function(req, res,next){
//     db.topics.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, topic){
//         if(err){
//             res.send(err);
//         }
//         res.json(topic);
//     });
// });

// router.get('/', function(req, res,next){
//     db.topics.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, topic){
//         if(err){
//             res.send(err);
//         }
//         res.json(topic);
//     });
// });



module.exports = router;
