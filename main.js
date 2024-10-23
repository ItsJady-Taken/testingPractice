function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {    
    return string.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function caeserCipher(string, shilf=3) {
    return string.split('').map(char => {
        if (char === ' ') {
            return char
        }
        let code = char.charCodeAt(0)

        if (code >= 65 && code <= 90) {
            code = (code - 65 + shilf) % 26 + 65
            return String.fromCharCode(code)
        } else if (code >= 97 && code <= 122) {
            code = (code - 97 + shilf) % 26 + 97
            return String.fromCharCode(code)
        } else {
            return char
        }
    }).join('')
}

function analyzeArray(arr) {
    const obj = {
        average: arr.reduce((a, b) => a + b) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
    return "average: " + obj.average + ", min: " + obj.min + ", max: " + obj.max +  ", length: " + obj.length; 
}

export { capitalize, reverseString, calculator, caeserCipher, analyzeArray };