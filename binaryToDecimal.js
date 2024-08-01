function binaryToDecimal(binArr){

    let base = 2;
    let position = 0;

    let weight;

    let decimalNumber = 0;

    while(binArr.length > 0){
        
        let lastDigit = binArr.pop();

        weight = Math.pow(base, position);

        decimalNumber += lastDigit * weight;

        position++;
        
    }

    return decimalNumber;
}