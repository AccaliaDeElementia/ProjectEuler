print('What is the sum of all 1-9 pandigital products?');

var time, products, a, b, p, tester, sum, start;

function contains(arr, val) {
    'use strict';
    var i;
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}
function test(a, b, p) {
    'use strict';

    var str, reg;
    str = '';
    reg = (a.toString() + b.toString() + p.toString()).split(str);
    reg = reg.sort();
    return reg.join(str) === '123456789';
}

time = (new Date()).getTime();
products = [];
for (a = 1; a < 100; a += 1) {
    start = 1234;
    if (a > 9) {
        start = 123;
    }
    for (b = start; b < 10000 / (a + 1); b += 1) {
        p = a * b;
        if (test(a, b, p) && !contains(products, p)) {
            products.push(p);
        }
    }
}

sum = 0;
for (a = 0; a < products.length; a += 1) {
    sum += products[a];
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + sum);
print('I thought about it for ' + time + ' milliseconds');
