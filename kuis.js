const fs        = require("fs");
"use strict";
const readline  = require('readline');
var dataBase    = JSON.parse(fs.readFileSync("data.json", "utf8"));
var panjangData = dataBase.length - 1;
var i           = 0;

function pertanyaan()
  {
   const rl = readline.createInterface(
     {
       input: process.stdin,
       output: process.stdout,
       prompt: "Pertanyaan: " + dataBase[i].definition + "\nKetik Jawaban Anda: "
     }
   );

     rl.prompt();

     rl.on('line', (jawabanUser) =>
     {
       if (i === panjangData)
       {
           if (jawabanUser.trim().toLowerCase() === dataBase[i].term.toLowerCase())
           {
               console.log("Selamat Anda Benar!");
               console.log("Hore Anda Menang");
               console.log("\n\nHave a great day!\nGOOD BYE");
               process.exit(0);
           }
           else
           {
               console.log("Wkwkwkwk, Anda kurang beruntung!");
               rl.setPrompt("Coba jawab lagi: ")
           }

           rl.prompt();

        }
        else
        {
          if ((jawabanUser.trim().toLowerCase() === dataBase[i].term.toLowerCase()))
          {
              i++;
              console.log("Selamat Anda Benar!");
              rl.setPrompt("Pertanyaan: " + dataBase[i].definition + "\nKetik Jawaban Anda: ");
          }
          else
          {
              console.log("Wkwkwkwk, Anda kurang beruntung!");
              rl.setPrompt("Coba jawab lagi: ")
          }
          rl.prompt();
        }
      }).on('close', () =>
              {
                console.log("\n\nHave a great day!\nGOOD BYE");
                process.exit(0);
              })
  };

console.log("Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!");
pertanyaan();
