function bin2decOnes(binArr){

    let sign = binArr[0];

    function onesComplement(binArr){

        return binArr.map((n) => {
            return n === 0 ? 1 : 0
        });
    }

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

    if(sign === 0)
        return _bin2dec(binArr.slice(1));

    return -1 * _bin2dec(onesComplement(binArr.slice(1)));
}