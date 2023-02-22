const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:String
})

const User = mongoose.model("User", UserSchema);

module.exports = User;