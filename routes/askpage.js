var express = require('express');
var router = express.Router();
var Question = require('../models/question');


router.post('/', function(req, res, next){
  var question = new Question({
        upvote: req.body.upvote,
        view: req.body.upvote,
        createdDate: req.body.createdDate,
        isAnswered: req.body.isAnswered,
        isClosed: req.body.isClosed,
        tag: req.body.tag,
        userID : req.body.userID,
        question: {
            title: req.body.question.title,
            content: req.body.question.content
            }
  });
  question.save(function(err, result){
      if (err){
          return res.status(500).json({
              title: 'and Error occurred',
              error: err
          });
      }

      res.status(201).json({
          message : 'Saved',
          obj: result
      });
      
  });

  
});


module.exports = router;
