// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all above numbers are divisible by 5
let ifAllIsDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`Are all the numbers divisible by 5? ${ifAllIsDivisibleBy5}`);

let ifFirstNumLargerThanLastNum = n1 > n4;
console.log(`Is the first number larger than the last number? ${ifFirstNumLargerThanLastNum}`);

let arithmeticChain = (n2 - n1)*n3 % n4;
console.log(`Arithmetric chain result: ${arithmeticChain}`)

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(`The four numbers are valid accroding to the criteria: ${isValid}`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//   Part 2: Practical Math
const tripDistance = 1500;
const fuelBudget = 175;
const fuelCostPerGallon = 3;

let speed;
let efficiency;

// UNCOMMNENT the code sections below to try the calulation at different speed

// if travel at 55 miles per hour
// speed = 55;
// efficiency = 30;

// let gallonsNeeded = tripDistance / efficiency;
// let totalFuelCost = gallonsNeeded * fuelCostPerGallon;
// let travelTime = tripDistance/speed;

// console.log(`If travel at ${speed}, 
// you will need ${gallonsNeeded} gallons of fuel, 
// your cost will be ${totalFuelCost},
// you will have enough to cover fuel expense: ${totalFuelCost <= fuelBudget},
// the trip will take ${travelTime} hours.`)


// if travel at 60 miles per hour
// THIS MAKES THE MOST SENSE BECAUSE IT IS WITHIN FUEL BUDGET AND FASTER THAN THE PREVIOUS OPTION. 

speed = 60;
efficiency = 28;

let gallonsNeeded = tripDistance / efficiency;
let totalFuelCost = gallonsNeeded * fuelCostPerGallon;
let travelTime = tripDistance/speed;

console.log(`If travel at ${speed}, 
you will need ${gallonsNeeded} gallons of fuel, 
your cost will be ${totalFuelCost},
you will have enough to cover fuel expense: ${totalFuelCost <= fuelBudget},
the trip will take ${travelTime} hours.`)


//if travel at 75 miles per hour
// speed = 75;
// efficiency = 23;

// let gallonsNeeded = tripDistance / efficiency;
// let totalFuelCost = gallonsNeeded * fuelCostPerGallon;
// let travelTime = tripDistance/speed;

// console.log(`If travel at ${speed}, 
// you will need ${gallonsNeeded} gallons of fuel, 
// your cost will be ${totalFuelCost},
// you will have enough to cover fuel expense: ${totalFuelCost <= fuelBudget},
// the trip will take ${travelTime} hours.`)