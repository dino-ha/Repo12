function myCounter(n){

    if (n < 1){

        return [];
    }
    else {

        const countArray = myCounter(n-1);
        countArray.unshift(n);
        return countArray;

    }
}

var n;
console.log(myCounter(n));

module.exports = myCounter;