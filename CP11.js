const fs = require('fs');

let index = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: '
});

let i = 0;
console.log('Selamat datang di permainan Tebak Kata, silakan isi dengan jawaban yang benar ya!\n\n')
console.log(index[i].tanya);
rl.prompt();

rl.on('line', (answer) => {
    switch (answer.trim().toLowerCase()) {
        case (index[i].jawab):
            if (i == index.length - 1) {
                console.log('Selamat, Anda Benar!\n');
                rl.close();
            }
            console.log('Selamat, Anda Benar!\n');
            i++;
            console.log(index[i].tanya);
            rl.prompt();
            break;
        default:
            console.log(`Wkwkwkwk, Anda kurang beruntung!\n`);
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Hore Anda Menang!\n');
    process.exit(0);
});