function fromTemplate(el){
    if(!el.matches("template"))
        return null;
    return el.content.cloneNode(true);
}