class Enemy {
    constructor(container) {
      this.container = container
      this.x = 30 + Math.floor(Math.random() * 350);
      this.y = 80 + Math.floor(Math.random() * 300);
      this.w = 48; /* Math.floor(Math.random() * 400)+200; */
      this.h = 48;
      /* this.color = `rgb(${this.y % 255}, 0, 0)`; */
      this.img = new Image();
      this.img.src ="docs/assets/images/truck2.png";
    }
  
    drawBar() {
      //this.container.fillStyle = this.img;
      this.container.fillStyle = this.color;
      this.container.drawImage(this.img,this.x, this.y, this.w, this.h);
  
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
  }

  