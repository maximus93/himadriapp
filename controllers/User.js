const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const UserPost = mongoose.model("UserPost");

router.post("/signup", async (req, res) => {
    const newuser = new User();
    newuser.Name = req.body.name;
    newuser.Email = req.body.email;
    newuser.Password = req.body.password;

    await newuser.save((err, response) => {
        if(err){
            res.send(err)
        }else{
            res.send(newuser._id)
        }
    })
})

router.get("/login", async (req, res) => {
    const data = await User.findOne({ Email : req.body.email , Password :req.body.password})
    if(!data){
      res.send('Invalid').status('200')
    }else{
      res.send(data).status('200')
    }
   
})




module.exports = router;




