function bin2dec2s(binArr){

    let sign = binArr[0];

    function onesComplement(binArr){

        return binArr.map((n) => {
            return n === 0 ? 1 : 0
        });
    }

    function _bin2dec(binArr){

        let _sign = binArr[0];

        if(_sign === 1)
            binArr = onesComplement(binArr);

        let base = 2;
        let position = 0;
    
        let weight;
    
        let decimalNumber = 0;
    
        while(binArr.length > 1){
    
            let lastDigit = binArr.pop();
    
            weight = Math.pow(base, position);
    
            decimalNumber += lastDigit * weight;
    
            position++;
            
        }

        if(_sign === 0)
            return decimalNumber;

        return decimalNumber + 1;
    }

    if(sign === 0)
        return _bin2dec(binArr);

    return -1 * _bin2dec(binArr);
}