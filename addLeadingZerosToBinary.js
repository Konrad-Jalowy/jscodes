function addLeadingZerosToBinary(str){
    let digits = str.replace(/\s/g, '').length;

    let numberOfZeros = (digits % 4) === 0 ? 0 : 4 - (digits % 4);

    while(numberOfZeros > 0){
        str = "0" + str;
        numberOfZeros--;
    }

    return str;


}