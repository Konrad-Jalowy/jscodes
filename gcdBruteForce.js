function gcdBruteForce(x, y){

    let smallerOne = Math.min(x, y);

    while(smallerOne > 1){
        if(x % smallerOne === 0 && y % smallerOne === 0)
            return smallerOne;

        smallerOne--;
    }

    return 1;
}