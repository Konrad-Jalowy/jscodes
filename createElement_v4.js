function createElement_v4({type, content, ...attributes}){

    let textNode = document.createTextNode(content);

    if(type === "text"){
        return textNode;
    }

    let element = document.createElement(type);
    
    element.appendChild(textNode);
    
    for(const [key, value] of Object.entries(attributes)){
        element.setAttribute(key, value);
    }

    return element;

}