function visualizeFromGenerator(visualize){
    let gen;
    while(true){
        gen = visualize.next();
        if(gen.done === true)
            break;
        console.log(gen.value);
    }
    return gen.value;

}