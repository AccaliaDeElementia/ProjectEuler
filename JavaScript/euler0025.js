/*globals BigNumber */
load('bignumber.js');

function getFibber() {
    'use strict';
    var a, b, c;
    a = new BigNumber(1);
    b = new BigNumber(1);
    c = new BigNumber(2);
    function fibber() {
        var ret = a;
        a = b;
        b = c;
        c = a.add(b);
        return ret.toString();
    }
    return fibber;
}
print('What is the first term in the fibonacci sequence to contain 1000 digits?');

var time, i, fibber, fib;

print('\nI will now think about this...');
time = (new Date()).getTime();
fibber = getFibber();
i = 1;
fib = fibber();
while (fib.length < 1000) {
    fib = fibber();
    i += 1;
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + i);
print('I thought about it for ' + time + ' milliseconds');
