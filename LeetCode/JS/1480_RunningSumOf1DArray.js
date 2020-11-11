var runningSum = function(nums) {
    let sum = [];
    for (let i = 0; i < nums.length; i++) {
        sum[i] = 0;
        for (let j = 0; j <= i; j++) {
            sum[i] += nums[j];
        }
    }
    return sum;
};