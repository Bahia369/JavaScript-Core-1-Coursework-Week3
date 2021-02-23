// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// method 1

var method1 = numbers.map(function(number) {
    return number * 100;
});
console.log(method1);

// method 2

function multiply100(number) {
    return number * 100;
}

var method2 = numbers.map(multiply100);
console.log(method2);

// method 3

var method3 = numbers.map((number) => {
    return number * 100;
});
console.log(method3);