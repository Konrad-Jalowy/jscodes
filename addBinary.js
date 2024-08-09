function addBinary(binStr1, binStr2){

    let i = binStr1.length - 1;
    let j = binStr2.length - 1;

    let result = "";
    let carry = 0;

    while(i >= 0 || j >= 0 || carry === 1 ){

            let sum = carry;

            if(i >= 0){
                sum += parseInt(binStr1[i--]);
            }
            if(j >= 0){
                sum += parseInt(binStr2[j--]);
            }
            
            result = `${sum % 2}${result}`;
            carry = Math.floor(sum / 2);
    }

    return result;
}