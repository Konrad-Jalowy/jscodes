function linkedlistHasCycle(node){

    let slow = node;
    let fast = node;

    while(fast !== null && fast.next !== null){
        
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast)
            return true;
    }

    return false;
}