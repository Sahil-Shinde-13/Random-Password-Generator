// DOM elements
const btn = document.getElementById('btn');
const passBox = document.getElementById('password');
const totalChar = document.getElementById("total-length");
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numberInput = document.getElementById('numberss');
const symbolInput = document.getElementById('symbolss');

// Variables
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*_";

// Random Pass Generator function
const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePass = () => {
    const length = +totalChar.value;
    let password = "";
    let availableChars = "";

    if (upperInput.checked) {
        availableChars += upperSet;
    }
    if (lowerInput.checked) {
        availableChars += lowerSet;
    }
    if (numberInput.checked) {
        availableChars += numberSet;
    }
    if (symbolInput.checked) {
        availableChars += symbolSet;
    }
    if (availableChars === "") {
        passBox.value = "Select at least one character type";
        return;
    }

    for (let i = 0; i < length; i++) {
        password += getRandomData(availableChars);
    }

    passBox.value = password;
}


    btn.addEventListener('click', generatePass);

//COPY function
function copyPass(){
    passBox.select();
    document.execCommand('copy');
}