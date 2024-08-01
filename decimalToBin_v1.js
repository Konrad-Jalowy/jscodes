function decimalToBin_v1(num){
    let binaryArr = [];
    while(num > 0){

        binaryArr.unshift(num % 2);
        num = Math.floor(num / 2);

    }
    return "0b" + binaryArr.join("");
}