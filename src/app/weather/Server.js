var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/",(req,res) =>{
  res.send("Hi");
})

const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/TodoDB', (err, client) => {
        if (err) return console.log(err);
        let db = client.db('TodoDB');
        closure(db);
    })
}

app.listen(3000, (err) => {
  console.log("Started on PORT 3000");
})
