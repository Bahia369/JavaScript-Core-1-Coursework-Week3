/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
    "Rakesh",
    "Antonio",
    "Alexandra",
    "Andronicus",
    "Annam",
    "Mikey",
    "Anastasia",
    "Karim",
    "Ahmed",
];
// var nameFinder = names.find(function(item) {
//     if (item.startsWith("A") && item.length > 7) {
//         return true;
//     }
// });
// console.log(nameFinder);

function findLongNameThatStartsWithA(list) {
    return list.find(function(item) {
        if (item.startsWith("A") && item.length > 7) {
            return true;
        }
    });
}
var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

var countries = ["England ", "wales ", "Austria", "Argentina"];
longNameThatStartsWithA = findLongNameThatStartsWithA(countries);
console.log(longNameThatStartsWithA);
/* EXPECTED OUTPUT */
// "Alexandra"