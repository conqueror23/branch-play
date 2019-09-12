// get that all
// all supported variable
var isDone = false;
var strings = '';
var numbers = 1;
// arrays
var numberArrays = [1, 23, 4, 5, 12, 3];
var numberArray1 = [2, 3, 4, 1, 23];
var stringArrays = ['name', 'jokes', 'happens'];
var stringArray2 = ['name', 'firstname', 'lastname'];
// basic variables
stringArray2 = ['you have ', 'the fist name', 'web developer'];
console.log(stringArray2);
// tuple 
var tuple;
tuple = ['name', 23];
console.log(tuple);
// enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
var c = color.green;
// enums2
var color2;
(function (color2) {
    color2[color2["red"] = 1] = "red";
    color2[color2["green"] = 2] = "green";
    color2[color2["brown"] = 3] = "brown";
})(color2 || (color2 = {}));
var colorName = color[2];
console.log(colorName);
// any type
var noSure;
noSure = 'just a test';
noSure = '21';
console.log(noSure);
// void 
// as the opsite of any , there would be nothing but returns???
function voidReturns() {
    console.log('this is indies a void function ');
}
var unusable = undefined;
unusable = null;
// undefined and null
var udfe = undefined;
var nul = null;
// never ??
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('somthing failed');
}
function infinitLoop() {
    while (true) {
        console.log('show the error message');
    }
}
var object1 = create({ prop: 1 });
var object2 = create({ 'name': 'this' });
console.log("object1 :" + object1 + ", object2 :" + object2);
