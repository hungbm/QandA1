var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


router.post('/', function(req, res, next) {
    //neu co email => dang ky
    if (req.body.email !== '') {
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
        user.save(function(err, result) {
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
    }
    //Neu email null => dang nhap
    else {
        User.findOne({username: req.body.username}, function(err, user){
            if (err) {
                return res.status(500).json({
                    message: 'Shit happens at sign in route',
                    error: err
                });
            }
            if (!user){
                return res.status(401).json({
                    message: 'Login failed',
                    error: { message: 'Invalid login credentials'}
                });
            }
            if (!bcrypt.compareSync(req.body.password, user.password)){
                return res.status(401).json({
                    message: 'Login failed',
                    error: { message: 'Invalid login credentials'}
                });
            }
            var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
            res.status(200).json({
              message: 'Sign in success',
              token: token,
              userId: user._id,
              name: user.name
            });
        });
    }
});


module.exports = router;
