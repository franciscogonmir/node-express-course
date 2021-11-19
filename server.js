//add server

const express = require('express');//import module express
const { request } = require('http');
const app = express();//call constructor express

const mockUserData = [
    {name:"Mark"},
    {name:"jill"}
];

//get method
app.get('/users',function(req,resp){
    resp.json({
        success:true,
        message:"successfully got users. Nice!",
        users:mockUserData
    })
})

//get method with param
app.get("/users/:id",function(req,res){
    res.json({
        success:true,
        message:"got one user",
        users:req.params.id
    })
})

app.listen(8000,function(){
    console.log("Server is running");
})