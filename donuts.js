var DonutShop = function(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hours = [];
  this.totalDonuts = 0;

  this.processing()
  this.render();
};

DonutShop.prototype.processing = function(){
  for (var i = 0; i <= 11; i++) {
    customer = Math.ceil(this.customers());
    this.totalDonuts += customer;
    this.hours.push(customer)
  }
}

DonutShop.prototype.customers = function() {
  var customer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return customer * this.avg;
};


DonutShop.prototype.render = function() {
  var el = document.getElementsByTagName('tbody')[0];
  var elMk = document.createElement('tr');
  var elHead = document.createElement('th');
  elHead.textContent = this.name;
  el.appendChild(elMk);
  elMk.appendChild(elHead);
  for (var i = 0; i < this.hours.length; i++) {
    var elTd = document.createElement('td');
    elTd.textContent = this.hours[i];
    elMk.appendChild(elTd);
  }
  elTd = document.createElement('td');
  elTd.textContent = this.totalDonuts;
  elMk.appendChild(elTd);
};

var downtown = new DonutShop('Downtown', 8, 43, 4.5);
var capitolHill = new DonutShop('Capitol Hill', 4, 37, 2.0);
var southLakeUnion = new DonutShop('South Lake Union', 9, 23, 6.33);
var wedgewood = new DonutShop('Wedgewood', 2, 28, 1.25);
var ballard = new DonutShop('Ballard', 8, 58, 3.75);



      this.name = name;
      this.min = min;
      this.max = max;
      this.avg = avg;
      this.hours = [];
      this.totalDonuts = 0;

      this.processing()
      this.render();
};

DonutShop.prototype.processing = function(){
  for (var i = 0; i <= 11; i++) {
    customer = Math.ceil(this.customers());
    this.totalDonuts += customer;
    this.hours.push(customer)
  }
}

DonutShop.prototype.customers = function() {
  var customer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return customer * this.avg;
};


DonutShop.prototype.render = function() {
  var el = document.getElementsByTagName('tbody')[0];
  var elMk = document.createElement('tr');
  var elHead = document.createElement('th');
  elHead.textContent = this.name;
  el.appendChild(elMk);
  elMk.appendChild(elHead);
  for (var i = 0; i < this.hours.length; i++) {
    var elTd = document.createElement('td');
    elTd.textContent = this.hours[i];
    elMk.appendChild(elTd);
  }
  elTd = document.createElement('td');
  elTd.textContent = this.totalDonuts;
  elMk.appendChild(elTd);
};

var array = []
var downtown = new DonutShop('Downtown', 8, 43, 4.5);
var capitolHill = new DonutShop('Capitol Hill', 4, 37, 2.0);
var southLakeUnion = new DonutShop('South Lake Union', 9, 23, 6.33);
var wedgewood = new DonutShop('Wedgewood', 2, 28, 1.25);
var ballard = new DonutShop('Ballard', 8, 58, 3.75);
