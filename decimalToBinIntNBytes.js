function decimalToBinIntNbytes(num, bytes=16){

    let binaryArr = [];

    while(num > 0){

        binaryArr.unshift(num % 2);
        num = Math.floor(num / 2);

    }

    let leadingZerosArr = new Array(bytes - binaryArr.length).fill(0)

    let outputArr = [...leadingZerosArr, ...binaryArr];

    return "0b" + outputArr.join("");
}