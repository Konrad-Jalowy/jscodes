function merge2sorted(arr1, arr2){

    let i = 0;
    let j = 0;
    let merged = [];

    while(i < arr1.length && j < arr2.length){
            if(arr1[i] < arr2[j])
                merged.push(arr1[i++]);
            else 
                merged.push(arr2[j++]);     
    }

    if(i <arr1.length){
        while(i <arr1.length)
            merged.push(arr1[i++]);
    } 
    else if(j < arr2.length){
        while(j < arr2.length)
            merged.push(arr2[j++]);  
    }

    return merged;
}