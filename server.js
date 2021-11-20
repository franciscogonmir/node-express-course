//add server

const express = require('express');//import module express
const app = express();//call constructor express
const bodyParser = require('body-parser');
app.use(bodyParser.json());
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

//post method
app.post("/login",function(req,res){
    userMock = "userFj";
    userPassword="secret"
    if(userMock == req.body.username && userPassword == req.body.password){
        res.json({
            success:true,
            message:"login success!",
            token:"encrypted token goes here"
        })
    }else{
        res.json({
            success:false,
            message:"user or password invalid"
        })
    }
})

app.listen(8000,function(){
    console.log("Server is running");
})