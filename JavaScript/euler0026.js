print('Find tjhe demominator less than 1000 that makes a unit fraction with the longest recurring cycle');

function fractionate(n) {
    'use strict';
    var seq, d, i;
    seq = {};
    d = 1;
    i = 0;
    while (d !== 0) {
        while (d < n) {
            d *= 10;
        }
        if (seq[d]) {
            return i - seq[d];
        }
        seq[d] = i;
        d = d % n;
        i += 1;
    }
    return 0;
}

print('\n I will now think about this...');
var d, i, max, time, f;
time = (new Date()).getTime();
max = 0;
for (i = 1; i <= 1000; i += 1) {
    f = fractionate(i);
    if (f > max) {
        max = f;
        d = i;
    }
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + d);
print('I thought about it for ' + time + ' milliseconds.');
