function* queryAll(selector){
    let elems = Array.from(document.querySelectorAll(selector));
    yield *elems;
}