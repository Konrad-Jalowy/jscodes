function* pyRange(from, to){

    let i = from;
    while(i < to)
        yield i++;
}