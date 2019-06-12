'use strict';
//Global Variables
var StoreTableEl = document.getElementById('my-table');
// eslint-disable-next-line no-unused-vars
var allStores = [];

//Creating Constructor Store 
function Store(location, minCustomers, maxCustomers, avgCookiePerCustomer){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.totalsPerHour = [];
}

//Creating new objects and storing them in allStores Array
// eslint-disable-next-line no-unused-vars
var pikeMarket = new Store ('1 st and Pike',23,65,6.3);
// eslint-disable-next-line no-unused-vars
var seaTac = new Store ('SeaTac', 3,24,1.2);
// eslint-disable-next-line no-unused-vars
var seattleCenter = new Store ('Seattle Center',3,24,2.3);
// eslint-disable-next-line no-unused-vars
var capitolHill = new Store ('Capitol', 20,38,2.3);
// eslint-disable-next-line no-unused-vars
var alki = new Store ('Alki', 2,16,4.6);

//methods can be added to a constructor function's prototype
Store.prototype.calculateCustomersPerOneHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;

  return customers;
};

Store.prototype.calculateCookiesSoldInOneHour = function(){
  // multiply an amount of customers by the average amount of cookies
  var customersInAnHour = this.calculateCustomersPerOneHour();
  var cookiesPerHour = this.avgCookiesPerCustomer * customersInAnHour;
  return Math.ceil(cookiesPerHour);

  // return this.calculateCustomersPerOneHour() * this.avgCookiesPerCustomer;
};

Store.prototype.calculateTotalCookiePerHour = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalInOneHour = this.calculateCookiesSoldInOneHour();
    this.totalsPerHour.push(totalInOneHour);
    total += totalInOneHour;

    this.totalsPerHour.push(i + '00 - ' + (i + 1) + '00 : ' + totalInOneHour + ' cookies');
  }
  this.total = total;
  console.log(this.totalsPerHour);
};

var createTableEl = function(){
  var tableContainer = document.createElement('my-table');
  totalsPerHour.appendChild.
}

// //Putting Data into Table
// Store.prototype.makeTable = function(){
//   if(this.totalsPerHour.length === 0){
//     this.calculateTotalsPerHour();
//   }

//   var locationTrEl = document.createElement('tr');

//   var thEl = document.createElement('th');
//   for(var j = 0; j < this.totalsPerHour.length; j++){
//     var hourLiEl = document.createElement('li');
//     var hour = j + 6 + '00 ';
//     hour = hour.padStart(5, '0');
//     hourLiEl.textContent = hour + this.totalsPerHour[j];
  
//   }
//   locationTrEl.appendChild(thEl);
//   StoreTableEl.appendChild(locationTrEl);

//   var tdEl = document.createElement('td');
//   tdEl.textContent = this.location;
//   locationTrEl.appendChild(tdEl);

//   thEl.appendChild(hourLiEl);

// };

// // //This page contain: 
// function makePage(){
//   Store.makeTable;
// }
// makePage();

