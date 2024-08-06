function printLinkedList(root){

    function _handle(root){

        if(root === null)
            return;

        console.log(root.val);
        _handle(root.next);

    }

    _handle(root);
}