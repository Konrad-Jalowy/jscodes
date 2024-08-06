class Stack {
 
    constructor(){  
        this.elements = []; 
    }
    push(element){ 
        this.elements.push(element) 
    }
    pop(){ 
        if(this.elements.length > 0)
            return this.elements.pop();
    }
    isEmpty(){ 
        return this.elements.length === 0;
    }
}