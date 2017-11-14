const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

const Post = require('./models/Post.js');
const User = require('./models/User.js');
const auth = require('./auth.js');


app.use(cors());
app.use(bodyParser.json());

app.get('/posts/:id', (req, res) => {
    var author = req.params.id;

    Post.find({author}, function(err, posts) {
        res.send(posts);
    }) 
});

app.post('/post', (req, res) => {
    var postData = req.body;
    postData.author = '5a0acf7337c71419bcab0327';

    var post = new Post(postData);

    post.save((err, result) => {
        if(err) {
            console.error("Saving post error");
            res.status(500).send({message: 'Saving post error'})
        }    

        res.sendStatus(200);
    })
});

app.get('/users', (req, res) => {
    User.find({}, "-pwd -__v", function(err, users) {
        res.status(200).send(users);
    })
});

app.get('/profile/:id', (req, res) => {
    User.findById(req.params.id, '-pwd -__v', function(err, user) {
        res.send(user);
    })
});


mongoose.connect('mongodb://localhost/pssocial', {useMongoClient: true} ,(err) => {
    if(!err)
        console.log("Mongo up and running")
});

app.use('/auth', auth);

app.listen(port, function() {
    console.log("Working Code");
})