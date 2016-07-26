'use strict';

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var storeObjects = ['firstPike', 'seatacAirport', 'seattleCenter', 'capitalHill', 'alki'];

//
//FIRST LOCATION - FIRST AND PIKE
//
var firstPike = {
  //PROPERTIES
  storeName: 'First and Pike',
  minCustHour: 23,
  maxCustHour: 65,
  avgCookiesCustomer: 6.3,
  randomCustHour: [],
  projCookiesPerHour: [],
  totalDailyCookies: 0,
  hoursAndCookiesList: [],
};

//METHOD to calculate random customers per hour
firstPike.calcRandomCustHour = function() {
  for (var i = 0; i < openHours.length; i++) {
    this.randomCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
  }
  console.log(this.randomCustHour);
};

//METHOD to calculate projected number of cookies each hour AND total daily cookes
firstPike.calcCookiesPerHour = function() {
  for (var i = 0; i < this.randomCustHour.length; i++) {
    var singleHourCookies = Math.ceil(this.randomCustHour[i] * this.avgCookiesCustomer);
    this.projCookiesPerHour.push(singleHourCookies);
    this.totalDailyCookies += singleHourCookies;
  }
  console.log(this.projCookiesPerHour);
  console.log(this.totalDailyCookies);
};

// //METHOD TO RENDER COOKIES PER HOUR TO HTML
// firstPike.render = function() {
//   firstPike.projCookiesPerHour(); {
//   for (var i = 0; i < openHours.length; i++) {
//   his.hoursAndCookiesList.push(openHours[i] + this.projCookiesPerHour[i] + ' cookies');
//   }
// }
// }
//
//   var cookiesHourList = document.createElement('ul');
//
//   for (var i = 0; i < this.projCookiesPerHour.length; i++) {
//     var listElCookiesPerHour = document.createElement('li');
//     listElCookiesPerHour.textContent = this.projCookiesPerHour[i];
//     cookiesHourList.appendChild(cookiesHourList);
//   }
//   this.calcCookiesPerHour();
// // code to e the list starts here
// };

firstPike.calcRandomCustHour();
firstPike.calcCookiesPerHour();

//
//SECOND LOCATION - SEATAC AIRPORT
//
var seatacAirport = {
  //PROPERTIES
  storeName: 'Seatac Airport',
  minCustHour: 3,
  maxCustHour: 24,
  avgCookiesCustomer: 1.2,
  randomCustHour: [],
  projCookiesPerHour: [],
  totalDailyCookies: 0,
};

//METHOD to calculate random customers per hour
seatacAirport.calcRandomCustHour = function() {
  for (var i = 0; i < openHours.length; i++) {
    this.randomCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
  }
  console.log(this.randomCustHour);
};

//METHOD to calculate projected number of cookies each hour AND total daily cookes
seatacAirport.calcCookiesPerHour = function() {
  for (var i = 0; i < this.randomCustHour.length; i++) {
    var singleHourCookies = Math.ceil(this.randomCustHour[i] * this.avgCookiesCustomer);
    this.projCookiesPerHour.push(singleHourCookies);
    this.totalDailyCookies += singleHourCookies;
  }
  console.log(this.projCookiesPerHour);
  console.log(this.totalDailyCookies);
};

//METHOD TO RENDER COOKIES PER HOUR TO HTML
seatacAirport.render = function() {
  var cookiesHourList = document.createElement('ul');

  for (var i = 0; i < openHours.length; i++) {
    var listElCookiesPerHour = document.createElement('li');
    listElCookiesPerHour.textContent = this.projCookiesPerHour[i];
    cookiesHourList.appendChild(cookiesHourList);
  }
  this.calcCookiesPerHour();
// code to e the list starts here
};

seatacAirport.calcRandomCustHour();
seatacAirport.calcCookiesPerHour();


//
//THIRD LOCATION - SEATTLE CENTER
//
var seattleCenter = {
  //PROPERTIES
  storeName: 'Seattle Center',
  minCustHour: 11,
  maxCustHour: 38,
  avgCookiesCustomer: 3.7,
  randomCustHour: [],
  projCookiesPerHour: [],
  totalDailyCookies: 0,
};

//METHOD to calculate random customers per hour
seattleCenter.calcRandomCustHour = function() {
  for (var i = 0; i < openHours.length; i++) {
    this.randomCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
  }
  console.log(this.randomCustHour);
};

//METHOD to calculate projected number of cookies each hour AND total daily cookes
seattleCenter.calcCookiesPerHour = function() {
  for (var i = 0; i < this.randomCustHour.length; i++) {
    var singleHourCookies = Math.ceil(this.randomCustHour[i] * this.avgCookiesCustomer);
    this.projCookiesPerHour.push(singleHourCookies);
    this.totalDailyCookies += singleHourCookies;
  }
  console.log(this.projCookiesPerHour);
  console.log(this.totalDailyCookies);
};

//METHOD TO RENDER COOKIES PER HOUR TO HTML
seattleCenter.render = function() {
  var cookiesHourList = document.createElement('ul');

  for (var i = 0; i < this.projCookiesPerHour.length; i++) {
    var listElCookiesPerHour = document.createElement('li');
    listElCookiesPerHour.textContent = this.projCookiesPerHour[i];
    cookiesHourList.appendChild(cookiesHourList);
  }
  this.calcCookiesPerHour();
// code to e the list starts here
};

seattleCenter.calcRandomCustHour();
seattleCenter.calcCookiesPerHour();

//
//FOURTH LOCATION - CAPITAL HILL
//
var capitalHill = {
  //PROPERTIES
  storeName: 'Seattle Center',
  minCustHour: 20,
  maxCustHour: 38,
  avgCookiesCustomer: 2.3,
  randomCustHour: [],
  projCookiesPerHour: [],
  totalDailyCookies: 0,
};

//METHOD to calculate random customers per hour
capitalHill.calcRandomCustHour = function() {
  for (var i = 0; i < openHours.length; i++) {
    this.randomCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
  }
  console.log(this.randomCustHour);
};

//METHOD to calculate projected number of cookies each hour AND total daily cookes
capitalHill.calcCookiesPerHour = function() {
  for (var i = 0; i < this.randomCustHour.length; i++) {
    var singleHourCookies = Math.ceil(this.randomCustHour[i] * this.avgCookiesCustomer);
    this.projCookiesPerHour.push(singleHourCookies);
    this.totalDailyCookies += singleHourCookies;
  }
  console.log(this.projCookiesPerHour);
  console.log(this.totalDailyCookies);
};

//METHOD TO RENDER COOKIES PER HOUR TO HTML
capitalHill.render = function() {
  var cookiesHourList = document.createElement('ul');

  for (var i = 0; i < this.projCookiesPerHour.length; i++) {
    var listElCookiesPerHour = document.createElement('li');
    listElCookiesPerHour.textContent = this.projCookiesPerHour[i];
    cookiesHourList.appendChild(cookiesHourList);
  }
  this.calcCookiesPerHour();
// code to e the list starts here
};

capitalHill.calcRandomCustHour();
capitalHill.calcCookiesPerHour();


//
//FIFTH LOCATION - ALKI
//
var alki = {
  //PROPERTIES
  storeName: 'Seattle Center',
  minCustHour: 2,
  maxCustHour: 16,
  avgCookiesCustomer: 4.6,
  randomCustHour: [],
  projCookiesPerHour: [],
  totalDailyCookies: []
};

//METHOD to calculate random customers per hour
alki.calcRandomCustHour = function() {
  for (var i = 0; i < openHours.length; i++) {
    this.randomCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
  }
  console.log(this.randomCustHour);
};

//METHOD to calculate projected number of cookies each hour AND total daily cookes
alki.calcCookiesPerHour = function() {
  for (var i = 0; i < this.randomCustHour.length; i++) {
    var singleHourCookies = Math.ceil(this.randomCustHour[i] * this.avgCookiesCustomer);
    this.projCookiesPerHour.push(singleHourCookies);
    //trying a different daily total method here
    this.totalDailyCookies = Math.ceil(this.totalDailyCookies) + Math.ceil(singleHourCookies);
  }
  console.log(this.projCookiesPerHour);
  console.log(this.totalDailyCookies);
};

//METHOD TO RENDER COOKIES PER HOUR TO HTML
alki.render = function() {
  var cookiesHourList = document.createElement('ul');

  for (var i = 0; i < this.projCookiesPerHour.length; i++) {
    var listElCookiesPerHour = document.createElement('li');
    listElCookiesPerHour.textContent = this.projCookiesPerHour[i];
    cookiesHourList.appendChild(cookiesHourList);
  }
  this.calcCookiesPerHour();
// code to e the list starts here
};

alki.calcRandomCustHour();
alki.calcCookiesPerHour();




//CODE BELOW ARE ABANDONED FOR NOW, MAY BE USED LATER

// //METHOD to calculate the total cookies per day
// firstPike.calcTotalCookies = function() {
//   for (var i = 0; i < this.projCookiesPerHour.length; i++) {
//     this.totalDailyCookies.push(this.projCookiesPerHour[i]);
//   }
//   console.log(this.totalDailyCookies);
// };


// //METHOD to calculate projected number of cookies each hour
// firstPike.calcCookiesPerHour = function() {
//   for (var i = 0; i < this.randomCustHour.length; i++) {
//     this.projCookiesPerHour.push(Math.ceil(this.randomCustHour[i] * this.avgCookiesCustomer));
//   }
//   console.log(this.projCookiesPerHour);
// };
