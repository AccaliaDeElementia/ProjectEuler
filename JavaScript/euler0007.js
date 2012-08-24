print('What is the 10,001st prime?');

function getPrimes(many) {
    'use strict';
    var primes = [2, 3],
        i = 5;
    function isPrime(x) {
        var i, limit;
        limit = Math.ceil(Math.sqrt(x));
        for (i = 0; i < primes.length; i += 1) {
            if (primes[i] > limit) {
                break;
            }
            if (x % primes[i] === 0) {
                return false;
            }
        }
        return true;
    }
    while (primes.length < many) {
        if (isPrime(i)) {
            primes.push(i);
        }
        if (isPrime(i + 2)) {
            primes.push(i + 2);
        }
        i += 6;
    }
    return primes;
}

var time, primes;

print('I will try my simple code first.');
time = (new Date()).getTime();
primes = getPrimes(10001);
time = (new Date()).getTime() - time;

print('I think the answer is ' + primes[primes.length - 1]);
print('I thought about the answer for ' + time + ' milliseconds.');
