function createFromVDOM_v1(vDom){


    let element = document.createElement(vDom["type"]);

    element.textContent = vDom?.["textContent"] || "";


    for(const [key, value] of Object.entries(vDom)){

        if(key === "type" || key === "textContent")
            continue;
        
        element.setAttribute(key, value);
    }

    return element;

}