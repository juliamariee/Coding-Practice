function getCount(str) {
    var vowelsCount = 0;

    let letters = str.split("");
    console.log(letters)
    for (let i = 0; i < letters.length; i++) {
        if ('a' == letters[i] || 'e' == letters[i] || 'i' == letters[i] ||
            'o' == letters[i] || 'u' == letters[i]) {
            vowelsCount++;
        }

    }


    return vowelsCount;
}