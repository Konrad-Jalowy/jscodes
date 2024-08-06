function chunkArray(array, chunkSize) {
    const chunks = [];
    const copyArray = Array.from(array); 

    while (copyArray.length > 0) {
        chunks.push(copyArray.splice(0, chunkSize));
    }

    return chunks;
}
