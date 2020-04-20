// Code your solution in this file!

const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(arr.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare) {
    return function(value) {
        return fare * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(drivers, selection) {
    return selection(drivers);
}