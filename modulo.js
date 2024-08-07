function modulo(dividend, divisor){
    if(dividend === divisor)
        return 0;
    else {
        let result = dividend;

        while(result >= divisor){
            result = result - divisor;
        }

        return result;
    }
     
}