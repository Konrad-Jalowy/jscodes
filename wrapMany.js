function wrapMany(tags, elements){
    const newHTML = elements.map(function(content){
       return `${tags[0]}${content}${tags[1]}`;
    });
    return newHTML;
}