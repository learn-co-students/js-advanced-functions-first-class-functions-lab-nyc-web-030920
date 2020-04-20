// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
   return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(drivers.length-2, drivers.length);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
};

