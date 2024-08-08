function fromRightToLeft_v2(arr){
   
    let lastIdx = arr.length - 1;
    let idxFromRight = 0;

    while(lastIdx >= 0){
        console.log(`Idx from right: ${idxFromRight}`);
        console.log(`Value: ${arr[lastIdx]}`);

        lastIdx--;
        idxFromRight++;
    }
}