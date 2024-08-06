function powers(root){

    let powers = [];

    function _handle(root){

        if(root === null)
            return;

        powers.push(Math.pow(root.val, 2));
        _handle(root.next);
    }

    _handle(root);

    return powers;
}