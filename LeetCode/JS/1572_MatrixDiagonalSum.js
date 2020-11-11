var diagonalSum = function(mat) {
    let sum = 0;
    for (i = 0; i < mat.length; i++) {
        for (j = 0; j < mat[0].length; j++) {
            if (i == j) {
                sum += mat[i][j];
                mat[i][j] = 0;
            }
        }
    }

    let newArr = [];
    for (let i = 0; i < mat.length; i++) {
        newArr[i] = mat[i].reverse();
    }

    for (i = 0; i < mat.length; i++) {
        for (j = 0; j < mat[0].length; j++) {
            if (i == j) {
                sum += mat[i][j];
                mat[i][j] = 0;
            }
        }
    }

    return sum;
};