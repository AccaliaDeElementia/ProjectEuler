print('What is the largest prime factor of the number 600851475143');

var target = 600851475143,
    primes = [],
    sqrttarget = Math.ceil(Math.sqrt(target)),
    result,
    i,
    j;

for (i = 0; i <= sqrttarget; i += 1) {
    primes[i] = 1;
}

for (i = 2; i <= sqrttarget; i += 1) {
    if (primes[i] === 1) {
        for (j = i + i; j < sqrttarget; j = j + i) {
            primes[j] = 0;
        }
    }
}

for (i = sqrttarget; i > 0; i = i - 1) {
    if (primes[i] === 1 && target % i === 0) {
        result = i;
        break;
    }
}

print('i think the answer is: ' + result);
