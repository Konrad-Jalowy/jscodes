function* generateRandomBinary(min, max, zeros=false){
    while(true){
        let random = Math.random() * (max - min) + min;
        random = parseInt(random);
        yield random;
        if(zeros === false)
            yield random.toString(2);
        else
            yield `${random.toString(2)}`.padStart(Math.clz32(random), "0");
    }
  }