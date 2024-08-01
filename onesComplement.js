function onesComplement(binArr){

    return binArr.map((n) => {
        return n === 0 ? 1 : 0
    });
}