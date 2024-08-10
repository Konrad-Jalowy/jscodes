function valuesInBinary(num){

    let values = [1];

    while(num > 1){
        let currVal = values[0] << 1;
        values = [currVal, ...values];
        num--;
    }

    return values;
}