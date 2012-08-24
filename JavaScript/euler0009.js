print('There exists exactly one pythagorean triplet for which a+b+c = 1000. Find the product abc');

var a, b, c, m, n, sum, result, time;

print('');
print('I will now solve the problem.');
function findResult() {
    'use strict';
    for (m = 2; m < 1000; m += 1) {
        for (n = 1; n < m; n += 1) {
            a = m * m - n * n;
            b = 2 * m * n;
            c = m * m + n * n;
            if (a * a + b * b !== c * c) {
                throw a + ', ' + b + ', ' + c + ' is not a triplet';
            }
            sum = a + b + c;
            if (sum > 1000) {
                break;
            } else if (sum === 1000) {
                print(a + ',' + b + ',' + c);
                return a * b * c;
            }
        }
    }
    return -1;
}

print(findResult());
