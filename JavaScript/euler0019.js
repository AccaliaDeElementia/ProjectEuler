print('How many sundays fell on the first of the month from 1901 to 2000, inclusive.');

var year, month, count, time;

print('\nI will now think about that...');
time = (new Date()).getTime();
count = 0;
for (year = 1901; year <= 2000; year += 1) {
    for (month = 0; month < 12; month += 1) {
        if ((new Date(year, month, 1, 0, 0, 0, 0)).getDay() === 0) {
            count += 1;
        }
    }
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + count);
print('I thought about it for ' + time + ' milliseconds');
