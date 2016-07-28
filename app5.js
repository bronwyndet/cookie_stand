'use strict';

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationNames = [];
//
//CONSTRUCTOR FUNCTION
//
function CreateNewStore (storeName, minCustHour, maxCustHour, avgCookiesCustomer) {
  //PROPERTIES
  this.storeName = storeName;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCustomer = avgCookiesCustomer;
  this.randomCustHour = [];
  this.projCookiesPerHour = [];
  this.totalDailyCookies = 0;
  // this.totalHourlyCookies = 0;  need for totals
  locationNames.push(this);

  this.calcRandomCustHour();
  this.calcCookiesPerHour();
};

//METHOD to calculate random customers per hour
CreateNewStore.prototype.calcRandomCustHour = function() {
  for (var i = 0; i < openHours.length; i++) {
    this.randomCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
  }
};

//METHOD to calculate projected number of cookies each hour AND total daily cookes
CreateNewStore.prototype.calcCookiesPerHour = function() {
  for (var i = 0; i < this.randomCustHour.length; i++) {
    var singleHourCookies = Math.ceil(this.randomCustHour[i] * this.avgCookiesCustomer);
    this.projCookiesPerHour.push(singleHourCookies);
    this.totalDailyCookies += singleHourCookies;
  }
};

// METHOD TO CREATE SALES TABLE DATA CELLS
CreateNewStore.prototype.createSalesDataCells = function () {
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

function renderSalesDataCells () {
  for (var i = 0; i < locationNames.length; i++) {
    locationNames[i].createSalesDataCells();
  }
};

var formSubmit = document.getElementById('salesProjectionForm');

function AddNewStore(event) {

  event.preventDefault();

  var cookieStore = event.target.storeLocation.value;
  var minCust = parseInt(event.target.minCustHour.value);
  var maxCust = parseInt(event.target.maxCustHour.value);
  var avgCookies = parseFloat(event.target.avgCookiesCustomer.value);

  if (!cookieStore || !minCust || !maxCust || !avgCookies) {
    return alert('Must enter data in all fields');
  };

  new CreateNewStore(cookieStore, minCust, maxCust, avgCookies);

  function renderAddedRows () {
    for (var i = 0; i < locationNames.length; i++) {
      locationNames[i].createSalesDataCells();
    }
  };

  salesDataTable.textContent = null;
  makeHeaderRow();
  renderAddedRows();
  makeFooterRow();

};

new CreateNewStore('First and Pike', 23, 65, 6.3); //eslint-disable-line
new CreateNewStore('Seatac Airport', 3, 24, 1.2);
new CreateNewStore('Seattle Center', 11, 38, 3.7);
new CreateNewStore('Capital Hill', 20, 38, 2.3);
new CreateNewStore('Alki', 2, 16, 4.6);

formSubmit.addEventListener('submit', AddNewStore);

makeHeaderRow();
renderSalesDataCells();
makeFooterRow();
