function sieveDesc(num){
    return Array.from({length: num-1}, (_, i) => {
    
        return num-i;
    });
}