// const http=require('http')

const express=require('express');

const presss=express();

presss.use((req,res,next)=>{
    console.log("output from middlewear 1");
    next();
})

presss.use((req,res,next)=>{
    console.log("output from middlewear 2");
    res.send("<h1>Hello world</h1>");
})

// const server=http.createServer(presss)

// server.listen(3008)

presss.listen(3000, ()=>{
    console.log("Server is up and running on port 3000! Ready to handle requests");
}) //instead using those two lines this is enough because of express