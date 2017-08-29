const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!!');


var dataJson = JSON.parse(fs.readFileSync('data.json'));
var next = 0

rl.setPrompt(`soal:   ${dataJson[next].definition}  \nJawaban: `);
rl.prompt();

rl.on('line', (answer) => {
  //karna pertanyaannya ada 4 saja(index=3), dan karna ada next++, dia harus distop dengan -1
  if(answer.trim().toLowerCase() == dataJson[next].term.toLowerCase()){
    console.log('damn you are right!! There are another questions tho ');
    next++;

  } else {
    console.log('salah');
  }
  if(dataJson.length > next){
    rl.setPrompt(`soal:  ${dataJson[next].definition}  \nJawaban: `);
    rl.prompt();
  }else {
    console.log('anda menang');
    rl.close();
  }
}).on('close', () => {
  console.log('Good bye madafaka!');
  process.exit(0);
});

// fs.readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
