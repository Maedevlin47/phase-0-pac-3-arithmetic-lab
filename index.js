function add(a, b) {
return a + b;
}

function subtract(a, b){
return a - b;
}

function multiply(a, b) {
return a * b;
}

function divide(a, b) {
return a / b;
}

function increment(a, b) {
    return ++(a + b);
}

function decrement(a, b) {
    return --(a + b);
}

number = 10;

function add5() {
    return (number += 5);
}

function divideBy3(){
    return (number /=3);
}

divideBy3();

add5();

number = 10;

add5();

divideBy3();

function makeInt(string) {
    const parsed = parseInt(string);
    return parsed * 100;
}

function preserveDecimal(string) {
    return parseFloat(string);
}