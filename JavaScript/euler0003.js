print('What is the largest prime factor of the number 600851475143');

var target = 600851475143,
    primes = [],
    // It can be proved that the largest prime factor of a number must be
    // less than the square root of a number. So no point checking higher 
    // than that.
    sqrttarget = Math.ceil(Math.sqrt(target)),
    result,
    i,
    j,
    time;

print('');
print('I will try my naive solution first');
// Using the seive of Erathosthenes to find all the primes under the
// square root of the target number. Turns out this is an efficient way of 
// finding all those primes, but not of finding the largest prime factor of
// a number. Whups. But remember this technique for later problems.
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

    // Remove all the 2 factors first. This way we can step by 2 and not by 1
    // and still be guaranteed to never miss a prime.
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
    // The max factor is the square root of the remaining target. No sense 
    // looking higher than that maximum.
    max = Math.sqrt(target);
    while (target > 1 && factor < max) {
        // Because we have removed all smaller factors before, if the factor is 
        // divisible into the target the factor must be prime.
        if (target % factor === 0) {
            // Remove all instances of this smaller factor from the target
            target /= factor;
            last = factor;
            while (target % factor === 0) {
                target /= factor;
            }
            // The new max factor is the square root of the remaining target.
            max = Math.sqrt(target);
        }
        factor += 2;
    }
    // If target became 1 then the largest prime is the last factor, otherwise
    // the target is the largest prime factor
    return (target === 1) ? last : target;
}

time = (new Date()).getTime();
result = lastPrimeFactor(target);
time = (new Date()).getTime() - time;

print('I think the answer is: ' + result);
print('I thought about the answer for ' + time + ' milliseconds.');

