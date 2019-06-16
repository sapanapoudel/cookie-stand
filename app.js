/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

var allStores = [];
var hourList = ['6am','7am','8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//Creating constructor function named CookieStore
function Store (location, mincustomer, maxCustomer, avgCookieSale) { 
  this.minCustPerHour = mincustomer;
  this.maxCustPerHour = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.locationName = location;
  this.custEachHour = [];
  this.cookiesEachHr = [];
  this.TotalCookieForDay = 0;
  allStores.push(this);
}

new Store ('1 st and pike', 23, 65, 6.3);
new Store ('SeaTac', 3, 24, 1.2);
new Store ('Seattle Center', 3, 24, 2.3);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);

//Populate customer and sales per hour 
function fillCustomerandSales(){
  for (var i = 0; i < allStores.length; i++){
    popCustomer(allStores[i]);
    popSales(allStores[i]);
  }
}

//Calculating customer per each hour 
function popCustomer(store){
  for (var i = 0; i < hourList.length; i++){
    (store.custEachHour[i] = Math.floor(Math.random() * (store.maxCustPerHour - store.minCustPerHour + 1)) + store.minCustPerHour);
  }
}

//calculating cookie sold 
function popSales(store){
  for(var i =0; i<hourList.length; i++){
    store.cookiesEachHr[i] = Math.ceil(store.custEachHour[i] * store.avgCookieSale);
    store.TotalCookieForDay += store.cookiesEachHr[i];
  }
}

//Create a header for the table 
function header(){
  var salesTable = document.getElementById('tabl');
  var trE1 = document.createElement('tr');
  var thE1 = document.createElement('th');
  thE1.textContent = 'Store Locations';
  trE1.appendChild(thE1);

  for (var i =0; i < hourList.length; i++){
    thE1 = document.createElement('th');
    thE1.textContent = hourList[i];
    trE1.appendChild(thE1);
  }

  thE1 = document.createElement('th');
  thE1.textContent = 'Daily Location Totals';
  trE1.appendChild(thE1);

  salesTable.appendChild(trE1);
}

//Create a body for the table 
function body(store) {
  var salesTable = document.getElementById('tabl');
  var trE1 = document.createElement('tr');
  var tdE1 = document.createElement('td');
  tdE1.textContent = store.locationName;
  trE1.appendChild(tdE1);

  for (var j = 0; j<store.cookiesEachHr.length; j++){
    tdE1 = document.createElement('td');
    tdE1.textContent = store.cookiesEachHr[j];
    trE1.appendChild(tdE1);
  }

  tdE1 = document.createElement('td');
  tdE1.textContent = store.TotalCookieForDay;
  trE1.appendChild(tdE1);
  salesTable.appendChild(trE1);
}

//Calculate each hour total 
function calculateEachHrLoc(trE1) {
  var sum = 0;
  var totalsale = 0;
  var tdE1;
  for(var i =0; i<15; i++){
    sum = 0;
    for (var j = 0; j<allStores.length;j++){
      sum += allStores[j].cookiesEachHr[i];
    }
    tdE1 = document.createElement('td');
    tdE1.textContent = sum;
    trE1.appendChild(tdE1);
  }
  tdE1 = document.createElement('td');
  for (var index  = 0; index < allStores.length; index++){
    totalsale += allStores[index].TotalCookieForDay;
  }

  tdE1.textContent = totalsale;
  trE1.appendChild(tdE1);

}

//Creating footer for the table
function footer() {
  var salesTable = document.getElementById('tabl');
  var trE1 = document.createElement('tr');
  var tdE1 = document.createElement('td');
  tdE1.textContent = 'Total';
  trE1.appendChild(tdE1);

  calculateEachHrLoc(trE1);
  salesTable.appendChild(trE1);

}

//To generate render for each location and calling reder for each object
function renderAllloc(allStores){
  for (var i =0; i < allStores.length; i++){
    allStores[i].render = function(){
      body(allStores[i]);
    };
    allStores[i].render();
  }
}

//function that handles the submit event
function handleDataSubmit(e){
  //prevent page reload on a submit event
  e.preventDefault();
  //previous table
  console.log(e);
  var parent = document.getElementById('tabl');

  var formLocation = e.target[1].value.toLowerCase();
  var formMin = parseInt(e.target[2].value);
  var formMax = parseInt(e.target[3].value);
  var formAvg = parseFloat(e.target[4].value);
  var newStore = new Store (formLocation, formMin, formMax, formAvg);
  popCustomer(newStore);
  //popSales(newStore);

  console.log(newStore);

  //clear previous table 
  while(parent.hasChildNodes()){
    parent.removeChild(parent.firstChild);
  }
  renderAll();

}

function renderAll(){
  fillCustomerandSales();

  //headrRow initializer
  header();
  renderAllloc(allStores);
  footer();
}

var cookieform = document.getElementById('cookieform');
//function that listen submit button
cookieform.addEventListener('submit', handleDataSubmit);
renderAll();
