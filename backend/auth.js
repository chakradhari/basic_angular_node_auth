const User = require('./models/User.js');

const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const express = require('express');
const router = express.Router();


router.post('/register', (req, res) => {
    var userData = req.body;
    
    const user = new User(userData);

    user.save((err, result) => {
        if(err)
            console.log('Saving user error');
        res.sendStatus(200);
    })
    
})

router.post('/login', (req, res) => {
    const userData = req.body;
    var user = {};
    User.findOne({email: userData.email}, function(err, record) {
        console.log(record);
        if(!record) {
            return res.status(401).send({message: 'Email or Password Invalid'});
        }

        bcrypt.compare(userData.pwd, record.pwd, (err, isMatch) => {
            
            if(!isMatch)
                return res.status(401).send({message: 'Email or Password Invalid'});
            var payload = {};
            var token = jwt.encode(payload, '123');
            res.status(200).send({token});
        })
    });
});

module.exports = router;
