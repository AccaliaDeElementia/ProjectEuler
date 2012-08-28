print('Find the maximum total from top to bottom of the triangle.');
var tri, i, j, l, r, time;
tri = [[75],
       [95, 64],
       [17, 47, 82],
       [18, 35, 87, 10],
       [20,  4, 82, 47, 65],
       [19,  1, 23, 75,  3, 34],
       [88,  2, 77, 73,  7, 63, 67],
       [99, 65,  4, 28,  6, 16, 70, 92],
       [41, 41, 26, 56, 83, 40, 80, 70, 33],
       [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
       [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
       [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
       [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
       [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
       [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]];

print('I will now think about this for a moment...');
time = (new Date()).getTime();
for (i = tri.length - 2; i >= 0; i -= 1) {
    for (j = 0; j < tri[i].length; j += 1) {
        l = tri[i][j] + tri[i + 1][j];
        r = tri[i][j] + tri[i + 1][j + 1];
        tri[i][j] = Math.max(l, r);
    }
}
time = (new Date()).getTime() - time;
print('I think the answer is ' + tri[0][0]);
print('I thought about it for ' + time + ' milliseconds');
