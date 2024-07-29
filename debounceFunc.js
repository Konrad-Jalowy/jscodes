function debounceFunc(func, timeout = 3000){

    let timer = null;
    return (...args) => {

      if (timer === null) {
        
        func(...args);

        timer = setTimeout(() => { 
            timer = null
        }, timeout);

      } else {

        clearTimeout(timer);
        
        timer = setTimeout(() => { 
            timer = null
            func(...args); 
        }, timeout);
      }
     
    };
  }
