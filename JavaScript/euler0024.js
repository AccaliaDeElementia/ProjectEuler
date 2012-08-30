print('What is the millionth lexographic permuatation of the digits 0123456789?');

// Because I am a lazy bas^H^H^Hprogrammer This permutations function is 
// shamelessly copied from:
//     http://stackoverflow.com/questions/9960908/permutations-in-javascript
function permutate(array, callback) {
    'use strict';
    function p(array, index, callback) {
        function swap(a, i1, i2) {
            var t = a[i1];
            a[i1] = a[i2];
            a[i2] = t;
        }
        var count, i;
        if (index === array.length - 1) {
            callback(array);
        } else {
            count = p(array, index + 1, callback);
            for (i = index + 1; i < array.length; i += 1) {
                swap(array, i, index);
                count += p(array, index + 1, callback);
                swap(array, i, index);
            }
            return count;
        }
        return 1;
    }
    if (!array || array.length === 0) {
        return 0;
    }
    return p(array, 0, callback);
}

var result, time;
print('\nI will now think about this...');
time = (new Date()).getTime();
result = [];
permutate([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function (a) {
    'use strict';
    result.push(a.join(''));
});
result.sort();
time = (new Date()).getTime() - time;
print('I think the answer is ' + result[999999]);
print('I thought about it for ' + time + ' milliseconds');
