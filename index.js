// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.filter(function(driver){
    return drivers.indexOf(driver) === 0 || drivers.indexOf(driver) === 1;
  });
}

const returnLastTwoDrivers = function(drivers){
  return drivers.filter(function(driver) {
    return drivers.indexOf(driver) === drivers.length -1 || drivers.indexOf(driver) === drivers.length -2;
  });
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  };
};

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

function selectDifferentDrivers(drivers, eitherFunction) {
  return eitherFunction(drivers);
};