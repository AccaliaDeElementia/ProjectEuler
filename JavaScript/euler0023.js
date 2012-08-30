/*globals BigNumber */
load('bignumber.js');

print('Find the sum of all positive integers which cannot be written as the sum of two abundant numbers');

function sumDivisors(n) {
    'use strict';
    var limit, sum, i, start, step;
    sum = 1;
    limit = Math.floor(Math.sqrt(n));
    if (limit * limit === n) {
        sum += limit;
        limit -= 1;
    }
    if (n % 2 === 1) {
        start = 3;
        step = 2;
    } else {
        start = 2;
        step = 1;
    }
    for (i = start; i <= limit; i += step) {
        if (n % i === 0) {
            sum += i + (n / i);
        }
    }
    return sum;
}
function abundantUnder(n) {
    'use strict';
    var nums, i;
    nums = [];
    for (i = 5; i < n; i += 1) {
        if (sumDivisors(i) > i) {
            nums.push(i);
        }
    }
    return nums;
}

var time, abs, nums, i, j, sum;
print('\nI will think about this...');
time = (new Date()).getTime();
abs = abundantUnder(28213);
nums = [];
for (i = 0; i < 28213; i += 1) {
    nums[i] = 1;
}
for (i = 0; i < abs.length; i += 1) {
    for (j = i; j < abs.length; j += 1) {
        sum = abs[i] + abs[j];
        if (sum >= 28213) {
            break;
        }
        nums[sum] = 0;
    }
}
sum = 0;
for (i = nums.length - 1; i >= 0; i -= 1) {
    if (nums[i] === 1) {
        sum += i;
    }
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + sum);
print('I thought about the answer for ' + time + ' milliseconds');
