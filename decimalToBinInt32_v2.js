function decimalToBinInt32_v2(num){

    
    let leadingZerosArr = new Array(Math.clz32(num))
    .fill(0);
    
    let binaryArr = [];


    while(num > 0){

        binaryArr.unshift(num % 2);
        num = Math.floor(num / 2);

    }

    let outputArr = [...leadingZerosArr, ...binaryArr];

    return "0b" + outputArr.join("");
}