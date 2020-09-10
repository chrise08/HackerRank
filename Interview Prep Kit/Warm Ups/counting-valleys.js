"use strict";

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let elev = 0;
    let valleys = 0;

    for (let i = 0; i < n; i++) {
        if (s.charAt(i).toUpperCase() === "U") {
            elev++;
            if (elev === 0) {
                valleys++;
            }
        } else {
            elev--;
        }

    }

    return valleys;

}