/*globals BigNumber */
load('bignumber.js');

print('What is the sum of the digits of the number 2^1000?');
var time, i, sum, twos;
print('\nI will think about this now...');

time = (new Date()).getTime();
twos = new BigNumber(1);
for (i = 0; i < 1000; i += 1) {
    twos = twos.multiply(2);
}
twos = twos.toString();
sum = 0;
for (i = 0; i < twos.length; i += 1) {
    sum += parseInt(twos[i], 10);
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + sum);
print('I thought about the answer for ' + time + ' milliseconds.');
