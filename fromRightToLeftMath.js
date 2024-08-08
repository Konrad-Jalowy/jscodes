function fromRightToLeft(arr){
   
    let lastIdx = arr.length - 1;

    while(lastIdx >= 0){
      
        let idxFromRight = arr.length - 1 - lastIdx;

        console.log(`Idx from right: ${idxFromRight}`);
        console.log(`Value: ${arr[lastIdx]}`);

        lastIdx--;
    }
}