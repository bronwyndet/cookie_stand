'use strict';

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationNames = ['First and Pike', 'Seatac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];
//
//CONSTRUCTOR FUNCTION
//
function StoreSalesProjections (storeName, minCustHour, maxCustHour, avgCookiesCustomer) {
  //PROPERTIES
  this.storeName = storeName;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCustomer = avgCookiesCustomer;
  this.randomCustHour = [];
  this.projCookiesPerHour = [];
  this.totalDailyCookies = 0;
  this.totalHourlyCookies = 0;

//METHOD to calculate random customers per hour
  this.calcRandomCustHour = function() {
    for (var i = 0; i < openHours.length; i++) {
      this.randomCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
    }
  };

//METHOD to calculate projected number of cookies each hour AND total daily cookes
  this.calcCookiesPerHour = function() {
    for (var i = 0; i < this.randomCustHour.length; i++) {
      var singleHourCookies = Math.ceil(this.randomCustHour[i] * this.avgCookiesCustomer);
      this.projCookiesPerHour.push(singleHourCookies);
      this.totalDailyCookies += singleHourCookies;
    }
  };

// METHOD TO CREATE SALES TABLE DATA CELLS
  this.createSalesDataCells = function () {
    var salesDataTable = document.getElementById('salesDataTable');

    var salesDataRow = document.createElement('tr');
    var salesDataNameCell = document.createElement('td');
    salesDataNameCell.textContent = this.storeName;
    salesDataRow.appendChild(salesDataNameCell);

    for (var i = 0; i < this.projCookiesPerHour.length; i++) {
      var salesDataCell = document.createElement('td');
      salesDataCell.textContent = this.projCookiesPerHour[i];
      salesDataRow.appendChild(salesDataCell);
    }

    var salesDataTotalCell = document.createElement('td');
    salesDataTotalCell.textContent = this.totalDailyCookies;
    salesDataRow.appendChild(salesDataTotalCell);

    salesDataTable.appendChild(salesDataRow);
  };

// // METHOD TO RENDER CUSTOMERS PER HOUR & COOKIES PER HOUR LISTS TO HTML
//   this.renderLists = function() {
//     var ulOfCookiesAndCustomers = document.getElementById('listCookiesAndCustPerHour');
//     for (var i = 0; i < openHours.length; i++) {
//       var liElCookiesAndCustomers = document.createElement('li');
//       liElCookiesAndCustomers.textContent = openHours[i] + ': ' + this.projCookiesPerHour[i] + ' cookies';
//       ulOfCookiesAndCustomers.appendChild(liElCookiesAndCustomers);
//     }
//     var liElTotalDailyCookies = document.createElement('li');
//     liElTotalDailyCookies.textContent = 'Total: ' + this.totalDailyCookies;
//     ulOfCookiesAndCustomers.appendChild(liElTotalDailyCookies);
//   };

  this.calcRandomCustHour();
  this.calcCookiesPerHour();
  // this.renderLists();
};


var firstPike = new StoreSalesProjections(locationNames[0], 23, 65, 6.3); //eslint-disable-line
var seatacAirport = new StoreSalesProjections(locationNames[1], 3, 24, 1.2); //eslint-disable-line
var seattleCenter = new StoreSalesProjections(locationNames[2], 11, 38, 3.7); //eslint-disable-line
var capitalHill = new StoreSalesProjections(locationNames[3], 20, 38, 2.3); //eslint-disable-line
var alki = new StoreSalesProjections(locationNames[4], 2, 16, 4.6); //eslint-disable-line




//STAND ALONE FUNCTION FOR HEADER ROW
function makeHeaderRow () {
  var salesDataTable = document.getElementById('salesDataTable');

  var salesDataRow = document.createElement('tr');
  var salesDataEmptyHeader = document.createElement('th');
  salesDataEmptyHeader.textContent = '';
  salesDataRow.appendChild(salesDataEmptyHeader);

  for (var i = 0; i < openHours.length; i++) {
    var salesDataHeader = document.createElement('th');
    salesDataHeader.textContent = openHours[i];
    salesDataRow.appendChild(salesDataHeader);
  }
  salesDataEmptyHeader = document.createElement('th');
  salesDataEmptyHeader.textContent = 'Daily Total';
  salesDataRow.appendChild(salesDataEmptyHeader);

  salesDataTable.appendChild(salesDataRow);
};

// STAND-ALONE FUNCTION FOR FOOTER
function makeFooterRow () {
  var salesDataTable = document.getElementById('salesDataTable');

  var salesFooterRow = document.createElement('tr');
  var salesDataEmptyFooter = document.createElement('td');
  salesDataEmptyFooter.textContent = '';
  salesFooterRow.appendChild(salesDataEmptyFooter);

  for (var i = 0; i < openHours.length; i++) {
    var salesDataFooter = document.createElement('td');
    salesDataFooter.textContent = 'total';
    salesFooterRow.appendChild(salesDataFooter);
  }
  var salesDataFooterTotal = document.createElement('td');
  salesDataFooterTotal.textContent = 'TOTAL';
  salesFooterRow.appendChild(salesDataFooterTotal);
  salesDataTable.appendChild(salesFooterRow);
};

makeHeaderRow();
firstPike.createSalesDataCells();
seatacAirport.createSalesDataCells();
seattleCenter.createSalesDataCells();
capitalHill.createSalesDataCells();
alki.createSalesDataCells();
makeFooterRow();


var formSubmit = document.getElementById('salesProjectionForm');
var formStoreName = document.getElementById('storeLocation');
var formMinCustHour = document.getElementById('minCustHour');
var formMaxCustHour = document.getElementById('maxCustHour');
var formAvgCookies = document.getElementById('avgCookiesCustomer');


function createNewStore(event) {

  event.preventDefault();

  var cookieStore = event.target.storeLocation.value;
  var minCust = event.target.minCustHour.value;
  var maxCust = event.target.maxCustHour.value;
  var avgCookies = event.target.avgCookiesCustomer.value;

  if (!cookieStore || !minCust || !maxCust || !avgCookies) {
    return alert('Must enter data in all fields');
  }

  var newStore = new StoreSalesProjections(cookieStore, minCust, maxCust, avgCookies); //eslint-disable-line
  //
  console.log(newStore);
  newStore.createSalesDataCells();

};


formSubmit.addEventListener('submit', createNewStore);
