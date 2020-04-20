const returnFirstTwoDrivers = (driversArray) => {
    const arrayOfTwo = driversArray.slice(0, 2)
    return arrayOfTwo
};

const returnLastTwoDrivers = (driversArray) => {
    const arrayOfLastTwo = driversArray.slice(-2)
    return arrayOfLastTwo
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => {
    return function(fare){
        return fare * integer
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, fn){
    return fn(arrayOfDrivers)
};
