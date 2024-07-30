function createFromVDOM_v2(vDom){

    if(vDom["type"] === "text"){

        let text = vDom?.["textContent"] || "";
        let textNode = document.createTextNode(text);
        return textNode;
    }

    let element = document.createElement(vDom["type"]);

    element.textContent = vDom?.["textContent"] || "";


    for(const [key, value] of Object.entries(vDom)){

        if(key === "type" || key === "textContent")
            continue;

        element.setAttribute(key, value);
    }

    return element;

}