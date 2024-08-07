function cStyleStringFindMidpoint(string){

    let fast = 0;
    let slow = 0;

    while(string[fast] !== "\0" && string[fast+1] !== "\0"){

        fast += 2;
        slow += 1;

    }

    return string[slow];
}