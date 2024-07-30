function variadic_v3(mulby, ...nums){
    let mulipliedArr = [].concat(...nums)
    .map((el) => el * mulby);

    return {
        multiplier: mulby,
        nums: Array.from(nums),
        mulipliedNums: mulipliedArr
    }
}