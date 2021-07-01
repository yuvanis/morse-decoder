const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arr = expr.match(/.{1,10}/g);
    let newStr = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '**********') {
            const letter = arr[i].match(/.{1,2}/g);
            let str = '';
            for (let j = 0; j < letter.length; j++) {
                if (letter[j] == '10'){
                 str += '.';
                } else if (letter[j] == '11'){
                 str += '-';
                }
            }
            newStr += MORSE_TABLE[str];
        } else {
        newStr += ' ';
        }
    }
return newStr;
}

module.exports = {
    decode
}
