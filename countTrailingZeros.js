function countTrailingZeros(num){

    let cnt = 0;
    let pow = 1;
    let flag= 1;

    
    while((num & flag) === 0){
        cnt++;
        flag = 1 + Math.pow(2, pow++);
    }

    return cnt;
}