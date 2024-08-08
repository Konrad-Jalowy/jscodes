function largestContSum(arr){

    let currentSum = 0;
    let maxSum = 0;

    for(let number of arr){

        currentSum= Math.max(number, (currentSum + number));
        maxSum  = Math.max(maxSum , currentSum);
    }

    return maxSum;
}