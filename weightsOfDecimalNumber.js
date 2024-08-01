function weightsOfDecimalNumber(num){

    let weights = [];

    let i = 0;

    while(num !== 0){
        let lastDigit = num % 10;

        weights.push(lastDigit * Math.pow(10, i));

        i++;

        num = Math.floor(num / 10);
    }

    return weights;
}