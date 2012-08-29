print('What is the sum of all amicable numbers under 10000?');

function sumDivisors(n) {
    'use strict';
    var i, limit, sum;
    if (n < 1) {
        return n;
    }
    sum = 1;
    limit = Math.sqrt(n);
    for (i = 2; i < limit; i += 1) {
        if (n % i === 0) {
            sum += i + (n / i);
        }
    }
    return sum;
}

var time, i, a, sum;

print('\nI will now think about this...');
time = (new Date()).getTime();
a = [];
for (i = 0; i < 10000; i += 1) {
    a[i] = sumDivisors(i);
}
sum = 0;
for (i = 0; i < a.length; i += 1) {
    if (a[i] < a.length && i !== a[i] && i === a[a[i]]) {
        sum += i;
    }
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + sum);
print('I thought about it for ' + time + ' milliseconds.');
