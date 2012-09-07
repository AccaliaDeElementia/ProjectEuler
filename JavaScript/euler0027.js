print('what is the a*b from the solution of n^2 + an + b where abs(a) <= 1000 and abs(b) <= 1000 such that the formula produces the maximum number of values of n starting at n = 0');

// Facts Known:
// 1. |a| < 1000
//    p(x) must generate prime numbers from x in [0, l]
//    p(0) = b => b must be prime

// 2. p(x) is prime
//    When x = b, p(b) = b^2 + ab + b = b (b + a + 1)
//    => p(b) is not prime
//    => limit l <= b 

// 3. Composition: 
//    If p(x) is prime-generating for 0 <= x <= n, then so is p(n-x). 
//    See http://mathworld.wolfram.com/Prime-GeneratingPolynomial.html.

// 4. We know that p(x) = x^2 + x + 41 is prime generating for x in [0, 39]
//    => p(n-x) = (n-x)^2 + n-x + 41
//    p(n-x) = n^2 + x^2 -2nx + n -x + 41
//    p(n-x) = x^2 -x(2n+1) + [n^2 + n + 41]
//    p(n-x) = x^2 -x(2n+1) + [p(n)]
//    => p(n-x) = x^2 + Ax + B
//    with A = -2n-1 and B = n^2 + n + 41

// 5. B < 1000
//    => n^2 + n + 41 
//    roots: -1/2 +/- sqrt(1+4*959)/2
//    roots: -31.471 and 30.471

// 6. p(n-x) = x^2 - x(2n+1) + p(n) and p(n) is the generated prime for n
//    => n <= 30 => b <= 971 = p(30) = 30^2 + 30 + 41 

// 7. p(X) = X^2 -79X + 1601 = p(x - 39), for x in [0, 79]
//    So to increase the number of generated primes, we increase the factors.
//    If we draw the two equations, we can see that composing creates new quadratic
//    functions with a higher range of x generating primes.
//    From 2), we saw that the limit l for x in [0, l] depends on the value of b.
//    So if we want to generate the most primes as possible, we have to take l = b
//    From 6), we saw that b <= 971 (this is the biggest value of b)
//    So to be able to generate a lot of primes, we have to take l = b = 971
//    So a = -1 - 2*30 = -61

//  So the quadratic equation (created by composing from Euler's one) that will generate
//  the most of prime numbers such that |a| < 1000 and |b| < 1000 is:

// p(x) = x^2 - 69x + 971
print('I know the answer to that one! It\'s -59231');
