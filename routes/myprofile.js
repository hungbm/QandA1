var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');

router.get('/api/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Shit happens at get my profile',
                error: err
            });
        }
        res.status(201).json({
            message: 'success',
            obj: result
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
