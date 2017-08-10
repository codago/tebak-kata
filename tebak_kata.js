"use strict";

const fs = require("fs");
const readline = require('readline');
var data = JSON.parse(fs.readFileSync("data.json", "utf8"));
var dataln = data.length - 1;
var count = 0;

function display() {
    console.log("=================================================================================");
    console.log("Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!");
    console.log("=================================================================================\n");
}

function promptQuestion() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pertanyaan: " + data[count].definition + "\nTebakan: "
    });
    rl.prompt();

    rl.on('line', (line) => {
        if (count === dataln) {
            if (line.trim().toLowerCase() === data[count].term.toLowerCase()) {
                console.log("Selamat Anda Benar!");
                console.log("\nHore Anda Menang!");
                process.exit(0);
            }
        }

        if (line.trim().toLowerCase() === data[count].term.toLowerCase()) {
            count++;
            console.log("Selamat Anda Benar!");
            rl.setPrompt("Pertanyaan: " + data[count].definition + "\nTebakan: ");
        } else {
            console.log("Wkwkwkwk, Anda kurang beruntung!");
            rl.setPrompt("Tebakan: ")
        }

        rl.prompt();

    }).on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
    });
}

display();
setTimeout(function() {
    promptQuestion();
}, 1000);
