function createElement_v2({type, content, ...attributes}){

    console.log("Type: ", type);
    console.log("Content: ", content);

    if(type === "text"){
        let textNode = document.createTextNode(content);
        return textNode;
    }

    for(const [key, value] of Object.entries(attributes)){
        console.log(key, " : ", value);
    }

}