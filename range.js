function* range(from, to){

    let i = from;
    while(i <= to)
        yield i++;
}