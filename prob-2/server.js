// instructions : 
// 1- create a server  
// 2- Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' 
// when someone reaches http://localhost:3000


const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html')
    res.write('<h1>Hello Node!!!!</h1>\n')
    res.end()
})

server.listen(3000)