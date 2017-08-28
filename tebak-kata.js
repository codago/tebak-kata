const readline = require('readline');
const fs = require ('fs');
let data = JSON.parse(fs.readFileSync("data.json", "utf8"))
let word = data.length -1;
let count = 0
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//judul
console.log("Hallo bro, kita maen tebak tebakan kuy?");
//Pertanyaan
rl.setPrompt("Pertanyaan :" + data[count].definition+"\nTebakan :")
rl.prompt();
rl.on('line', (line) => {
  if (count === word){
    if (line.trim().toLowerCase() === data[count].term.toLowerCase()) {
      console.log("Selamat bro, lu bener!");
      console.log("\nGila bro! Lu menang!");
      process.exit(0);
    }
  }
  if (line.trim().toLowerCase() === data[count].term.toLowerCase()) {
    count++
    console.log("Selamat bro, lu bener!");

    rl.setPrompt('Pertanyaan :'+ data[count].definition+"\nTebakan :")
  } else {
    console.log('Mamam! salah!')
    rl.setPrompt("Tebakan :")
  }
    rl.prompt();
    //fitur 
}).on('close',() => {
  console.log('Dadah bro!');
  process.exit(0);
});
