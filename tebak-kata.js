"use strict";

const fs = require("fs");
const readline = require('readline');
var data = JSON.parse(fs.readFileSync("data.json", "utf8"));
var panjang = data.length - 1;
var x = 0;

console.log("WELCOME MA NIGGA!." + "THIS IS A SIMPLE QUESTION FOR YA" +
             "\nU WILL GET THE QUESTION FROM THE 'data.json'." + "ANSWER THE QUESTION CORRECTLY!!");

question();


function question()
 {
    const rl = readline.createInterface(
      {
        input: process.stdin,
        output: process.stdout,
        prompt: "Question: " + data[x].definition + "\nYA ANSWER??: "
    });
    rl.prompt();
console.log("Question: " + data[x].definition + "\nYA ANSWER??: ");

    rl.on('line', (userAnswer) => {
        if (x === panjang) {
            if (userAnswer.trim().toLowerCase() === data[x].term.toLowerCase())
            {
                console.log("CONGRATZ U ARE RIGHT DAWG!");
                console.log("\nWOW YA WIN A BIKE NIGGA");
                console.log("HAPPY INDEPENDENCE DAY ALL :)")
                process.exit(0);
            }
        }

        if (userAnswer.trim().toLowerCase() === data[x].term.toLowerCase())
        {
            x++;
            console.log("DAMN U RIGHT NIGGA!");
            rl.setPrompt("Question: " + data[x].definition + "\nAnswer: ");
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
