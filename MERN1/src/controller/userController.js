const fs = require('fs');
const userService = require('../services/userService');
const {validationResult} = require('express-validator');

const getUsers = (req, res) =>{
    return res.send(userService.getUsers());
}

const saveUser = (req, res) =>{
    const user = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        var errMsg = errors.mapped();
        res.send(errMsg)
    }
    res.send(userService.saveUser(user));
}

const updateUser = (req, res) =>{
    const user = req.body;
    return res.send(userService.updateUser(user));
}
const deleteUser = (req, res) =>{
    const email = req.params.email;
    res.send(userService.deleteUser(email))
}
module.exports = {getUsers, saveUser, updateUser, deleteUser}