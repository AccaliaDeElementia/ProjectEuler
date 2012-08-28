print('Not counting spaces or hyphens, how many letters are used when the numbers from one to 1000 are written in words?');

function getWorder() {
    'use strict';
    var singles, result;
    singles = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    function getWords(n) {
        if (n < 1 || n > 1000) {
            throw 'Number out of range';
        }
        if (n === 1000) {
            return 'one thousand';
        }
        if (n % 100 === 0) {
            return singles[Math.floor(n / 100)] + ' hundred';
        }
        if (n > 100) {
            return getWords(Math.floor(n / 100)) + ' hundred and ' + getWords(n % 100);
        }
        if (n % 10 === 0 || n < 20) {
            return singles[n];
        }
        return singles[10 * Math.floor(n / 10)] + '-' + singles[n % 10];
    }
    return getWords;
}

var getWords, time, words, i, result;
print('\nI will now think about this...');
time = (new Date()).getTime();
getWords = getWorder();
words = [];
for (i = 1; i <= 1000; i += 1) {
    words.push(getWords(i));
}
result = words.join('').replace(/[ \-]/g, '').length;
time = (new Date()).getTime() - time;
print('I think the answer is ' + result);
print('I thought about the answer for ' + time + ' milliseconds');
