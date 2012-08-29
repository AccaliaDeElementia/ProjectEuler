/*globals BigNumber */
load('bignumber.js');

print('Find the sum of the digits in 100!');

var time, sum, fact, i;

print('\nI will now think about that for a moment...');
time = (new Date()).getTime();
fact = new BigNumber(1);
for (i = 1; i <= 100; i += 1) {
    fact = fact.multiply(i);
}
fact = fact.toString();
sum = 0;
for (i = 0; i < fact.length; i += 1) {
    sum += parseInt(fact[i], 10);
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + sum);
print('I thought about it for ' + time + ' miliseconds');
