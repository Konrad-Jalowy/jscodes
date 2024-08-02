function bitwiseIncrement_v1(num){
    if((num & 1) ^ 1)
        return num | 1;
    else
        return "not implemented yet";
}