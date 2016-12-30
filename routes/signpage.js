var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');




router.post('/', function (req, res, next) {
    var user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        avatarUrl: req.body.avatarUrl,
        summary: req.body.summary,
        name: req.body.name,
        dateJoin: req.body.dateJoin,
        point: req.body.point
    });
    console.log(user);
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                message: 'Shit happens at sign Up route',
                error: err
            });
        }
        res.status(201).json({
            mess: 'User Created',
            obj: result
        });
    });
});


module.exports = router;
