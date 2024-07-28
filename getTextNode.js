function getTextNode(el){

    if(el === null)
        return null;
    
    if(el.nodeType === Node.TEXT_NODE)
        return el;

    return getTextNode(el.childNodes[0]);
}