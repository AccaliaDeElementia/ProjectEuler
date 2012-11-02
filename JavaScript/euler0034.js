print('What is the sum of all numbers that are equal to the sum of the factorial of their digits?');

var factorial, sum, a, num, n, i, time;
sum = 0;
factorial = {
    '0': 1,
    '1': 1,
    '2': 2,
    '3': 6,
    '4': 24,
    '5': 120,
    '6': 720,
    '7': 5040,
    '8': 40320,
    '9': 362880
};
print('I will now think about this...');
time = (new Date()).getTime();
for (n = 3; n <= 2540160; n += 1) {
    num = n.toString();
    a = 0;
    for (i = 0; i < num.length; i += 1) {
        if (n === 145) {
            print(num[i]);
            print(factorial[num[i]]);
        }
        a += factorial[num[i]];
    }
    if (a === n) {
        print(n);
        sum += n;
    }
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + sum);
print('I thought about it for ' + time + ' milliseconds');
