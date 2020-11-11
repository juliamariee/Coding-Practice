var countBits = function(n) {
    // Program Me
    let binaryNum = []
    let ones = 0;
    for (let i = 30; i >= 0; i--) {
        // only works for numbers up to 30 bits
        binaryNum[i] = (n >> i) & 1;
    }

    for (let i = 0; i < binaryNum.length; i++) {
        if (binaryNum[i] == 1) {
            ones += 1;
        }
    }

    return ones;
};