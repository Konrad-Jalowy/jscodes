function positionOfFirstSetBit(num, max=15){

    let mask = 1;
    let pos = 0;
    //position is zero-indexed counted from right
    while(pos !== max){
        if((num & mask) !== 0){
            return pos;
        }
        pos++;
        mask = mask << 1;
    }
    return -1;

}