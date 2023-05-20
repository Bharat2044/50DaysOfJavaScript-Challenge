// needsLicense(kind) should work as asked
// chooseVehicle(option1, option2) should work as asked
// calculateResellPrice(originalPrice, age) should work as asked

// `needsLicense('car'); // => true
// needsLicense('bike'); // => false`


// chooseVehicle('Wuling Hongguang', 'Toyota Corolla'); // => 'Toyota Corolla is clearly the better choice.'
// chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'); // => 'Volkswagen Beetle is clearly the better choice.'`


// calculateResellPrice(1000, 1); // => 800
// calculateResellPrice(1000, 5); // => 700
// calculateResellPrice(1000, 15); // => 500`


const VEHICLES_WITH_LICENSES = ["car", "truck"];

function needsLicense(kind) {
    return VEHICLES_WITH_LICENSES.includes(kind);
}
function chooseVehicle(option1, option2) {
    return (option1 > option2 ? option2 : option1) + " is clearly the better choice.";
}

function calculateResellPrice(originalPrice, age) {
    const discount = age < 3 ? 0.2 : age > 10 ? 0.5 : 0.3;
    return originalPrice * (1 - discount);
}


console.log(needsLicense('car'));
console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
console.log(calculateResellPrice(1000, 1));