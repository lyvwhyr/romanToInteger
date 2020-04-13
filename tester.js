const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}


const romanToInt = str => {
    let highestNumber = 0
    let result = 0

    for (let i = str.length - 1; i >= 0; i--) {
        const value = dict[str[i]]
        if (highestNumber <= value) {
            highestNumber = value
            result += value
        } else {
            result -= value
        }
    }

    return result
}


// SOLUTION 2

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romIntMap = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    };

    let num = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] !== undefined && (s[i] === "I" || s[i] === "X" || s[i] === "C")) {
            if (romIntMap[s[i] + s[i + 1]]) {
                num = num + romIntMap[s[i] + s[i + 1]];
                i++;
            } else {
                num = num + romIntMap[s[i]];
            }
        } else {
            num = num + romIntMap[s[i]];
        }
    }

    return num;
};