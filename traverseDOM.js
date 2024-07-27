function traverseDOM() {
    
    function traverse(node, depth=1) {
      if(node == null) 
        return;

      
      console.log(node);
      console.log("-".repeat(depth));

      let newDepth = depth + 1;

      for(var child of node.children) 
        traverse(child,newDepth);
    }

    traverse(document.documentElement, 1); 

    
  }