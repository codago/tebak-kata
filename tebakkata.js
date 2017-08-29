const readline = require('readline');
const fs = require('fs');

let data = fs.readFileSync('data.json', 'utf8');

data=JSON.parse(data)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let next = 0;
rl.setPrompt('tebakan:')
console.log('selamat datang dipermainan tebak kata,silahkan isi dengan jawaban yang benar ya!');
console.log(`pertanyaan : ${data[next].definition}`);
rl.prompt()

rl.on('line', (answer) => {
  //if jawaban benar
  if(answer.trim().toLowerCase() == data[next].term.toLowerCase()){
    console.log('anda benar');
    next++;
  }else{  //kalau ngga bener
    console.log('anda salah');
  }
  //check soal habis
  if(data.length > next){
    console.log(`pertanyaan : ${data[next].definition}`);
    rl.prompt();
  }else{ //soal habis
    console.log('anda menang');
    rl.close();
  }
}).on('close', () => {
  console.log('good bye');
  process.exit(0);
});
