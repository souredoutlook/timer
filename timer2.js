const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

rl.on('line', (input) => {
  if (!isNaN(Number(input)) && Number(input) > 0 && Number(input) < 10) {
    console.log(`setting timer for ${Number(input)} seconds....`);
    setTimeout(()=>process.stdout.write('\x07'), Number(input) * 1000);
  }
});

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }
});

rl.on('close', () => {
  console.log(`"Thanks for using me, ciao!"`);
});
