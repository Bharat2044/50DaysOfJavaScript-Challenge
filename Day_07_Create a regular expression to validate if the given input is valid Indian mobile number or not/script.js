// Regular expression check has to have an optional 
// +91 or 0 in the beginning, then an optional space and 10 digits
// validateMobile('+919876543210') returns true
// validateMobile('+91 9876543210') returns true
// validateMobile('09876543210') returns true
// validateMobile('9876543210') returns true
// validateMobile('99876543210') returns false


const number = '+919876543210';

function validateMobile(number) {

    const regexMobile = /^(\+91|0)?\s?\d{10}$/;
    return regexMobile.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)