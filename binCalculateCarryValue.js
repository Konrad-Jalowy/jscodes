function binCalculateCarryValue(x, y){
    let carry = x & y;
    return carry << 1;
}