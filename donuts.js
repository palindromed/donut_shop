var DonutShop = function(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
}

DonutShop.prototype.hour = function(min, max, avg) {
  var hours = [];
  for (var i = 0; i < 11; i++) {
    this.customer = Math.floor(Math.random() * (max - min + 1) + min;
    var totals = this.customer * avg;
    hours.push(totals)
  }
  console.log(hours)
  return hours;

}





var downtown = new DonutShop('Downtown', 8, 43, 4.5);
var capitalHill = new DonutShop('Capital Hill', 4, 37, 2.0);
var southLakeUnion = new DonutShop('South Lake Union', 9, 23, 6.33);
var wedgewood = new DonutShop('Wedgewood', 2, 28, 1.25);
var ballard = new DonutShop('Ballard', 8, 58, 3.75);

downton.
