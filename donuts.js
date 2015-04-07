var DonutShop = function(name, min, max, avg) {
      this.name = name;
      this.min = min;
      this.max = max;
      this.avg = avg;
      this.hours = [];
      this.totalDonuts = 0;

      this.processing()
    };

    DonutShop.prototype.processing = function(){
      for (var i = 0; i < 11; i++) {
        customer = Math.ceil(this.customers());
        this.totalDonuts += customer;
        this.hours.push(customer)
      }
    console.log(this.hours);
    console.log(this.totalDonuts);
    }

    DonutShop.prototype.customers = function() {
      var customer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      return customer * this.avg;
    };

    var downtown = new DonutShop('Downtown', 8, 43, 4.5);
    var capitalHill = new DonutShop('Capital Hill', 4, 37, 2.0);
    var southLakeUnion = new DonutShop('South Lake Union', 9, 23, 6.33);
    var wedgewood = new DonutShop('Wedgewood', 2, 28, 1.25);
    var ballard = new DonutShop('Ballard', 8, 58, 3.75);

DonutShop.prototype.render = function() {
  var el = document.createElement('table')
  el.innerHTML= '<tr><th>' + this.name +'</th>'+ '<td>'+ this.hourly[0]+'</td>'

}
