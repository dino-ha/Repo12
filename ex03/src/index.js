function rangeOfNumbers(startN, endN){

    
    if(startN > endN){

        return "The starting number will always be less than or equal to the ending number";
    }
    else {

        var diff = (endN - startN);
        const Arr = rangeOfNumbers(diff);     
        Arr[n] = Arr.push(startN);
        n++;
        if (n == diff){
            
            return Arr;
        }
        else {
            
            rangeOfNumbers(startN+1, endN);
        }
    }
}

var x = 7;
var y = 13;
var n = 0;
console.log(rangeOfNumbers(x, y));

module.exports = rangeOfNumbers;
