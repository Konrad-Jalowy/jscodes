function reduceChunkArr(arr, chunkSize){
    return arr.reduce((result, item, index) => {
        if (index % chunkSize === 0) {
            result.push(arr.slice(index, index + chunkSize));
        }
        return result;
    }, []);
}