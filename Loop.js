const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
  }


class Loop {
    constructor(init, max, iter, callback) {
        this.state = STATE.PENDING;
        this.init = init;
        this.max = max;
        this.iter = iter;
        this.callback = callback;
       
      }

      start(){
        this.updateResult(this.init, STATE.PENDING);
      }
      
      updateResult(value, state) {
        setTimeout(() => {
          this.state = state;
          
          if (this.state !== STATE.PENDING) {
            return;
          }

          if(value >= this.max){
            this.state === STATE.FULFILLED;
            return;
          }

          this.callback(value);

          this.init += this.iter;

          this.updateResult(this.init, STATE.PENDING);
          
        }, 0);
      }
}

//let loop = new Loop(0,3,1,(num) => console.log(num));
//loop.start();
//0
//1
//2
