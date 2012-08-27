print('What is the first Triangle number that has more than five hundred divisors?');

function countDivisorsOf(n) {
    'use strict';
    var ct, i, halfN;
    ct = 2;
    halfN = Math.floor(Math.sqrt(n));
    for (i = 2; i <= halfN; i += 1) {
        if (n % i === 0) {
            ct += 2;
        }
    }
    return ct;
}

function getTriangleGenerator() {
    'use strict';
    var result = 0, i = 0;
    function generator() {
        i += 1;
        result += i;
        return result;
    }
    return generator;
}

var time, n, divN, generator;
print('Let\'s think about this...');
time = (new Date()).getTime();
divN = 0;
n = 0;
generator = getTriangleGenerator();
while (n <= 2147438647 && divN < 500) {
    n = generator();
    divN = countDivisorsOf(n);
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + n);
print('I thought about it for ' + time + ' milliseconds.');
