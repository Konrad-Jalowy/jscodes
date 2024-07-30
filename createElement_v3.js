function createElement_v3({type, content, ...attributes}){

    if(type === "text"){
        let textNode = document.createTextNode(content);
        return textNode;
    }

    let element = document.createElement(type);
    element.textContent = content;
    
    for(const [key, value] of Object.entries(attributes)){
        element.setAttribute(key, value);
    }

    return element;

}