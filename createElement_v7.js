function createElement_v7(type, attributes={}, ...children){
    const childElements = [...children].map(
        child =>
            child instanceof Object
                ? child
                : createElement_v7("li", {
                    textContent: child
                }) 
              );

            return {
                    type,
                    children: childElements,
                    props: Object.assign({ children: childElements }, attributes)
            }
}