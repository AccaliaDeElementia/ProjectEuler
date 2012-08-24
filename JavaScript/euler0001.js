print('Find the sum of all the multiples of 3 or 5 below 1000');
print('');

var time = 0,
    sum = 0,
    i = 0;

print('I will try the naive solution first.');

time = (new Date()).getTime();
for (i = 0; i < 1000; i = i + 1) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum = sum + i;
    }
}
time = (new Date()).getTime() - time;

print('I think the answer is: ' + sum);
print('I thought about it for ' + time + ' miliseconds.');
print('');
print('I will try the smarter solution now.');

function sumDivBy(target, by) {
    'use strict';
    //We'll use the standard formula for 'sum of integers from 1 to n'
    //Adjusting for the different step sizes.
    var p = Math.floor(target / by); // Take the floor to avoid decimal imprecision
    return (by * p * (p + 1)) / 2;
}

time = (new Date()).getTime();
// Remember to subtract out the multiples of 15 which are counted twice otherwise.
sum = sumDivBy(999, 3) + sumDivBy(999, 5) - sumDivBy(999, 15);
time = (new Date()).getTime() - time;

print('I think the answer is: ' + sum);
print('I thought about it for ' + time + ' miliseconds.');

