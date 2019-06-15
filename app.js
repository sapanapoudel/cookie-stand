'use strict';
var hourList = ['6am','7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//Creating Constructor Store 
function Store(location, minCustomers, maxCustomers, avgCookiePerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.totalsPerHour = [];
  allStores.push(this);
}
var allStores = [];

new Store('1 st and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 3, 24, 2.3);
new Store('Capitol', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

//methods can be added to a constructor function's prototype
Store.prototype.calculateCustomersPerOneHour = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
};

//Calculate Cookie Sold in One Day
Store.prototype.calculateTotalsPerDay = function () {
  var locationTotal = 0;
  for (var i = 0; i < 15; i++) {
    var totalInOneHour = Math.round(this.calculateCustomersPerOneHour() * this.avgCookiePerCustomer);
    this.totalsPerHour.push(totalInOneHour);
    console.log(totalInOneHour);
    locationTotal += totalInOneHour;
  }
  this.totalsPerHour.push(locationTotal);
  this.renderthis();
};

//Rendering for each object
Store.prototype.renderthis = function () {
  var tlEl = document.getElementById('my-table');
  var trEl = document.createElement('tr');
  var tdEl = [];
  tdEl[0] = document.createElement('td');
  tdEl[0].textContent = this.location;

  trEl.appendChild(tdEl[0]);


  for (var i = 0; i < this.totalsPerHour.length; i++) {
    tdEl[i] = document.createElement('td');
    tdEl[i].textContent = this.totalsPerHour[i];

    trEl.appendChild(tdEl[i]);
  }
  tlEl.appendChild(trEl);

  // //putting Total in the Form 

};

//Creating function to pass new store 

// A refrence to the form element 
var storeForm = document.getElementById('store-form');

//Defining function called submitForm
function submitForm(someEvent) {
  someEvent.preventDefault();

  var locationName = someEvent.target.storeName.value;
  var minC = someEvent.target.minCustomer.value;
  var maxC = someEvent.target.maxCustomer.value;
  var avgC = someEvent.target.avgCookie.value;
  new Store(locationName, parseInt(minC), parseInt(maxC), parseFloat(avgC));

  if(document.getElementById('my-table')){
    var emptyTable = document.getElementById('my-table');

    emptyTable.innerHTML = '';
  }
  loadpage();
}
//Evenlisterner
storeForm.addEventListener('submit', submitForm);

function loadpage() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].calculateTotalsPerDay();
  }
  footer();
}
loadpage();

function footer() {
  if (document.getElementById('total-row')) {
    document.getElementById('total-row').remove();
  }
  var tlEl = document.getElementById('my-table');
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'total-row');
  var tdEl= [];
  tdEl[0] = document.createElement('td');
  tdEl[0].textContent = 'Total';

  trEl.appendChild(tdEl[0]);
  tlEl.appendChild(trEl);

  for (var k = 0; k < 15; k++) {
    var total = 0;
    for (var j = 0; j < allStores.length; j++) {
      tdEl[k] = document.createElement('td');
      total += allStores[j].totalsPerHour[k];
      tdEl[k].textContent = total;
    }
    trEl.appendChild(tdEl[k]);
    tlEl.appendChild(trEl);
  }
}

function header(){
  var tlEl = document.getElementById('my-table');
  var thEl = document.getElementById('th');
  thEl.textContent = hourList[];
}
