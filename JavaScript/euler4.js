print('What is the largest palindrome that is the product of a three digit number?');

function palindrome(input) {
    'use strict';
    // Simple detection of palindromishness that works on numbers and strings.
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

function findPalindromeSimple() {
    'use strict';
    // Check them all, but remember not to let a and b trade places.
    // otherwise we would check combos twice. Also count down, not up.
    var a,
        b,
        c,
        result = 0;
    for (a = 999; a >= 100; a -= 1) {
        for (b = a; b >= 100; b -= 1) {
            c = a * b;
            if (palindrome(c) && result < c) {
                result = c;
            }
        }
    }
    return result;
}

var time;

print('');
print('I will try my naive solution first.');
time = (new Date()).getTime();
print('I think the answer is: ' + findPalindromeSimple());
time = (new Date()).getTime() - time;
print('I thougth about the answer for ' + time + ' milliseconds.');

function findPalindromeAdvanced() {
    'use strict';
    // Apply enhancements to the previous algorithm.
    // If result in inner loop drops below that of largest palindrome so far
    //   break the inner loop so that we don't check numbers that can't win 
    // Do math ahead of time to realize that one of the numbers has to be a 
    //   multiple of 11.
    var result = 0,
        a,
        b,
        db,
        c;
    for (a = 999; a >= 100; a += 1) {
        if (a % 11 === 0) {
            b = 999;
            db = 1;
        } else {
            // start b at a multiple of 11 and count by 11
            b = 990;
            db = 11;
        }
        while (b >= a) {
            c = a * b;
            if (c <= result) {
                break; // stop and pick a new a
            }
            if (palindrome(c)) {
                result = c;
            }
        }
    }
}

print('');
print('I will try an advanced solution next.');
time = (new Date()).getTime();
print('I think the answer is: ' + findPalindromeSimple());
time = (new Date()).getTime() - time;
print('I thougth about the answer for ' + time + ' milliseconds.');


