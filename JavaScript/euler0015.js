print('How many routes in a 20x20 grod from upper left to bottom right, only movine right or down?');

var time, i, j, grid;

print('\nI will now thing about this...');

time = (new Date()).getTime();
grid = [];
for (i = 0; i < 21; i += 1) {
    grid[i] = [];
    for (j = 0; j < 21; j += 1) {
        grid[i][j] = 0;
    }
}
for (i = 0; i < 21; i += 1) {
    grid[i][20] = 1;
    grid[20][i] = 1;
}
for (i = 19; i >= 0; i -= 1) {
    for (j = 19; j >= 0; j -= 1) {
        grid[i][j] = grid[i][j + 1] + grid[i + 1][j];
    }
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + grid[0][0]);
print('I thought about it for ' + time + ' milliseconds');
