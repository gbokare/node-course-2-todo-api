// library imports
var express = require('express');
var bodyParser= require('body-parser');

// local imports
var {mongoose} = require('./db/mongoose') ;
var {Todo} =require('./models/Todo');
var {Users} =require('./models/Users');

var app = express();

app.use(bodyParser.json());

//creating a new todo
app.post('/todos',(req,res) =>{
    var todo = new Todo({
        text:req.body.text,
        completed:req.body.completed
    });

    todo.save().then((doc) =>{
        res.send(doc);
    },(e) =>{
        res.status(400).send(e);
    });
});


app.listen(3000,() =>{
    console.log('Started on port 3000');
});

module.exports = {app};