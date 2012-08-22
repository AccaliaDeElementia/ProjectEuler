print('What is the largest palindrome that is the product of a three digit number?');

function palindrome(input) {
    'use strict';
    var str = input.toString(),
        i,
        j;
    for (i = 0, j = str.length - 1; i < j; i += 1, j -= 1) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}

function findPalindrome() {
    'use strict';
    var a,
        b,
        c,
        result = 0;
    for (a = 999; a >= 100; a -= 1) {
        for (b = a - 1; b >= 100; b -= 1) {
            c = a * b;
            if (palindrome(c) && result < c) {
                result = c;
            }
        }
    }
    return result;
}
print('i think the answer is: ' + findPalindrome());
