// Code your solution in this file!

// Assuming hqLocation is the location of Scuber's headquarters
const hqLocation = 42;

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  // Using the correct conversion factor from blocks to feet (1 block = 264 feet)
  const feet = blocks * 264;
  return feet;
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  // Using the correct conversion factor from blocks to feet (1 block = 264 feet)
  const feetTravelled = blocksTravelled * 264;
  return feetTravelled;
}

function calculatesFarePrice(start, destination) {
  const feetTravelled = distanceTravelledInFeet(start, destination);

  // Free sample for rides up to 400 feet
  if (feetTravelled <= 400) {
    return 0;
  }

  // Charge 2 cents per foot for rides between 400 and 2000 feet
  else if (feetTravelled <= 2000) {
    return (feetTravelled - 400) * 0.02;
  }

  // Charge a flat fee of 25 dollars for rides over 2000 feet
  else if (feetTravelled <= 2500) {
    return 25;
  }

  // Do not allow rides over 2500 feet
  else {
    return 'cannot travel that far';
  }
}

// Example usage
const startLocation = 34; // Replace with an actual value
const endLocation = 50; // Replace with an actual value
const fare = calculatesFarePrice(startLocation, endLocation);
console.log(fare);

// Export the functions if needed
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
  // other functions...
};
