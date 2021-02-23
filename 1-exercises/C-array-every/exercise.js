/*
   This program should check if the array `group` contains only studentsˆ
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

//

var isStudent = (element) => element in students;
var groupIsOnlyStudents = group.every(isStudent); // complete this statement

if (groupIsOnlyStudents) {
    console.log("The group contains only students");
} else {
    console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only studentsˆˆ