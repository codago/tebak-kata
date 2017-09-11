"use strict";

const readline = require('readline'); //readline = buat baca si JSON nya
const fs = require('fs'); //fs = file system = butuh file sistem
var data = JSON.parse(fs.readFileSync("data.json"));
//JSON parse = memanggil data json, lalu readFileSync = membaca file data.json

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var daftarPertanyaan = data.length; //pertanyaan yang ada di data.json
var i = 0; //wadah data dari pertanyaan di data.json
var kondisi = false;

function display() { //membuat fungsi menampilkan awal yang ingin di lakukan
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

    if(i === daftarPertanyaan) {
      console.log("Hore Anda Menang!");

      //process.exit(0);
     rl.close();

    } else {
        kondisi = cocok(line, data[i].term);
          if(kondisi === true) {
            i++;
          }

        if(i < daftarPertanyaan) {
        console.log(data[i].definition);

        rl.prompt();
      }
    }

  }).on('close', () =>
          {
            console.log("GOOD BYE");
            process.exit(0);
})
