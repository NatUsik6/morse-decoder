const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let encodedWords = expr.split('**********');
    let decodedWords = [];
    for (let encodedWord of encodedWords) {
        let decodedWord = '';
        for (let i = 0; i < encodedWord.length; i += 10) {
            let encodedLetter = encodedWord.substr(i, 10);
            let morseLetter = '';
            for (let j = encodedLetter.indexOf('1'); j < encodedLetter.length; j += 2) {
                morseLetter += encodedLetter[j + 1] == '0' ? '.' : '-';
            }

            decodedWord += MORSE_TABLE[morseLetter];
        }

        decodedWords.push(decodedWord);
    }

    return decodedWords.join(' ');
}

module.exports = {
    decode
}