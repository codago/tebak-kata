'use strict'

const readline = require('readline');
const fs = require('fs');

let data = fs.readFileSync('data.json','utf-8');
data = JSON.parse(data)
//
let count =0;
console.log(data[count].definition);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.on('line', (answer) => {

    if(answer.trim().toLowerCase() == data[count].term.toLowerCase()){
      console.log('Selamat Anda Benar!');
      count++
    }else{
      console.log('WKWKW Anda Kurang Beruntung!');
    }

if (count < data.length){
    console.log(data[count].definition);
    rl.prompt();

  }else {

    console.log('Hore Anda Menang!');
    rl.close();
  }


}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
