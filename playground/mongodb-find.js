// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj= new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id :new ObjectID('5ad442bec11bdfc3533b136f')
  // }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) =>{
  //   console.log('unable to fetch a data',err);
  // });

  // db.collection('Todos').find().count().then((count) =>{
  //   console.log(`Todos count: ${count}`);
  // },(err) =>{
  //   console.log('unable to fetch a data',err);
  // });

  //  db.collection('Users').find({name:'Gauri'}).count().then((count) =>{
  //    console.log(`User Name' Gauri' : ${count}`);
  //  },(err) =>{
  //    console.log('unable to fetch data');
  //  });

   db.collection('Users').find({name:'Gauri'})
   .toArray().then((docs) =>{
      console.log(JSON.stringify(docs,undefined,2));
    });



 // db.close();
});
