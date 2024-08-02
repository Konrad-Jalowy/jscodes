function bitwiseDivisibleByFour(num){
    return (
        ((num >> 2) << 2  ) 
        === num);
}