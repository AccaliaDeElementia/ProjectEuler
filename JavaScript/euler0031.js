print('Using any ammount of the following coins, how many ways can they be used to make £2?');
print('\tCoins: [1p, 2p, 5p, 10p, 20p, 50p, £1, £2]');

var target, coins, ways, i, j, time;

print('\nLet me think about this...');
time = (new Date()).getTime();

target = 200;
coins = [1, 2, 5, 10, 20, 50, 100, 200];
ways = [];

for (i = 0; i <= target; i += 1) {
    ways[i] = 0;
}
ways[0] = 1;

for (i = 0; i < coins.length; i += 1) {
    for (j = coins[i]; j <= target; j += 1) {
        ways[j] += ways[j - coins[i]];
    }
}

time = (new Date()).getTime() - time;

print('I think the answer is: ' + ways[target]);
print('I thought about it for ' + time + ' milliseconds');
