class TextGrabber {
    constructor(selector){
        this.element = document.querySelector(selector);
        this.textContents = [];
    }
    search(el=this.element){
        if(Array.from(el.childNodes).length === 0)
            return;
        if(el.childElementCount === 0 && Array.from(el.childNodes).length === 1){
            this.textContents.push(el.childNodes[0]);
            return;
        }
        Array.from(el.childNodes).forEach((el) => {
            this.search(el);
        });

    }

    get(){
        return this.textContents;
    }
}