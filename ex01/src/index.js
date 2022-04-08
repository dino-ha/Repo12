function myRecursion(arr, n){

    if (n <= 0){

        return 0;
    }
    else {

        return myRecursion(arr, n-1) + arr[n-1];
    }
}


console.log(myRecursion(arr, n));

module.exports = myRecursion;