print('What is the smallest number that is evenly divisible by all of teh natural numbers from 1 to 20?');

print('');
print('I will try the naive solution first.');

var time,
    result;
function isNotDivByAllTo(candidate, by) {
    'use strict';
    var i;
    for (i = 1; i <= by; i += 1) {
        if (candidate % i !== 0) {
            return true;
        }
    }
    return false;
}

time = (new Date()).getTime();
result = 20;
while (isNotDivByAllTo(result, 20)) {
    result += 20; // It/ divisible by 20.
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + result);
print('I thought about the answer for ' + time + ' milliseconds.');
print('');
print('I will now try a more advanced solution.');

function getPrimesUnder(n) {
    'use strict';
    // use the sive of Eratosthenes.
    var results = [],
        i,
        j,
        grid = [];
    for (i = 1; i <= n; i += 1) {
        grid[i] = 1;
    }
    for (i = 2; i <= n; i += 1) {
        if (grid[i] === 1) {
            for (j = i + i; j <= n; j += i) {
                grid[j] = 0;
            }
        }
    }
    for (i = 2; i <= n; i += 1) {
        if (grid[i] === 1) {
            results.push(i);
        }
    }
    return results;
}

function factorizeSolve(n) {
    'use strict';
    // Get the primes under 20. then using those build up the prime 
    // factorizations of all the numbers from 1 to 20 and aggregate them into
    // one large prime factorization that contains the minimum amount of 
    // primes to generate 1-20.
    var result = 1,
        primes = getPrimesUnder(n),
        i,
        limit = Math.sqrt(n),
        count,
        check = true;
    for (i = 0; i < primes.length; i += 1) {
        count = 1;
        if (check) {
            if (primes[i] <= limit) {
                count = Math.floor(Math.log(n) / Math.log(primes[i]));
            } else {
                check = false;
            }
        }
        result *= Math.pow(primes[i], count);
    }
    return result;
}


time = (new Date()).getTime();
print('I think the answer is ' + factorizeSolve(20));
time = (new Date()).getTime() - time;
print('I thought about the answer for ' + time + ' milliseconds.');
