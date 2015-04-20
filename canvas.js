'use strict';
(function () {

  var Square = function(x, y, size){
    this.x = x;
    this.y = y;
    this.velX = 1;
    this.velY = 1;
    this.size = size;

  };

  Square.prototype.update = function(canvas) {
    if (this.x + this.size + this.velX < canvas.width && this.x + this.velX > 0)
      this.x = this.x + this.velX;
    else
      this.velX = 0 - this.velX;

    if (this.y + this.size + this.velY < canvas.height && this.y + this.velY > 0)
      this.y = this.y + this.velY;
    else
      this.velY = 0 - this.velY;

  };

  Square.prototype.draw = function(context) {
    context.fillStyle = 'blue';
    context.fillRect(this.x, this.y, this.size, this.size);

  };

  var canvas1 = document.getElementById('canvas1');

  var context = canvas1.getContext('2d');

  var square = new Square(0,0,10);


  setInterval(function () {
    blank(context, canvas1);
    square.update(canvas1);
    square.draw(context);

  }, 10);

  var blank = function(context, canvas) {
    context.fillStyle = "white";
    context.fillRect(0,0,canvas.width, canvas.height);
  };


}());
