function returnFirstTwoDrivers(driverArray){
    return driverArray.slice(0,2)
}
function returnLastTwoDrivers(driverArray){
    return driverArray.slice(driverArray.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (mutiplyValue){
    return function(value){
       return mutiplyValue * value;
    };
};

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

const selectDifferentDrivers= function(drivers, whichDriver) {
    return whichDriver(drivers);
}
