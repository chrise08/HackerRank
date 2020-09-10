'use strict';

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let total = 0;
    ar.sort();
    for(let i=0; i<n;i++){
        if(ar[i] === ar[i+1]){
            i++;
            total++;
        }
    }
    return total;
}