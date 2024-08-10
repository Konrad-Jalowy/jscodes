function numberOfDigits_good(num){
    if(num >= 10)
        return 1 + numberOfDigits_good(Math.floor(num / 10));
    return 1;
}
