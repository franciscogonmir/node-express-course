//add server

const express = require('express');//import module express
const app = express();//call constructor express

app.listen(8000,function(){
    console.log("Server is running");
})