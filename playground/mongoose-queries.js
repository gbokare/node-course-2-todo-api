const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/Users');

//var id = '6adf178176d9e618017a59e8';

// if(!ObjectId.isValid(id)){
//     console.log('ID not valid');
// } 

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos' ,todos); 
// });

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) =>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id',todo);
// }).catch((e) => conosle.log(e));



User.findById('5ad71850ba3b7ea217fb64e6').then((user) =>{
    if(!user){
        return console.log('User not found');
    }
    console.log('User found', user );
},(e) =>{
    console.log((e));

})






