#! usr/bin/env node

import inquirer from "inquirer";

console.log("wellcome to the number guessing game ");

let randomnumber = Math.floor(Math.random() * 5 + 1);

let answer = await inquirer.prompt([
    {
        name:"UserGuessNumber",
        type:"number",
        message:"Type you guess number from ( 1 to 4 )",
    },
]);

if(answer.UserGuessNumber === randomnumber){
    console.log("congratulation you won you guess the right number");
}
else{
    console.log("sorry you guess the wrong number ");
}