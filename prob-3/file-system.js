// instructions
// 1- First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// 2- Second, create a program that reads and console.log data from welcome.txt

const fs = require('fs')

// creating a new file

fs.writeFile('./welcome.txt', "Hello Node",(err)=>{
    if(err) return console.log(err)
    console.log('file written')
})

//reading an existing file

fs.readFile('./welcome.txt', 'utf-8',(err,data)=>{
    if(err) return console.log(err)
    console.log(data)
})