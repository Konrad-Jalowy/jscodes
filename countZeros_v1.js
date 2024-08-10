function countZeros(num){
    if(num === 0)
        return 0;

    let lastDigit = num % 10;
    if(lastDigit === 0)
        return 1 + countZeros(Math.floor(num / 10));
    return 0 + countZeros(Math.floor(num / 10));
}