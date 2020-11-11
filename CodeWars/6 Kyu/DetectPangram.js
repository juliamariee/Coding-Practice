function isPangram(string) {
    string = string.toLowerCase();
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let letters = 0;
    for (let i = 0; i < alphabet.length; i++) {
        if (string.includes(alphabet[i])) {
            letters++;
        }
    }

    if (letters == alphabet.length) {
        return true;
    } else {
        return false;
    }
}