print('Find the sum of all the multiples of 3 or 5 below 1000');
print('');
print('I will try the naive solution first.');

var time = 0,
    elapsed = 0,
    sum = 0,
    i = 0;

time = (new Date()).getTime();
for (i = 0; i < 1000; i = i + 1) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum = sum + i;
    }
}
elapsed = (new Date()).getTime() - time;

print('I think the answer is: ' + sum);
print('I thought about it for ' + elapsed + ' miliseconds.');
print('');
print('I will try the smarter solution now.');

function sumDivBy(target, by) {
    'use strict';
    var p = Math.floor(target / by);
    return (by * p * (p + 1)) / 2;
}

time = (new Date()).getTime();
sum = sumDivBy(999, 3) + sumDivBy(999, 5) - sumDivBy(999, 15);
elapsed = (new Date()).getTime() - time;

print('I think the answer is: ' + sum);
print('I thought about it for ' + elapsed + ' miliseconds.');

