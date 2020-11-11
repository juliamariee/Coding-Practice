function goodVsEvil(good, evil) {
    let gW = [1, 2, 3, 3, 4, 10];
    let eW = [1, 2, 2, 2, 3, 5, 10];
    let goodWorth = good.split(' ')
    let evilWorth = evil.split(' ')
    let gW_sum = 0;
    let eW_sum = 0;

    for (let i = 0; i < goodWorth.length; i++) {
        gW_sum += +goodWorth[i] * gW[i]
    }
    for (let i = 0; i < evilWorth.length; i++) {
        eW_sum += +evilWorth[i] * eW[i]
    }

    if (gW_sum > eW_sum) {
        return "Battle Result: Good triumphs over Evil"
    } else if (gW_sum == eW_sum) {
        return "Battle Result: No victor on this battle field"
    } else {
        return "Battle Result: Evil eradicates all trace of Good"
    }

}