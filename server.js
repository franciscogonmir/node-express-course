//add server

const express = require('express');//import module express
const app = express();//call constructor express

const mockUserData = [
    {name:"Mark"},
    {name:"jill"}
];

//get method
app.get('users',function(req,resp){
    resp.json({
        success:true,
        message:"successfully got users. Nice!",
        users:mockUserData
    })
})

app.listen(8000,function(){
    console.log("Server is running");
})