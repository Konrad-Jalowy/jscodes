function createElement_v6(type, attributes={}, children=[]){
    const childElements = [...children].map(
        child =>
            child instanceof Object
                ? child
                : createElement_v6("li", {
                    textContent: child
                }) 
              );

            return {
                    type,
                    children: childElements,
                    props: Object.assign({ children: childElements }, attributes)
            }
}