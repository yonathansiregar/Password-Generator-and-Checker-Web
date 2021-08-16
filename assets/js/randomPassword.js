const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generate.addEventListener(
    'click', () => {
        const length = +lengthEl.value;
        const hasLower = lowercaseEl.checked;
        const hasUpper = uppercaseEl.checked;
        const hasNumber = numbersEl.checked;
        const hasSymbol = symbolsEl.checked;

        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    }
);

function generatePassword(
    lower,
    upper,
    number,
    symbol,
    length
) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [
        {
            lower
        },

        {
            upper
        },

        {
            number
        },

        {
            symbol
        }
    ].filter(
        item => Object.values(item)[0]
    );

    // Doesn't have a selected type
    if (typesCount === 0) {
        return '';
    }

    // create a loop
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(
            type => {
                const funcName = Object.keys(type)[0];
                generatedPassword += randomFunc[funcName]();
            }
        );
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomLower() {
    const random = window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
    return String.fromCharCode(Math.floor(random * 26) + 97);

}

function getRandomUpper() {
    const random = window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
    return String.fromCharCode(Math.floor(random * 26) + 65);
}

function getRandomNumber() {
    const random = window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
    return String.fromCharCode(Math.floor(random * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    const random = window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
    return symbols[Math.floor(random * symbols.length)];
}