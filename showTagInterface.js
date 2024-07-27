function showTagInterface(tagname){
    let element = document.createElement(tagname);
    return element[Symbol.toStringTag];
  }