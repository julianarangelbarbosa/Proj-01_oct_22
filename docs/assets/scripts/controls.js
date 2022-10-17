class Controls {
    constructor(operador1) {
      this.operador1 = operador1;
    }
  
    keyboardEvents() {
      window.addEventListener('keydown', (e) => {
        switch (e.code) {
          case 'ArrowLeft':
            if (this.operador1.px > 0) {
              this.operador1.px -= 0.3;
            }
            break;
          case 'ArrowRight':
            if (this.operador1.px <= 700) {
              this.operador1.px += 0.3;
            }
            break;
          case "ArrowUp":
            if (this.operador1.py > 100)
            { this.operador1.py -=0.3}
            break;
            
         case "ArrowDown":
            if (this.operador1.py <= 400){
                this.operador1.py +=0.3}
            break;            

        }
      });
    }
  }