function isEvenBitwise(num){
    return ((((num >> 1) << 1) ^ num) ^ 1);
}