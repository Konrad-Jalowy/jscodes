Document.prototype.myQuerySelectorAll = function(selector) {
    var result = [];
    
    function traverse(node) {
      if(node == null) 
        return;
      if(isMatch(node, selector)) 
        result.push(node);
      for(var child of node.children) 
        traverse(child);
    }
    traverse(this.documentElement); 
    return result;
  }