const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const str = input[0];
    const converted = [...str].map(char => {
        if (char.match(/[a-z]/)) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    }).join('');
    console.log(converted);
});