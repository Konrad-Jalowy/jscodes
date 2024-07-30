function createElement_v5(type, attributes = {}, children = []){
    return {
        type: type,
        children: children,
        props: Object.assign({children: children}, attributes)
    }
}