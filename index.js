// Code your solution in this file!
function returnFirstTwoDrivers(array){
    let newArray = []
    newArray.push(array[0], array[1])
    return newArray
}
function returnLastTwoDrivers(array){
    let newArray = []
    newArray.push(array[array.length-2], array[array.length-1])
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}