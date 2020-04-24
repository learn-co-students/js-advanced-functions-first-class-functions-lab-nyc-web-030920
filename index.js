// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    let count = 0;
    return drivers.filter(driver => {
        return (count++ < 2 ? true: false);
    });
}

const returnLastTwoDrivers = function(drivers){
    let count = drivers.length-2;
    return drivers.filter(driver => {
        return (count-- > 0 ? false: true);
    });
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(factor){
    return function(fare){
        return fare * factor;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}