print('Find the sum of the even fibonacci numbers that do not exceed four million.');

var sum = 0,
    fiba = 1,
    fibb = 1,
    fibc = 0;

while (fiba < 4000000) {
    if (fiba % 2 === 0) {
        sum = sum + fiba;
    }
    fibc = fibb;
    fibb = fiba;
    fiba = fibb + fibc;
}

print('i think the asnwer is: ' + sum);
