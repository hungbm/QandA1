var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');

router.post('/', function (req, res, next) {
    var user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function (err, result) {
        if (error) {
            return res.status(500).json({
                message: 'Shit happens at push answerID in array',
                error: error
            });
        }
        res.status(201).json({
            mess: 'User Created',
            obj: result
        });
    });
});


module.exports = router;
