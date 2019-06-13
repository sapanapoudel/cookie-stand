'use strict';

//Creating Constructor Store 
function Store(location, minCustomers, maxCustomers, avgCookiePerCustomer){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.totalsPerHour = [];
  Store.allStores.push(this);
}
Store.allStores = [];

//Creating new objects and storing them in allStores Array
new Store ('1 st and Pike',23,65,6.3);
new Store ('SeaTac', 3,24,1.2);
new Store ('Seattle Center',3,24,2.3);
new Store ('Capitol', 20,38,2.3);
new Store ('Alki', 2,16,4.6);


//methods can be added to a constructor function's prototype
Store.prototype.calculateCustomersPerOneHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;

  return customers;
};

Store.prototype.calculateCookiesSoldInOneHour = function(){
  // multiply an amount of customers by the average amount of cookies
  var customersInAnHour = this.calculateCustomersPerOneHour();
  var cookies = this.avgCookiePerCustomer * customersInAnHour;
  return Math.ceil(cookies);

};

Store.prototype.calculateTotalsPerDay = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalInOneHour = this.calculateCookiesSoldInOneHour();
    // console.log(totalInOneHour);
    this.totalsPerHour.push(totalInOneHour);
    total += totalInOneHour;
  }
  this.total = total;
  // console.log(this.total);
};

//Putting Data into Table
//Making header
function header(){
  var StoreTableEl = document.getElementById('my-table');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  for(var j = 0; j < 14; j++){
    var td = document.createElement('td');
    var hour = j + 6 + '00 ';
    hour = hour.padStart(5, '0');
    td.textContent = hour;
    trEl.appendChild(td);
  }

  StoreTableEl.appendChild(trEl);
}
header();

var storeForm = document.getElementById('store-form');

storeForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  console.log(event.target.studentName);
  console.log(event.target.studentName.value);
  new Store(event.target.storeName.value, event.target.minCustomers.value, event.target.maxCustomers.value, event.target.avgCookie.value);
});
