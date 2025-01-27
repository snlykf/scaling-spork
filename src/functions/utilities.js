// Function to check for all unvalid states of a variable
export function isNullUndefOrEmpty(value) {
    if (value === 'undefined' || typeof value === 'undefined' || value === null || value === '' || value === 'null') {
        return true;
    }
    else {
        return false;
    }
}

// Only check for null or undefined values
export function isNullOrUndef(value) {
    if (value === 'undefined' || typeof value === 'undefined' || value === null || value === 'null') {
        return true;
    }
    else {
        return false;
    }
}

export function isTruthyString(value) {
    return ['true', '1'].includes(value?.toString().toLowerCase());
}

export function getValidNumber(number) {
    if(!isNullOrUndef(number)) {
        number = number.toString().replace(',', '.');
    }
    const floatNumber = parseFloat(number);
    if (!isNaN(floatNumber)) {
        return floatNumber;
    }
    return 0;
}