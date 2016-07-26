'use strict';

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var storeObjects = ['firstPike', 'seatacAirport', 'seattleCenter', 'capitalHill', 'alkiBeach'];

var firstPike = {
  //PROPERTIES
  storeName: 'First and Pike',
  minCustHour: 23,
  maxCustHour: 65,
  avgCookiesCustomer: 6.3,
  randomCustHour: [],
  projCookiesPerHour: [],
  totalDailyCookies: []
};

//METHOD to calculate random customers per hour
firstPike.calcRandomCustHour = function() {
  for (var i = 0; i < openHours.length; i++) {
    this.randomCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
  }
  console.log(this.randomCustHour);
};

// //METHOD to calculate projected number of cookies each hour
// firstPike.calcCookiesPerHour = function() {
//   for (var i = 0; i < this.randomCustHour.length; i++) {
//     this.projCookiesPerHour.push(Math.ceil(this.randomCustHour[i] * this.avgCookiesCustomer));
//   }
//   console.log(this.projCookiesPerHour);
// };

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


firstPike.render = function() {
  var custHourList = document.createElement('ul');

  for (var i = 0; i < this.randomCustHour.length; i++) {
    var listElCustHour = document.createElement('li');
    listElCustHour.textContent = this.randomCustHour[i];
    custHourList.appendChild(listElCustHour);
  }

    // this.calcCookiesPerHour();

    //code to e the list starts here
};

// //METHOD to calculate the total cookies per day
// firstPike.calcTotalCookies = function() {
//   for (var i = 0; i < this.projCookiesPerHour.length; i++) {
//     this.totalDailyCookies.push(parseInt(this.projCookiesPerHour[i]) += parseInt(this.totalCookiesPerStore));
//   }
//   console.log(this.totalDailyCookies);
// };

firstPike.calcRandomCustHour();
firstPike.calcCookiesPerHour();
firstPike.render();
// firstPike.calcTotalCookies();
// firstPike();
