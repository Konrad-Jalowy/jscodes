function sumOfDigits_v1(num){

    if(num === 0)
        return 0;

    return num % 10 + sumOfDigits_v1(Math.floor(num / 10));
}
