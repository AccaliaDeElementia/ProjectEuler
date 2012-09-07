print('Solve Euler 29?  OK...');

var a, b, i, count, dict, time;

time = (new Date()).getTime();
print('\nLet me think about it for a moment...');
dict = {};
for (a = 2; a <= 100; a += 1) {
    for (b = 2; b <= 100; b += 1) {
        dict[Math.pow(a, b)] = 1;
    }
}
count = 0;
for (i in dict) {
    if (Object.prototype.hasOwnProperty.call(dict, i)) {
        count += 1;
    }
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + count);
print('I thought about it for ' + time + ' milliseconds');
