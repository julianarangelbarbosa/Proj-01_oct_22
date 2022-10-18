class Player {
    constructor(x, y, w, h, container) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.container = container;
      this.img = new Image();
      this.img.src='docs/assets/images/operador_1.png';
    }

draw() 
{
    this.container.drawImage(this.img,this.x,this.y,this.w,this.h);
    //container.fillRect(operador1.px, operador1.py, operador1.tx, operador1.ty)
    //container.fillText("Score1: "+pts,20,80)
}

top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }

}

