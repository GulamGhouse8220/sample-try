const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userdetail = {
    firstName:String,
    lastName:{type:String},
    email:String,
    password:String,
    dob:String,
    phone:Number,
    state:String
}

const users = mongoose.model("userslist",userdetail)

module.exports = users;
