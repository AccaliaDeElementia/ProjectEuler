print('What is the largest prime factor of the number 600851475143');

var target = 600851475143,
    primes = [],
    sqrttarget = Math.ceil(Math.sqrt(target)),
    result,
    i,
    j,
    time;

print('');
print('I will try my naive solution first');
time = (new Date()).getTime();
for (i = 0; i <= sqrttarget; i += 1) {
    primes[i] = 1;
}

for (i = 2; i <= sqrttarget; i += 1) {
    if (primes[i] === 1) {
        for (j = i + i; j < sqrttarget; j = j + i) {
            primes[j] = 0;
        }
    }
}

for (i = sqrttarget; i > 0; i = i - 1) {
    if (primes[i] === 1 && target % i === 0) {
        result = i;
        break;
    }
}
time = (new Date()).getTime() - time;

print('I think the answer is: ' + result);
print('I thought about the answer for ' + time + ' milliseconds.');

print('');
print('I will try an optimized solution next.');

function lastPrimeFactor(target) {
    'use strict';
    var last, factor, max;

    if (target % 2 === 0) {
        last = 2;
        target /= 2;
        while (target % 2 === 0) {
            target /= 2;
        }
    } else {
        last = 1;
    }
    factor = 3;
    max = Math.sqrt(target);
    while (target > 1 && factor < max) {
        if (target % factor === 0) {
            target /= factor;
            last = factor;
            while (target % factor === 0) {
                target /= factor;
            }
            max = Math.sqrt(target);
        }
        factor += 2;
    }
    return (target === 1) ? last : target;
}

time = (new Date()).getTime();
result = lastPrimeFactor(target);
time = (new Date()).getTime() - time;

print('I think the answer is: ' + result);
print('I thought about the answer for ' + time + ' milliseconds.');

