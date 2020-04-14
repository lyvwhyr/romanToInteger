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


// SOLUTION 3

var romanToInt = function (s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
        [undefined, 0]
    ]);
    let result = 0;
    for (let i = 0, j = 1; i < s.length; i++, j++) {
        if (map.get(s[i]) < map.get(s[j])) {
            result += map.get(s[j++]) - map.get(s[i++]);
        } else {
            result += map.get(s[i]);
        }
    }
    return result;
};


// SOLUTION 4
const romanToInt = (s) => {
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let sum = 0
    let last = undefined
    for (let i = 0; i < s.length; i++) {
        sum += romans[s[i]]

        if (last === 'I' && s[i] === 'V') {
            sum -= 2
        }

        if (last === 'I' && s[i] === 'X') {
            sum -= 2
        }

        if (last === 'X' && s[i] === 'L') {
            sum -= 20
        }

        if (last === 'X' && s[i] === 'C') {
            sum -= 20
        }

        if (last === 'C' && s[i] === 'D') {
            sum -= 200
        }

        if (last === 'C' && s[i] === 'M') {
            sum -= 200
        }

        last = s[i]
    }

    return sum
}