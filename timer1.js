//timer1.js

const commandLineArgs = process.argv.splice(2).sort((a,b)=>a - b);

if (commandLineArgs.length) {
  for (const timer of commandLineArgs) {
    if (!(timer < 0) && !isNaN(timer)) {
      setTimeout(()=>process.stdout.write('\x07'),timer * 1000);
    }
  }
}