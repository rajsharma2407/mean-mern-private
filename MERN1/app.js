const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./routes/routes');
app.use(express.json());

app.use('/', routes)
app.listen(PORT, ()=>{
    console.log("Server started at Port ", PORT)
})