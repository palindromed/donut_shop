(function() {
  var DonutShop = function(details) {
    this.shop = details.shop;
    this.min = details.min;
    this.max = details.max;
    this.avg = details.avg;
    this.opens = details.opens || 700;
    this.closes = details.closes || 1800;
    this.hoursOpen = (this.closes - this.opens)/100 || 11;
    this.hours = [];
    this.totalDonuts = 0;

    this.processing()
    this.render();
  };

  DonutShop.prototype.render = function() {
    var el = document.getElementsByTagName('tbody')[0];
    var elMk = document.createElement('tr');
    var elHead = document.createElement('th');
    elHead.textContent = this.shop;
    el.appendChild(elMk);
    elMk.appendChild(elHead);
    for (var i = 0; i <= this.hoursOpen; i++) {
      var elTd = document.createElement('td');
      elTd.textContent = this.hours[i];
      elMk.appendChild(elTd);
    }
    elTd = document.createElement('td');
    elTd.textContent = this.totalDonuts;
    elMk.appendChild(elTd);
  };
  window.DonutShop = DonutShop;
})();
