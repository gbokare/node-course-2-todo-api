// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj= new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate(
//   {
//     _id:new ObjectID('5ad46a7ec11bdfc3533b1375')
//   },{
//     $set: {
//       completed:true
//     }
//   },{
//     returnOriginal:false
//   }).then((result) =>{
//     console.log(result);
//   });
  // challenge
  db.collection('Users').findOneAndUpdate({
      _id:new ObjectID('5ad5c67ec11bdfc3533b1376')
    },{
      $set: {
        name : 'Akhil',
      },
        $inc: {
           age: -6,
           }
          },{
      returnOriginal:false
    }).then((result) =>{
      console.log(result);
    });


  //db.close();
});
