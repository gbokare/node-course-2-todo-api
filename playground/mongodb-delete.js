// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj= new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // })
  //deletteOne

  // db.collection('Todos').deleteOne({text:'Est Lunch'}).then((result) =>{
  //   console.log(result);
  // })

  // findOne deleted
//   db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
//     console.log(result);
//   })
 //challenge

// db.collection('Users').deleteMany({name:'Gauri'}).then((result)=>{
//     console.log(result);
//   })

  // delet on ewith specific id
  db.collection('Users').findOneAndDelete({_id:new ObjectID('5ad435f0babb9e14faee9212')})
  .then((result) =>{
         console.log(JSON.stringify(result,undefined,2));
      });
  

  db.close();
});
