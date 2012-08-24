print('What is the sum of all primes undet two million?');

print('');
print('I will think about this now...');

var time, primes, i, result;

function sumPrimesUnder(n) {
    'use strict';
    // use the seive of Eratosthenes.
    var results = 0,
        limit = Math.floor(Math.sqrt(n)),
        i,
        j,
        grid = [];
    for (i = 1; i <= n; i += 1) {
        grid[i] = 1;
    }
    for (i = 2; i <= limit; i += 1) {
        if (grid[i] === 1) {
            for (j = i * i; j <= n; j += i) {
                grid[j] = 0;
            }
        }
    }
    for (i = 2; i <= n; i += 1) {
        if (grid[i] === 1) {
            results += i;
        }
    }
    return results;
}

time = (new Date()).getTime();
print('I think the answer is ' + sumPrimesUnder(2000000));
time = (new Date()).getTime() - time;
print('I thought about the answer for ' + time + ' milliseconds.');
