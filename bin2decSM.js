function bin2decSM(signedArr){

    let sign = signedArr[0];

    function _bin2dec(binArr){

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

    let number = _bin2dec(signedArr.slice(1));

    return sign === 0 ? number : number * -1;
}