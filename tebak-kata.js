"use strict";

const fs = require("fs");
const readline = require('readline');
var dataJson = JSON.parse(fs.readFileSync("data.json", "utf8"));
var panjang = dataJson.length - 1;
var x = 0;

console.log("WELCOME MA NIGGA!." + "THIS IS A SIMPLE QUESTION FOR YA" +
             "\nU WILL GET THE QUESTION FROM THE 'data.json'." + "ANSWER THE QUESTION CORRECTLY!!");

if(process.argv[2] === undefined || process.argv[2].toLowerCase() !=="data.json")
{
 console.log("\nPLEASE NIGGA, PUT THE NAME OF FILE AS THE INPUT OF THE QUESTION");
 console.log("Ex. 'node tebak-kata.js data.json'")
 process.exit();
}

function question()
 {
    const rl = readline.createInterface(
      {
        input: process.stdin,
        output: process.stdout,
        prompt: "Question: " + dataJson[x].definition + "\nYA ANSWER??: "
    });
    rl.prompt();
console.log("Question: " + dataJson[x].definition + "\nYA ANSWER??: ");

    rl.on('line', (userAnswer) => {
        if (x === panjang) {
            if (userAnswer.trim().toLowerCase() === dataJson[x].term.toLowerCase())
            {
                console.log("CONGRATZ U ARE RIGHT DAWG!");
                console.log("\nWOW YA WIN A BIKE NIGGA");
                console.log("HAPPY INDEPENDENCE DAY ALL :)")
                process.exit(0);
            }
        }

        if (userAnswer.trim().toLowerCase() === dataJson[x].term.toLowerCase())
        {
            x++;
            console.log("DAMN U RIGHT NIGGA!");
            rl.setPrompt("Question: " + dataJson[x].definition + "\nAnswer: ");
        } else

        {
            console.log("YOU GOTTA BE KIDDING ME DAWG!");
            rl.setPrompt("CANT YOU ANSWER THIS EZ QUESTION AGAIN?: ")
        }

        rl.prompt();}

    ).on('close', () =>
     {
       console.log("REALLY NIGGA U QUIT? DAMN PUSSY!!");
       process.exit(0);
    })
};
question();
