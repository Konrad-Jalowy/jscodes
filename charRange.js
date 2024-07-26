function* charRange(charStart, charEnd){

    let from = charStart.charCodeAt(0);
    let to = charEnd.charCodeAt(0);

    let i = from;

    while(i <= to)
        yield String.fromCharCode(i++);

}