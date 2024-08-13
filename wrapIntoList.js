function wrapIntoList(tags, tag, elements){
    
    tags = tags.slice(1);

    const newHTML = elements.map(function(content){
        return `${tags[0]}${content}${tags[1]}`;
     });
    
    let htmlString = newHTML.reduce(function(acc, curr){
        return acc + curr;
    }, `<${tag}>`);
    htmlString += `</${tag}>`;

    return htmlString;

}
