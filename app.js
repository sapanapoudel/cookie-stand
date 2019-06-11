'use strict';


var hourList = ['6am', '7am', '8am', '9am', '10', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Creating Object literal for each store location. There are 5 locations
//Location1: 1st and Pike Market
var pikeMarket = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  customerPerHour: [],
  cookiesEachHour: []
};
//Location2: Seatec Airport
var seaTecAirport = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  customerPerHour: [],
  cookiesEachHour: []
};
//Location3: Seattle Center
var seattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  customerPerHour: [],
  cookiesEachHour: []
};
//Location4: Capitol Hill
var capitolHill = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  customerPerHour: [],
  cookiesEachHour: []
};
//Location5: Alki
var alki = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  customerPerHour: [],
  cookiesEachHour: []
};

var storeList = [];
storeList.push(pikeMarket);
storeList.push(seaTecAirport);
storeList.push(seattleCenter);
storeList.push(capitolHill);
storeList.push(alki);


//Creating method called randomCustomerPerHour that generate random number of customer 
function randomCustomerPerHour() {
  for (var i = 0; i < hourList.length; i++) {
    pikeMarket.customerPerHour.push(parseInt(Math.floor(Math.random() * (pikeMarket.maxCustomer - pikeMarket.minCustomer)) + pikeMarket.minCustomer));

  }
}
randomCustomerPerHour();
console.log(pikeMarket.randomCustomerPerHour);

function calculateCookieEachHour() {
  for (var i = 0; i < hourList.length; i++) {
    pikeMarket.cookiesEachHour[i] = Math.ceil(pikeMarket.randomCustomerPerHour[i] * pikeMarket.avgCookieSale);


    // return console.log('calculateCookieEachHour: ' + pikeMarket.randomCustomerPerHour()
  }
}
calculateCookieEachHour();
console.log(pikeMarket.calculateCookieEachHour());

// //DOM Model
for (var index = 0; index < storeList.length; index++) {
  var para = document.createElement('h1');
  var node = document.createTextNode(storeList[index].location);
  para.appendChild(node);
  var element = document.getElementById('storeInfo');
  element.appendChild(para);
  // eslint-disable-next-line no-undef
  for (var x = o; x < hourList.length; x++) {
    var olList = document.createElement('li');
    var data = document.createTextNode(hourList[x] + storeList[index].sales[x]);
    olList.appentChild(data);
    document.getElementById('list').appendChild(olList);
  }
}


// var storeLocation = document.getElementById('store-location');
//   var storeH2 = document.createElement('h2');
//   storeH2.textContent = '1st and Pike';
//   storelocation.appendChild(storeH2);
