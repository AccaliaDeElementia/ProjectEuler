function corners(n) {
    'use strict';
    if (n % 2 === 0) {
        throw "I don't know how to handle even sizes!";
    }
    return 4 * n * n - 6 * n + 6;
}

print('What is the sum of the corners of a 1001x1001 spiral?');
var sum, time, i;
time = (new Date()).getTime();
print('\nI will now think about this...');
sum = 1;
for (i = 3; i <= 1001; i += 2) {
    sum += corners(i);
}
print('I think the answer is ' + sum);
time = (new Date()).getTime() - time;
print('I thought about it for ' + time + ' milliseconds.');
