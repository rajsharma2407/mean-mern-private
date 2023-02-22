const { findByIdAndDelete } = require('../models/User');
const User = require('../models/User');

const getUsers = async () =>{
    const users = await User.find();
    return users;
}

const getUserWithEmail = async (email) =>{
    const user = await User.findOne({email:email});
    return user;
}

const saveUser = async (user) =>{
    const findUser = await getUserWithEmail(user.email);
    console.log(findUser)
    if(findUser) {
        return "User already exists";
    }
    const newUser = new User(user);
    newUser.save((err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('user saved')
            return "User Saved";
        }
    });
    return "Error"
}

const updateUser = async (user) =>{
    const findUser = getUserWithEmail(user.email);
    if(!findUser) return "Invalid User";
    await User.findOneAndUpdate({email:user.email}, user );
    return "User updated"
}

const deleteUser = async (email) =>{
    await User.findOneAndDelete({email:email});
    return "User removed";
}


module.exports = {getUsers, saveUser, getUserWithEmail, updateUser, deleteUser}