function bitwiseDivisibleByTwo(num){
    return (
        ((num >> 1) << 1  ) 
        === num);
}