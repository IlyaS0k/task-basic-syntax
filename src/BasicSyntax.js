const mp = new Map();
mp.set('I', 1);
mp.set('V', 5);
mp.set('X', 10);
mp.set('L', 50);
mp.set('C', 100);
mp.set('D', 500);
mp.set('M', 1000);
export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; ) {
        if (mp.get(str[i]) < mp.get(str[i + 1])) {
            result += mp.get(str[i + 1]) - mp.get(str[i]);
            i += 2;
        } else {
            result += mp.get(str[i]);
            ++i;
        }
    }

    return result;
}
