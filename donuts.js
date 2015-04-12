(function() {
  var newShopForm = document.getElementById('new-shop-form');
  var shop = document.getElementById('shop');
  var minimum = document.getElementById('minimum');
  var maximum = document.getElementById('maximum');
  var average = document.getElementById('average');
  var array = []

  var handleNewShop = function(event){
    event.preventDefault();

    existingShops();

    var newShop = new DonutShop({shop: event.target.shop.value, min:
    event.target.minimum.value, max: event.target.maximum.value, avg:
    event.target.average.value});

    event.target.shop.value = null;
    event.target.minimum.value = null;
    event.target.maximum.value = null;
    event.target.average.value = null;
    array.push(newShop);
  };

  DonutShop.prototype.processing = function(){
    for (var i = 0; i <= this.hoursOpen; i++) {
      customer = Math.ceil(this.customers());
      this.totalDonuts += customer;
      this.hours.push(customer)
    }
  };

  DonutShop.prototype.customers = function() {
    var customer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return customer * this.avg;
  };

  var existingShops = function() {
    if (array.length === 0) {
      array.push(new DonutShop({shop: 'Downtown', min: 8, max: 43, avg: 4.5}));
      array.push(new DonutShop({shop :'Capitol Hill', min: 4, max: 37, avg: 2.0}));
      array.push(new DonutShop({shop :'South Lake Union', min: 9, max: 23, avg: 6.33}));
      array.push(new DonutShop({shop:'Wedgewood', min: 2, max: 28, avg: 1.25}));
      array.push(new DonutShop({shop:'Ballard', min: 8, max: 58, avg: 3.75}));
    }
    else {
      return;
    }
  };

  newShopForm.addEventListener('submit', handleNewShop);
})();
