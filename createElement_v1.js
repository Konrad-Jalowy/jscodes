function createElement_v1({type, content, ...attributes}){

    console.log("Type: ", type);
    console.log("Content: ", content);

    for(const [key, value] of Object.entries(attributes)){
        console.log(key, " : ", value);
    }

}