function valuesInBinary_v2(num){
    return Array.from({length: num}, (_, i) => {
        return 1 * Math.pow(2, num-1-i);
    });
}