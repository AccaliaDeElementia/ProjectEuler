print('Find the sum of the even fibonacci numbers that do not exceed four million.');

var sum = 0,
    a = 1,
    b = 1,
    c = a + b,
    time;

print('');
print('I will try the naive solution first.');
time = (new Date()).getTime();
while (c < 4000000) {
    if (a % 2 === 0) {
        sum = sum + a;
    }
    c = b;
    b = a;
    a = b + c;
}
time = (new Date()).getTime() - time;
print('I think the answer is: ' + sum);
print('I thought about it for ' + time + ' milliseconds.');
print('');
print('I will try to calculate without requiring division.');

sum = 0;
a = 1;
b = 1;
c = a + b;

time = (new Date()).getTime();
while (c < 4000000) {
    sum += c;
    a = b + c;
    b = c + a;
    c = a + b;
}
time = (new Date()).getTime() - time;
print('I think the answer is: ' + sum);
print('I thought about it for ' + time + ' milliseconds.');

