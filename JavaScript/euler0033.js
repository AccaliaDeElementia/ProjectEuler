print('Find the product of four fractions with a currious canceling method');

var a, b, c, r1, r2, num, dem, hcf, time;

function HCF(u, v) {
    'use strict';
    var U = u, V = v;
    while (true) {
        if ((U %= V) === 0) {
            return V;
        }
        if ((V %= U) === 0) {
            return U;
        }
    }
    return -1;
}

print('');
print('I will now think about this...');
time = (new Date()).getTime();
num = 1;
dem = 1;
for (b = 1; b < 10; b += 1) {
    for (a = 1; a < 10; a += 1) {
        for (c = 1; c < 10; c += 1) {
            r1 = ((10 * a) + b) / ((10 * b) + c);
            r2 = a / c;
            if (!(a === b && b === c) && r1 === r2) {
                num *= ((10 * a) + b);
                dem *= ((10 * b) + c);
            }
        }
    }
}
hcf = HCF(num, dem);
dem /= hcf;
time = (new Date()).getTime() - time;
print('I think the denominator is: ' + dem);
print('I thought about the answer for ' + time + ' milliseconds');
