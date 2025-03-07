// Write your solution in this file!
const globalvar = {};

var customerName = 'bob';
globalvar.customerName = customerName;

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = 'not bob';
}

const leastFavoriteCustomer = 'initialValue';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'newValue'; 
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}