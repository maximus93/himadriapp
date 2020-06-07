const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model('User');


router.post("/signup", (req,res) => {
    console.log(req.body);
    //const {name,email,password} = req.body
    /*const newuser = new User();
    await newUser.save((err,response)=> {
        if(err){
          console.log(err);
        }else{
          console.log(response);
        }
      });
      //res.send(newUser);*/

    res.send("Hello World")
})


module.exports = router