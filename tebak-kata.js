"use strict";
var readline = require('readline');
var fs = require('fs');
var datajson = JSON.parse(fs.readFileSync("data.json", "utf8"));
var rl = readline.createInterface({input: process.stdin,output: process.stdout});
var kondisi = true;
var tanya = 0;
console.log('Selamat datang di Permainan Tebak-kata, silahkan jawab dengan benar... \n');
function cekjawaban(pertanyaan, jawaban) {
  if (pertanyaan.trim().toUpperCase() === jawaban.toUpperCase()) {
    console.log("selamat anda benar\n");
    return true;
  }
  else {
    console.log("maaf anda salah \n")
    return false;
  }
}
console.log("Pertanyaan : " + datajson[tanya].definition);
rl.setPrompt('Jawaban : ' );
rl.prompt();
rl.on('line', function(line) {
  if(tanya === datajson.length) {
    console.log("Hore Anda Menang!");
    rl.close();
  } else {
    kondisi = cekjawaban(line, datajson[tanya].term);
    if(kondisi === true) {
      tanya++;
    }
    if(tanya < datajson.length) {
      console.log("Pertanyaan : " + datajson[tanya].definition);
      rl.prompt();
    }
  }
})
