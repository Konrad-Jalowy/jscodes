function decimalToBinInt32Rec(num){

    let binaryArr = [];

    let leadingZerosArr = new Array(Math.clz32(num))
                                            .fill(0); 

    function _decToBinRec(num){
        if(num <= 0)
            return;

        binaryArr.unshift(num % 2);
        _decToBinRec(Math.floor(num / 2));
    }
    
    _decToBinRec(num);

    let outputArr = [...leadingZerosArr, ...binaryArr];

    return "0b" + outputArr.join("");
}