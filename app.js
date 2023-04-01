"use strict";
var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
const numResult = [];
const textResult = [];
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', addition);
function addition() {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResult.push(result);
    const stringResult = add(num1, num2);
    textResult.push(stringResult);
    // console.log(result);
    // console.log(sttringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResult, textResult);
}
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 1000);
});
myPromise.then(result => {
    console.log(result.split('w'));
});
