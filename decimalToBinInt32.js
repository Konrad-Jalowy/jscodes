function decimalToBinInt32(num){

    let binaryArr = [];

    while(num > 0){

        binaryArr.unshift(num % 2);
        num = Math.floor(num / 2);

    }

    let leadingZerosArr = new Array(32 - binaryArr.length).fill(0)

    let outputArr = [...leadingZerosArr, ...binaryArr];

    return "0b" + outputArr.join("");
}