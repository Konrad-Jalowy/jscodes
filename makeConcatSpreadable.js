function makeConcatSpreadable(arrLike){
    return {...arrLike, [Symbol.isConcatSpreadable]: true};
}