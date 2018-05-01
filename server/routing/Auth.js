const router  = require("express").Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');



const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/AngularDB', (err, client) => {
      if (err) return console.log(err);
      let db = client.db('AngularDB');
      closure(db);
  })
}


router.post("/login", (req, res) =>{
 connection(db => {
   db.collection("Users").findOne({email: req.body.email},
    (err,result) =>{
      if(result){
         if(result.password == req.body.password){
           let token = jwt.sign(result, "okokoko")
          res.send( {message : "ok email and  password  correct", token:token});
         }
         else{
           res.send({message :"wrong passsword"});
         }

      } else{
        res.send({message :"user not found"});
      }
    })
 })

})

router.post("/register", (req, res) =>{
  var email = req.body.email;
  var password = req.body.password;
  var Name = req.body.name;
  var lastName = req.body.lastname;
    connection(db =>{
      db.collection("Users").insert(req.body, ( err, result ) =>{
        res.send(result);

      })
})
})
module.exports = router;
