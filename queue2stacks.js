function Queue() {
    var inStack = [];
    var outStack = [];

    this.enqueue = function(num) {
        inStack.push(num);
    }

    this.dequeue = function() {
        if (outStack.length > 0) {
            return outStack.pop();
        }

        while(inStack.length > 1) {
            outStack.push(inStack.pop());
        }

        return inStack.pop();
    }
}