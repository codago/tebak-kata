"use strict";

const readline = require('readline') ;
const fs = require('fs');
let data = JSON.parse(fs.readFileSync("data.json","utf8"))
let word = data.length -1;
let count = 0

console.log("Selamat Datang di permainan Tebak Kata ,silahkan isi dengan jawaban yang benar ya!")

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
});

rl.setPrompt('Pertanyaan:' + data[count].definition +'\nTebakan:')
rl.prompt();

rl.on('line',(line) => {
  if (count === word) {
    if(line.trim().toLowerCase() === data[count].term.toLowerCase()) {
      console.log("Selamat Anda Benar!");
      console.log("\nHore Anda Menang!!!");
      process.exit(0);
    }
  }
  if(line.trim().toLowerCase()=== data[count].term.toLowerCase()){
    count++
    console.log("Selamat Anda Benar!");

 rl.setPrompt('Pertanyaan:'+ data[count].definition+'\nTebakan:')
  } else {
    console.log("Wkwkwkwk, Anda kurang beruntung!")
    rl.setPrompt('Tebakan:')
  }
    rl.prompt();

}).on('close',() => {
  console.log('Have a great day!!!');
  process.exit(0);
});
