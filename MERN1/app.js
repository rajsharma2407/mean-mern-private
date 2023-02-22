const express = require('express');
const app = express();
const PORT = 8080;
const userRoutes = require('./src/routes/userRoutes');
const bookRoutes = require('./src/routes/bookRoutes');
require('dotenv').config();
const {connectDatabase} = require('./src/config/db-config');
connectDatabase();

app.use(express.json());

app.use('/user', userRoutes)
app.use('/book', bookRoutes)
app.listen(PORT, ()=>{
    console.log("Server started at Port ", PORT)
})