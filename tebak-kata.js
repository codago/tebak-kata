"use strict"


const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({  input: process.stdin,  output: process.stdout });



fs.readFile('data.json', 'utf-8', (err, data) =>{
  if (err) throw err;

  let isijson = JSON.parse(data)
rl.question('Selamat datang di Permainan Tebak-kata, silahkan jawab dengan benar... \n', () => {

  console.log(isijson[0].definition)
  rl.question('Jawaban : ', (jawab) => {
    if (isijson[0].term === jawab) {
      console.log('selamat anda benar \n');
    }else {
      console.log('wkwk anda salah \n');
    }

     console.log(isijson[1].definition)
     rl.question('Jawaban : ', (jawab) => {
       if (isijson[1].term === jawab) {
        console.log('selamat anda benar \n');
      }else {
         console.log('wkwk anda salah \n');
       }

      console.log(isijson[2].definition)
       rl.question('Jawaban : ', (jawab) => {
         if (isijson[2].term === jawab) {
           console.log('selamat anda benar \n');
         }else {
           console.log('wkwk anda salah \n');
         }

         rl.question('Hore Anda Menang !', () => {rl.close();});

        });
     });
  });
})
})
