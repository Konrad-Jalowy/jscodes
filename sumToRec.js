function sumTo(num){
    if(num === 0)
        return 0;

    return num + sumTo(num-1);
}