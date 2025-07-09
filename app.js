//REQUEST - RESPONSE
// const http =require('http');

// const server=http.createServer((request,res)=>{
//     console.log("Server is created");

//     //req.url ,req.headers
//     res.setHeaders('Content-Type','text-html');
//     if(req.url=='/'){
//         res.statusCode=200; //ok
//         res.end("<h1>hello world</h1>")
//     }else{
//         if(req.url=='/pizza'){
//             res.statusCode=200; //ok
//         res.end("<h1>This is your pizza/h1>")
//         }else{
//             res.statusCode=404;//not found
//             res.end("<h1>page not found<h1>");
//         }
//     }
// })

// let port=3000;
// server.listen(port,() =>{
//     console.log("server is running")
// });


//CREATIN A FORM
const http=require('http');
const server=http.createServer((req,res)=>{
    
    const url=req.url;
    const method=req.method;

    if(req.url=='/'){

        res.setHeader('Content-type','text/html');
        res.end(
            `
            <form action="/message" method="POST">
                <label>Name:</label>
                <input type="text" name="username"></input>
                <button type="submit">Add</button>
            </form>
            `
        );
    }else{
        if(req.url=='/message'){

            res.setHeader('Content-type','text/html');

            let dataChunks=[];
            req.on('data',(chunks)=>{
                console.log(chunks)
                dataChunks.push(chunks);
            })

            req.on('end',()=>{
                let combinedBuffer=Buffer.concat(dataChunks);
                console.log(combinedBuffer.toString)
                let value=combinedBuffer.toString().split("=");
                console.log(value)
            })
        }
    }
})
server.listen(3008, ()=>{
    console.log("server is running")
})