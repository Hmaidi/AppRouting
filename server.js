var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const api = require("./server/routing/api");
const auth = require("./server/routing/Auth");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api", api);
app.use("/auth", auth);

app.listen(3000, (err) => {
  console.log("Started on PORT 3000");
})
