Document.prototype.myQuerySelector = function(selector) {
    
    var result = null;
    function traverse(node) {
      if(node == null) 
        return;
      if(isMatch(node, selector)) {
            result = node;
            return;
        }
      for(var child of node.children) 
        traverse(child);
    }
    traverse(this.documentElement); 
    return result;
  }