
function multiply(x, y){
    if(y === 0)
        return 0;

    return x + multiply(x, y - 1);
}