class Controls {
    constructor(operador1) {
      this.operador1 = operador1;
    }
  
    keyboardEvents() {
      window.addEventListener('keydown', (e) => {
        switch (e.code) {
          case 'ArrowLeft':
            if (this.operador1.x > 0) {
              this.operador1.x -= 10;
            }
            break;
          case 'ArrowRight':
            if (this.operador1.x <= 390) {
              this.operador1.x += 10;
            }
            break;
          case "ArrowUp":
            if (this.operador1.y > 70)
            { this.operador1.y -=10}
            break;
            
         case "ArrowDown":
            if (this.operador1.y <= 420){
                this.operador1.y +=10}
            break;            

        }
      });
    }
  }