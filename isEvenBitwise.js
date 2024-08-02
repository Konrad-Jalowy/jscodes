function isEvenBitwise(num){
    num = num & 1;
    return num ^ 1;
}