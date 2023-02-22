const mongoose = require('mongoose');

async function connectDatabase() {
    mongoose.connect(process.env.MONGODB_URL);
    
    const db = await mongoose.connection;
    
    db.on('error', err=>{
        console.log(err)
    })
    db.on('open', ()=>{
        console.log("Database connected")
    });
}

module.exports = {connectDatabase};