function countLeadingZeros(num)
{
    
    let total_bits = 32;
    let zeros = 0;

    while ((num & (1 << (total_bits - 1))) === 0)
    {
        num = (num << 1);
        zeros++;
    }
  
    return zeros;
}