// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // Insert new doc into Users (name, age, location)
    db.collection('Users').insertOne({
        name: 'Gauri',
        age: 28,
        location: 'Pune'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
     
    });

    // update an information
    db.collection('Users').findOneAndUpdate()


    db.close();
});
