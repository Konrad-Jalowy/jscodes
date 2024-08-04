function factorialRec(num){
    if(num < 0)
        return -1;
    if(num === 1 || num === 0)
        return num;
    return num * factorialRec(num-1);
}
