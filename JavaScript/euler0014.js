print('What is the longest sequence using a start number under 1000?');

function getSolver() {
    'use strict';
    var lengths = {};
    lengths[1] = 1;
    function solver(n) {
        var o;
        if (lengths[n]) {
            return lengths[n];
        }
        if (n % 2 === 0) {
            o = n / 2;
        } else {
            o = (3 * n) + 1;
        }
        lengths[n] = 1 + solver(o);
        return lengths[n];
    }
    return solver;
}

var solver, n, length, max, maxN, time;

print('I will now think about this...');
time = (new Date()).getTime();
solver = getSolver();
max = 0;
for (n = 1; n < 1000000; n += 1) {
    length = solver(n);
    if (length > max) {
        max = length;
        maxN = n;
    }
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + maxN);
print('I thought about it for ' + time + ' milliseconds.');
