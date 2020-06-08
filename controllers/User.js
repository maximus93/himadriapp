const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const UserPost = mongoose.model("UserPost");

router.post("/signup", async (req, res) => {
    const newuser = new User();
    newuser.Name = req.body.name;
    newuser.Email = req.body.email;
    newuser.Password = req.body.name;

    await newuser.save((err, response) => {
        if(err){
            res.send(err)
        }else{
            res.send(newuser._id)
        }
    })
})




module.exports = router;




