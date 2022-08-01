const MORSE_TABLE = {
  '_':     ' ',
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
let arr= [];
let morseArr = [];
let chunk ='';
let decodedStr = [];
let result ='';

for (let i = 0; i < expr.length; i += 10) {
  arr = expr.slice(i, i+10);
  let morseCode = '';
  for (let i = 0; i < arr.length; i += 2) {
    chunk = arr.slice(i, i+2);
    if(chunk == '**') {
      morseCode = '_'
    } else if(chunk == '11') {
      morseCode += '-';
    } else if(chunk == '10') {
      morseCode += '.';
    }
  }
  morseArr.push(morseCode);
}
decodedStr = morseArr.map(a => MORSE_TABLE[a]);
result = decodedStr.join('');
return result;
}

console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'));

module.exports = {
    decode
}