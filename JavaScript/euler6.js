print('Find the difference between the sum of squares and the square of the sum of the first one hundred natural numbers.');

var limit = 100,
    sum_sq = 0,
    sum = 0,
    time,
    i;

print('');
print('I will try a naive solution first.');

time = (new Date()).getTime();
for (i = 1; i <= limit; i += 1) {
    sum_sq += i * i;
    sum += i;
}
sum *= sum;
time = (new Date()).getTime() - time;
print('I think the answer is ' + (sum - sum_sq));
print('I thought about the answer for ' + time + ' milliseconds.');
print('');
print('I will now use the standard summation formulas to calculate the answer without looping');
time = (new Date()).getTime();
sum = limit * (limit + 1) / 2;
sum *= sum;
sum_sq = (2 * limit + 1) * (limit + 1) * limit / 6;
time = (new Date()).getTime() - time;
print('I think the answer is ' + (sum - sum_sq));
print('I thought about the answer for ' + time + ' milliseconds.');

