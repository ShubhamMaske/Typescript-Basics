
var num1Element = document.getElementById('num1') as HTMLInputElement;
var num2Element = document.getElementById('num2') as HTMLInputElement;
var buttonElement = document.querySelector('button')!;

type numOrString = number | string;                     // alias using type operator
type result = { val: number; timestamp: Date}

interface resultObject {
    val: number;
    timestamp: Date;
}

function add(num1: numOrString, num2:numOrString){    //union type = | 
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2
    }
    return +num1 + +num2;
}

const numResult: number[] = [];
const textResult: string[] = [];

function printResult(resultObj: result){
    console.log(resultObj.val);
}

buttonElement.addEventListener('click', addition)

function addition(){
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResult.push(result as number);

    const stringResult = add(num1 , num2)
    textResult.push(stringResult as string);
    // console.log(result);
    // console.log(sttringResult);

    printResult({val: result as number, timestamp: new Date()});
    console.log(numResult, textResult)
}

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(()=>{
        resolve("It worked!");
    },1000)
})

myPromise.then(result => {
    console.log(result.split('w'));
})