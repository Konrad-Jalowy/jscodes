function oncify(mainFunction) {

    let executedFlag = false;
    let res = null

    return (...args) => {
      
    if (executedFlag === false) { 
        res = mainFunction(...args); 
        executedFlag = true;
       }
       return res;
    };
  }