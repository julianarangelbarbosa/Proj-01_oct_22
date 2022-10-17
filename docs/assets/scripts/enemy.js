class Enemy {
    constructor(container) {
      this.container = container
      this.x = Math.floor(Math.random() * 500);
      this.y = Math.floor(Math.random() * 600);
      this.w = 80; /* Math.floor(Math.random() * 400)+200; */
      this.h = 80;
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

  