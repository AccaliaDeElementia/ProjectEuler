/*globals BigNumber */
load('bignumber.js');

print('Calculate the total of name scores for names in the file `names.txt`');

var time, names, sum, score, i, j, a;

print('\nI will now start thinking about this...');
time = (new Date()).getTime();
names = readFile('names.txt').replace(/"/g, '').split(',');
names.sort();
sum = 0;
a = 'A'.charCodeAt(0) - 1;
for (i = 0; i < names.length; i += 1) {
    score = 0;
    for (j = 0; j < names[i].length; j += 1) {
        score += names[i].charCodeAt(j) - a;
    }
    score *= i + 1;
    sum += score;
}
time = (new Date()).getTime() - time;
print('\nI think the answer is ' + sum);
print('I thought about it for ' + time + ' milliseconds');
