function caesar(string, shift){

    string = string.toUpperCase();
    let result = "";

    for(let i = 0; i < string.length; i++){

        let char = string[i];
        let code = string.charCodeAt(i);

        if(code >= 65 && code <= 90){
            char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        
        result += char;
        
    }

    return result;
}