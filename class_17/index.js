"use strict";
// Generics and interface , enum
var WEEK;
(function (WEEK) {
    WEEK[WEEK["MONDAY"] = 0] = "MONDAY";
    WEEK[WEEK["TUESDAY"] = 1] = "TUESDAY";
    WEEK[WEEK["WEDNESDAY"] = 2] = "WEDNESDAY";
    WEEK[WEEK["THRUSDAY"] = 3] = "THRUSDAY";
    WEEK[WEEK["FRIDAY"] = 4] = "FRIDAY";
    WEEK[WEEK["SATURDAY"] = 5] = "SATURDAY";
    WEEK[WEEK["SUNDAY"] = 6] = "SUNDAY";
})(WEEK || (WEEK = {}));
console.log("day:", WEEK.FRIDAY);
console.log(WEEK[WEEK.SATURDAY]);
function swap(arr) {
    return [arr[1], arr[0]];
}
const result1 = swap([10, 20]);
const result2 = swap(["Ali", "Hamza"]);
const result3 = swap([true, false]);
console.log("swap answer is", result1);
console.log("swap answer is", result2);
console.log("swap answer is", result3);
const obj = {
    name: "ali hamza",
    age: 22
};
console.log("obj is: ", obj);
const student = {
    id: 2153,
    rollno: 12,
    class: "3rd semester"
};
console.log("student", student);
