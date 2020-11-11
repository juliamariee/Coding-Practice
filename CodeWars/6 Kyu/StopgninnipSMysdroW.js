function spinWords(str) {
    let words = str.split(" ");
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        console.log(letters);

        if (letters.length >= 5) {
            letters.reverse();
        }

        newWords[i] = letters.join('');
    }
    let finalStr;
    finalStr = newWords.join(' ')
    return finalStr;
}