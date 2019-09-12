// get that all
// all supported variable
let isDone: boolean = false;
let strings :string = '';
let numbers :number =1;
// arrays
let numberArrays:number[]= [1,23,4,5,12,3];

let numberArray1:Array<number> = [2,3,4,1,23]

let stringArrays:string[]=['name','jokes','happens'];

let stringArray2:Array<string> =['name','firstname','lastname'];
// basic variables

stringArray2=['you have ','the fist name','web developer'];

console.log(stringArray2);
// tuple 
let tuple: [string,number]

tuple = ['name',23];

console.log(tuple)

// enum

enum color {red,green,blue}

let c:color = color.green;

// enums2

enum color2{red=1,green,brown}

let colorName:string=color[2];

console.log(colorName);

// any type

let noSure :any ;

noSure = 'just a test'

noSure = '21'
console.log(noSure)

// void 
// as the opsite of any , there would be nothing but returns???
function voidReturns():void {
    console.log('this is indies a void function ')
}


let unusable :void = undefined 

unusable = null;

// undefined and null

let udfe:undefined =undefined;

let nul:null =null ;

// never ??

function error(message:string ) :never{
    throw new Error(message);
}
function fail(){
    return error('somthing failed')
}
function infinitLoop():never{
    while (true){
        console.log('show the error message')
    }
}

// object

declare function create(obj:object |null):void;

let object1 =create({prop:1})

let object2 =create({'name':'this'})

console.log(`object1 :${object1}, object2 :${object2}`);





