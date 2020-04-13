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