// instructions : 
// 1- Create a file named "password-generator"  
// 2- Create a function that generates random passwords and console.log() that password.
// (use npm install generate-password)

const generator = require('generate-password')

function passwordGenerator(){
    const password = generator.generate({
        length: 15,
        numbers: true
    });
    console.log(password) 
}

passwordGenerator()