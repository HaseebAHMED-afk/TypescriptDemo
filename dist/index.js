"use strict";
var human1 = {
    name: "Haseeb Ahmed",
    age: 20
};
console.log(human1.name);
//stricting array to only numbers
var array1 = [45, 54, 65];
console.log(array1[2]);
//stricting array to multiple datatypes and limited indices
var array2 = [45, "Hello", true];
console.log(array2[0]);
//stricting array to multiple datatypes and unlimited indices
var array = ["Hello", 45, false, 0.0012];
console.log(array[2]);
//Readonly allows only read but not write
var arr3 = [45, 55, 878];
console.log(arr3[2]);
function addNum(a, b) {
    return a + b;
}
console.log(addNum(10, 67));
