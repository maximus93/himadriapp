const mongoose = require("mongoose");
const URI = "mongodb+srv://himadri:Samadder55@cluster0-ul8z6.mongodb.net/<dbname>?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser: true
    })
    console.log("Database Connected");
}

module.exports = connectDB