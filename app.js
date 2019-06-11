'use strict';

var storeUlEl = document.getElementById('store-container');

// Creating object literal for each store object
//1st and Pike Market
var pikeMarket = {
  location: '1st and Pike Market',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  totalCookiesSalePerHour: [],

};

pikeMarket.calculateCustomerPerHour = function () {
  var randomCustomerPerHour = Math.floor(Math.random() * (pikeMarket.maxCustomer - pikeMarket.minCustomer)) + pikeMarket.minCustomer;
  return randomCustomerPerHour;

};

pikeMarket.calculateCookieSalePerHour = function(){
  var customerInHour = pikeMarket.calculateCustomerPerHour();
  var cookieSaleEachHour = pikeMarket.avgCookieSale * customerInHour;
  return Math.floor(cookieSaleEachHour);

};

pikeMarket.calculateTotalCookieSalePerHour = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalCookiesPerHour = pikeMarket.calculateCookieSalePerHour();
    pikeMarket.totalCookiesSalePerHour.push(totalCookiesPerHour);
    total += totalCookiesPerHour;
  }
  pikeMarket.total = total;
  console.log(pikeMarket.totalCookiesSalePerHour);
};

//Putting List on the page
pikeMarket.makeList = function(){
  if(pikeMarket.totalCookiesSalePerHour.length === 0){
    this.calculateTotalCookieSalePerHour();
  }

  var OuterLiEl = document.createElement('li');
  var h2LiEl = document.createElement('h2');
  h2LiEl.textContent = pikeMarket.location;
  OuterLiEl.appendChild(h2LiEl);

  var ulEl = document.createElement('ul');

  for (var j = 0; j < pikeMarket.totalCookiesSalePerHour.length; j++){
    var hourLiEl = document.createElement('li');
    var hour = j + 6 + '00 ';
    hour = hour.padStart(5, '0');
    hourLiEl.textContent = hour + ': '+pikeMarket.totalCookiesSalePerHour[j] + ' cookies';
    ulEl.appendChild(hourLiEl);
  }

  var completeLiEl = document.createElement('li');
  completeLiEl.textContent = 'total: ' + pikeMarket.total;
  ulEl.appendChild(completeLiEl);

  OuterLiEl.appendChild(ulEl);

  storeUlEl.appendChild(OuterLiEl);

};

//Location2 SeaTac Airport 
var seaTac = {
  location: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  totalCookiesSalePerHour: [],

};

seaTac.calculateCustomerPerHour = function () {
  var randomCustomerPerHour = Math.floor(Math.random() * (seaTac.maxCustomer - seaTac.minCustomer)) + seaTac.minCustomer;
  return randomCustomerPerHour;

};

seaTac.calculateCookieSalePerHour = function(){
  var customerInHour = seaTac.calculateCustomerPerHour();
  var cookieSaleEachHour = seaTac.avgCookieSale * customerInHour;
  return Math.floor(cookieSaleEachHour);

};

seaTac.calculateTotalCookieSalePerHour = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalCookiesPerHour = seaTac.calculateCookieSalePerHour();
    seaTac.totalCookiesSalePerHour.push(totalCookiesPerHour);
    total += totalCookiesPerHour;
  }
  seaTac.total = total;
  console.log(seaTac.totalCookiesSalePerHour);
};

//Putting List on the page
seaTac.makeList = function(){
  if(seaTac.totalCookiesSalePerHour.length === 0){
    this.calculateTotalCookieSalePerHour();
  }

  var OuterLiEl = document.createElement('li');
  var h2LiEl = document.createElement('h2');
  h2LiEl.textContent = seaTac.location;
  OuterLiEl.appendChild(h2LiEl);

  var ulEl = document.createElement('ul');

  for (var j = 0; j < seaTac.totalCookiesSalePerHour.length; j++){
    var hourLiEl = document.createElement('li');
    var hour = j + 6 + '00 ';
    hour = hour.padStart(5, '0');
    hourLiEl.textContent = hour + ': '+seaTac.totalCookiesSalePerHour[j] + ' cookies';
    ulEl.appendChild(hourLiEl);
  }

  var completeLiEl = document.createElement('li');
  completeLiEl.textContent = 'total: ' + seaTac.total;
  ulEl.appendChild(completeLiEl);

  OuterLiEl.appendChild(ulEl);

  storeUlEl.appendChild(OuterLiEl);

};

//Location3: seattle center 
var seattleCenter = {
  location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  totalCookiesSalePerHour: [],

};

seattleCenter.calculateCustomerPerHour = function () {
  var randomCustomerPerHour = Math.floor(Math.random() * (seattleCenter.maxCustomer - seattleCenter.minCustomer)) + seattleCenter.minCustomer;
  return randomCustomerPerHour;

};

seattleCenter.calculateCookieSalePerHour = function(){
  var customerInHour = seattleCenter.calculateCustomerPerHour();
  var cookieSaleEachHour = seattleCenter.avgCookieSale * customerInHour;
  return Math.floor(cookieSaleEachHour);

};

seattleCenter.calculateTotalCookieSalePerHour = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalCookiesPerHour = seattleCenter.calculateCookieSalePerHour();
    seattleCenter.totalCookiesSalePerHour.push(totalCookiesPerHour);
    total += totalCookiesPerHour;
  }
  seattleCenter.total = total;
  console.log(seattleCenter.totalCookiesSalePerHour);
};

//Putting List on the page
seattleCenter.makeList = function(){
  if(seattleCenter.totalCookiesSalePerHour.length === 0){
    this.calculateTotalCookieSalePerHour();
  }

  var OuterLiEl = document.createElement('li');
  var h2LiEl = document.createElement('h2');
  h2LiEl.textContent = seattleCenter.location;
  OuterLiEl.appendChild(h2LiEl);

  var ulEl = document.createElement('ul');

  for (var j = 0; j < seattleCenter.totalCookiesSalePerHour.length; j++){
    var hourLiEl = document.createElement('li');
    var hour = j + 6 + '00 ';
    hour = hour.padStart(5, '0');
    hourLiEl.textContent = hour + ': '+seattleCenter.totalCookiesSalePerHour[j] + ' cookies';
    ulEl.appendChild(hourLiEl);
  }

  var completeLiEl = document.createElement('li');
  completeLiEl.textContent = 'total: ' + seattleCenter.total;
  ulEl.appendChild(completeLiEl);

  OuterLiEl.appendChild(ulEl);

  storeUlEl.appendChild(OuterLiEl);

};

//Location 4 Capitaol Hill
// eslint-disable-next-line no-redeclare
var capitolHill = {
  location: 'Capitaol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  totalCookiesSalePerHour: [],

};

capitolHill.calculateCustomerPerHour = function () {
  var randomCustomerPerHour = Math.floor(Math.random() * (capitolHill.maxCustomer - capitolHill.minCustomer)) + capitolHill.minCustomer;
  return randomCustomerPerHour;

};

capitolHill.calculateCookieSalePerHour = function(){
  var customerInHour = capitolHill.calculateCustomerPerHour();
  var cookieSaleEachHour = capitolHill.avgCookieSale * customerInHour;
  return Math.floor(cookieSaleEachHour);

};

capitolHill.calculateTotalCookieSalePerHour = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalCookiesPerHour = capitolHill.calculateCookieSalePerHour();
    capitolHill.totalCookiesSalePerHour.push(totalCookiesPerHour);
    total += totalCookiesPerHour;
  }
  capitolHill.total = total;
  console.log(capitolHill.totalCookiesSalePerHour);
};

//Putting List on the page
capitolHill.makeList = function(){
  if(capitolHill.totalCookiesSalePerHour.length === 0){
    this.calculateTotalCookieSalePerHour();
  }

  var OuterLiEl = document.createElement('li');
  var h2LiEl = document.createElement('h2');
  h2LiEl.textContent = capitolHill.location;
  OuterLiEl.appendChild(h2LiEl);

  var ulEl = document.createElement('ul');

  for (var j = 0; j < capitolHill.totalCookiesSalePerHour.length; j++){
    var hourLiEl = document.createElement('li');
    var hour = j + 6 + '00 ';
    hour = hour.padStart(5, '0');
    hourLiEl.textContent = hour + ': '+capitolHill.totalCookiesSalePerHour[j] + ' cookies';
    ulEl.appendChild(hourLiEl);
  }

  var completeLiEl = document.createElement('li');
  completeLiEl.textContent = 'total: ' + capitolHill.total;
  ulEl.appendChild(completeLiEl);

  OuterLiEl.appendChild(ulEl);

  storeUlEl.appendChild(OuterLiEl);

};

// //Location 5 Alki
var alki = {
  location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  totalCookiesSalePerHour: [],

};

alki.calculateCustomerPerHour = function () {
  var randomCustomerPerHour = Math.floor(Math.random() * (alki.maxCustomer - alki.minCustomer)) + alki.minCustomer;
  return randomCustomerPerHour;

};

alki.calculateCookieSalePerHour = function(){
  var customerInHour = alki.calculateCustomerPerHour();
  var cookieSaleEachHour = alki.avgCookieSale * customerInHour;
  return Math.floor(cookieSaleEachHour);

};

alki.calculateTotalCookieSalePerHour = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalCookiesPerHour = alki.calculateCookieSalePerHour();
    alki.totalCookiesSalePerHour.push(totalCookiesPerHour);
    total += totalCookiesPerHour;
  }
  alki.total = total;
  console.log(alki.totalCookiesSalePerHour);
};

//Putting List on the page
alki.makeList = function(){
  if(alki.totalCookiesSalePerHour.length === 0){
    this.calculateTotalCookieSalePerHour();
  }

  var OuterLiEl = document.createElement('li');
  var h2LiEl = document.createElement('h2');
  h2LiEl.textContent = alki.location;
  OuterLiEl.appendChild(h2LiEl);

  var ulEl = document.createElement('ul');

  for (var j = 0; j < alki.totalCookiesSalePerHour.length; j++){
    var hourLiEl = document.createElement('li');
    var hour = j + 6 + '00 ';
    hour = hour.padStart(5, '0');
    hourLiEl.textContent = hour + ': '+alki.totalCookiesSalePerHour[j] + ' cookies';
    ulEl.appendChild(hourLiEl);
  }

  var completeLiEl = document.createElement('li');
  completeLiEl.textContent = 'total: ' + alki.total;
  ulEl.appendChild(completeLiEl);

  OuterLiEl.appendChild(ulEl);

  storeUlEl.appendChild(OuterLiEl);

};

//This page contain: 
function makePage(){
  pikeMarket.makeList();
  seaTac.makeList();
  seattleCenter.makeList();
  capitolHill.makeList();
  alki.makeList();
}
makePage();

