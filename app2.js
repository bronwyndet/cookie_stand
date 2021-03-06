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
  console.log('random customers per hour: ');
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

// METHOD TO RENDER CUSTOMERS PER HOUR & COOKIES PER HOUR LISTS TO HTML
firstPike.renderLists = function() {
  //get a grip on the <ul> in the html  step1 (create var and use getElementById)
  var ulOfCookiesAndCustomers = document.getElementById('listCookiesAndCustPerHour');
  //iterating through the array requires a for loop step2 (for loop of the array you're printing)
  for (var i = 0; i < openHours.length; i++) {
    //create a list element step3
    var liElCookiesAndCustomers = document.createElement('li');
    //give the list element text content, step4 put the content into the list element
    liElCookiesAndCustomers.textContent = openHours[i] + ': ' + this.projCookiesPerHour[i] + ' cookies';
    //append the list element to the ol step5 att (list variable, ach the list elements to the <ol> that you grabbed in the first step (list variable,
    ulOfCookiesAndCustomers.appendChild(liElCookiesAndCustomers);
  }
  var liElTotalDailyCookies = document.createElement('li');
  liElTotalDailyCookies.textContent = 'Total: ' + this.totalDailyCookies;
  ulOfCookiesAndCustomers.appendChild(liElTotalDailyCookies);
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
firstPike.renderLists();

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
  totalDailyCookies: 0,
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
    this.totalDailyCookies += singleHourCookies;
    // CODE BELOWE\ WORKED FOR DAILY TOTAL COOKIES BUT WAS NOT THE SAME SOLUTION AS REST OF CLASS, SAVING HERE
    // this.totalDailyCookies = Math.ceil(this.totalDailyCookies) + Math.ceil(singleHourCookies);
  }
  console.log(this.projCookiesPerHour);
  console.log(this.totalDailyCookies);
};

// //METHOD TO RENDER COOKIES PER HOUR TO HTML
// alki.render = function() {
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
