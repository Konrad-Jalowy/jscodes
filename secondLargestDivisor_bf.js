function secondLargestDivisorBruteForce(num){

    let cnt = num - 1;

    while(cnt > 1){
        if(num % cnt === 0)
            return cnt;
        cnt--;
    }
    
    return 1;
}