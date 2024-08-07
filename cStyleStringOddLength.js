function cStyleStringOddLength(string){

    let fast = 0;

    while(string[fast] !== "\0" && string[fast+1] !== "\0"){
        fast += 2;
    }

    return string[fast] !== "\0";
}