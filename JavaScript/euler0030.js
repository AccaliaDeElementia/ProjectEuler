print('what is the sum of all numbers that can be written as the sum of their digits raised to the fifth power?');

print('\nLet me think....');
var time, p, powers, sum, total, i, j, s;

// With a little bit of thinking we can establish a upper limit
// of about 354294

time = (new Date()).getTime();
p = [];
powers = [];
for (i = 0; i < 10; i += 1) {
    p[i.toString()] = Math.pow(i, 5);
}
for (i = 2; i < 354294; i += 1) {
    s = i.toString();
    sum = 0;
    for (j = 0; j < s.length; j += 1) {
        sum += p[s[j]];
    }
    if (sum === i) {
        powers.push(i);
    }
}
total = 0;
for (i = 0; i < powers.length; i += 1) {
    total += powers[i];
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + total);
print('I thought about it for ' + time + ' milliseconds');
