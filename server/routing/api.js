const router  = require("express").Router();


router.get("/Hello", (req, res) =>{
  res.send("hi this file Api");
})





module.exports = router;
