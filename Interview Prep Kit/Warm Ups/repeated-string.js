"use strict";

function repeatedString(s, n) {
    let fraction = Math.trunc(n / s.length);
    let remainder = n % s.length;
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            counter++;
        }
    }
    counter = counter * fraction;
    for (let i = 0; i < remainder; i++) {
        if (s[i] === 'a') {
            counter++;
        }
    }
    return counter;
}