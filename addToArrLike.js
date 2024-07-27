function addToArrLike(arrLikeObj, elem){
    let arrLikeCopy = {...arrLikeObj};

    if(!arrLikeCopy.hasOwnProperty('length')){
        arrLikeCopy["length"] = 0;
    }

    let len = arrLikeCopy["length"];

    let outArrLike = {...arrLikeCopy, [len]: elem};

    outArrLike["length"] = ++len;

    return outArrLike;
  }