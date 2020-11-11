function solution(number) {
    if (number <= 0) {
        return 0;
    }
    let multiples = [];
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0) {
            multiples.push(i);
        } else if (i % 5 == 0) {
            multiples.push(i);
        }
    }
    let sum = 0;
    for (let i = 0; i < multiples.length; i++) {
        sum += multiples[i];
    }
    return sum;
}