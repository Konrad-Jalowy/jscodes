function sieveOfEratosthenes(num){

    let descendingArray = Array.from({length: num-1}, (_, i) => {
        return num-i;
    });

    let excluded = new Set();
    let output = [];

    while(descendingArray.length > 0){
         
         let currNumber = descendingArray.pop();

         if(excluded.has(currNumber))
            continue;

         for(let n = currNumber+1; n <= num; n++){
             if(n % currNumber === 0){
                excluded.add(n);
             }
         }

         output.push(currNumber);
    }

    return output;
}