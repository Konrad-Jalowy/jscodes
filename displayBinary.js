function displayBinary(binArr){
    let obj = {
        val: binArr.join("")
    };

    let pos = 1;

    while(binArr.length){
        obj[pos] = binArr.pop();
        pos = pos << 1;
    }
    
    console.table(obj);

}