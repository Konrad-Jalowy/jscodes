function selectEl(selector){
    return {
        el: document.querySelector(selector),

        get textContent(){
            return this.bind((el) => el.textContent);
        },

        set textContent(val){
            this.bind((el) => el.textContent = val);
        },

        bind(transform){
            return this.el == null ? this : transform(this.el);
        },

        valueOf(){
            return this.el;
        },

        retrySelect(selector){
            this.el ??= document.querySelector(selector);
        }
    }
    
}