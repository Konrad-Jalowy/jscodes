function bitwiseIncrement_v2(num){
    if((num & 1) ^ 1)
        return num | 1;
    else {

        let mask = 1;
        let _new = num ^ mask;
        while(_new <= num){
            mask = mask << 1;
            _new = _new ^ mask;
        }
        return _new;
    }
        
}