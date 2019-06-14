'use strict';

//Creating Constructor Store 
function Store(location, minCustomers, maxCustomers, avgCookiePerCustomer){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.totalsPerHour = [];
  // this.calculateTotalsPerDay();
  // Store.allStores.push(this);
}
var allStores = [];

//methods can be added to a constructor function's prototype
Store.prototype.calculateCustomersPerOneHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;

  return customers;
};

//Calculate Cookie Sold in One Day
Store.prototype.calculateTotalsPerDay = function(){
  var locationTotal = 0;
  for(var i = 0; i < 15; i++){
    var totalInOneHour = Math.round(this.calculateCustomersPerOneHour() * this.avgCookiePerCustomer);
    this.totalsPerHour.push(totalInOneHour);
    console.log(totalInOneHour);
    locationTotal += totalInOneHour;
  }
  this.totalsPerHour.push(locationTotal);
  this.renderthis();
};

//Rendering for each object
Store.prototype.renderthis = function() {
  var tlEl = document.getElementById('my-table');
  var trEl = document.createElement('tr');
  var tdEl = [];
  tdEl[0] = document.createElement('td');
  tdEl[0].textContent = this.location;

  trEl.appendChild(tdEl[0]);
  tlEl.appendChild(trEl);

  for(var i = 0; i < this.totalsPerHour.length; i++) {
    tdEl[i] = document.createElement('td');
    tdEl[i].textContent = this.totalsPerHour[i];

    trEl.appendChild(tdEl[i]);
    tlEl.appendChild(trEl);
  }
};
var nextRow = -1;

//Creating function to pass new store 
function createStore(location, minCustomers, maxCustomers, avgCookiePerCustomer){
  nextRow++;

  allStores.push(new Store(location, minCustomers, maxCustomers, avgCookiePerCustomer));
  allStores[nextRow].calculateTotalsPerDay();
}
// A refrence to the form element 
var storeForm = document.getElementById('store-form');

//Defining function called submitForm
function submitForm(someEvent) {
  someEvent.preventDefault();

  var locationName = someEvent.target.storeName.value;
  var minC = someEvent.target.minCustomer.value;
  var maxC = someEvent.target.maxCustomer.value;
  var avgC = someEvent.target.avgCookie.value;
  createStore(locationName, parseInt(minC), parseInt(maxC), parseFloat(avgC));
  // footer();
}

storeForm.addEventListener('submit', submitForm);

function footer(){
  var tlEl = document.getElementById('my-table');
  var trEl = document.createElement('tr');
  for(var i = 0; i < 15; i++){
    var total = 0;
    for (var j = 0; j < allStores.length; j++){
      total += allStores[j].totalsPerHour[i];
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
    tlEl.appendChild(trEl);
    // this.renderthis();
  }
}
footer();
// footer.renderthis();
