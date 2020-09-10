"use strict";

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumps = 0;
    for (let i = 0; i < c.length; i++) {
        c[i + 2] === 0 ? i++ : null;
        jumps++;
    }
    return jumps-1;
}