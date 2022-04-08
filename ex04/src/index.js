function sumFibonacci(num){

    if (num < 0 || num == NaN){

        return 0;
    }
    else {

        if (num % 2 == 0){

            sumFibonacci(num);
        }
        else {

            return sumFibonacci(num-1) + sumFibonacci(num-2);
        }
    }
}

var num;
sumFibonacci(num);

module.exports = sumFibonacci;