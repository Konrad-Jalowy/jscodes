function twoSum(numbers, target){

    let hashmap = new Map();

    for(let i = 0; i < numbers.length; i++){

        let neededNumber = target - numbers[i];

        if(hashmap.has(neededNumber)){
            return [i, hashmap.get(neededNumber)];
        }

        hashmap.set(numbers[i], i);
    }
}