var express = require('express');
var router = express.Router();
var Question = require('../models/question');
var Tags = require("../models/tags");
var assert = require('assert');
var jwt = require('jsonwebtoken');


router.get('/', function(req,res,next){
    Tags.find(function(error, result){
        if (error){
          return res.status(500).json({
              title: 'shit happens at get tags',
              error: error
          });
        }
        res.status(201).json({
          message : 'get tags success',
          obj: result
      });
    });
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

router.post('/', function(req, res, next){
   var decoded = jwt.decode(req.query.token);
   
  var question = new Question({
        upvote: req.body.upvote,
        view: req.body.upvote,
        createdDate: req.body.createdDate,
        isAnswered: req.body.isAnswered,
        isClosed: req.body.isClosed,
        tags: req.body.tags,
        userID : req.body.userID,
        question: {
            title: req.body.question.title,
            content: req.body.question.content
            }
  });
  console.log(question);
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
