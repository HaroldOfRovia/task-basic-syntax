function letterToInt(sym) {
    switch (sym) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }
}

export function romanToInteger(str) {
    let result = 0;
    let before = 0,
        after = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        before = after;
        after = letterToInt(str[i]);
        if (after < before) result -= after;
        else result += after;
    }
    return result;
}
