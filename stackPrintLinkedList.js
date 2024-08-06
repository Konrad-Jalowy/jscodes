function stackPrintLinkedList(root){
   
    let nodeStack = [];
    let inStack = [];
   
    nodeStack.push(root);
   
    while(nodeStack.length > 0){
       
        let currentNode = nodeStack.pop();
       
        inStack.push(currentNode.val);

        if(currentNode.next !== null)
            nodeStack.push(currentNode.next);
      }
    
    let outStack = [];

    while(inStack.length > 0){
        outStack.push(inStack.pop());
    }

    while(outStack.length > 0){
        console.log(outStack.pop());
    }
}