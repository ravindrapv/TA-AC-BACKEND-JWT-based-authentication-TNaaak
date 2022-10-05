var express = require('express');
const { route } = require('.');
var router = express.Router();
var User = require('../models/User');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", async (req,res,next) => {
  try {
    var user = await User.create(req.body);
    console.log(user);
    res.status(200).json({user});
  } catch (error) {
    next (error);
  }
});

route.post("/login", async (req,res,next) => {
  var {email,password} = req.body;
  if(!email || !password){
    return res.status(404).json({error:"user not found"});
  } try {
    var user = await User.findOne({email});
  } catch (error) {
    next (error);
  }
})

module.exports = router;
