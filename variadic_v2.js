function variadic_v2(mulby, ...nums){
    return {
        multiplier: mulby,
        nums: Array.from(nums)
    }
}