function sumOfDigits_v2(num){

    if(num < 10)
        return num;

    return num % 10 + sumOfDigits_v2(Math.floor(num / 10));
}