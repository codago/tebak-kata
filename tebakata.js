"use strict";

const readline = require('readline');
const fs = require('fs');
var data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const rl = readline.createInterface({input: process.stdin,output: process.stdout});
var dataln = data.length;
var kondisi = false;
var i = 0;


function display() {
console.log("Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!");
}

console.log(data[i].definition);
rl.setPrompt("Tebakan : ");

rl.prompt();
rl.on('line', function(line) {

  function cocok(pertanyaan, jawaban) {
    if(pertanyaan.trim().toUpperCase() === jawaban.toUpperCase()) {
      console.log("Selamat Anda Benar");
      return true;
    } else {
      console.log("Wkwkwkwk, Anda kurang beruntung, Ulangi")

      return false;
    }
  }

    if(i === dataln) {
      console.log("Hore Anda Menang!");
      //process.exit(0);
     rl.close();
    } else {
        kondisi = cocok(line, data[i].term);
          if(kondisi === true) {
            i++;
          }
        if(i < dataln) {
        console.log(data[i].definition);
        rl.prompt();

      }
    }
  }).on('close', () =>
          {
            console.log("GOOD BYE");
            process.exit(0);
          })
