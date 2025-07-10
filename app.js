
const http=require('http');
const routes=require("./routes")


const server=http.createServer(routes);

server.listen(3002, ()=>{
    console.log("server is running");
});