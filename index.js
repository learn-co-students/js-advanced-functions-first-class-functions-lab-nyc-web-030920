// this accesses the drivers array and returns the first two drivers using .slice
const returnFirstTwoDrivers = function(drivers) { return drivers.slice(0, 2);};

// this accesses the drivers array and returns the last two drivers using .slice, (-2) is referring to starting at the end
const returnLastTwoDrivers = function(drivers) { return drivers.slice(-2);};

// this creates a variable that points to an array of functions in which you're able to access either or
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

/* this variable is assigned to a function that passes in a variable called "multiplyNumber" which has a function that 
passes in a value, and in that function the value is being multiplied by the number that is passed in and returns it*/ 
const createFareMultiplier = function(multiplyNumber) { return function(value) {return multiplyNumber * value;}};

// this variable is calling upon the function and passing in the value of 2 
const fareDoubler = createFareMultiplier(2);

// this variable is calling upon the function and passing in the value of 3
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectDriver) { return selectDriver(drivers);};

