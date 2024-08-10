
function countZeros_v2(n){
    
    if(n === 0)
        return 1;

    function _countZeros(num){
        if(num === 0)
            return 0;

        let lastDigit = num % 10;
        if(lastDigit === 0)
            return 1 + _countZeros(Math.floor(num / 10));
        return 0 + _countZeros(Math.floor(num / 10));
    }

    return _countZeros(n);
    
}