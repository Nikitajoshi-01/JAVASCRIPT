"use strict" ;
//treat all js code as newer version of js

// alert(3+3);
let name="nikki";
let age =18;
let boli=false;
//number=2 to power 53
//bigint=
// string =""
// boolean=true ' false;
// null=empty value -standalone 
// undefined=variable not assigned 
//symbol=unique value 

console.log(typeof name);
console.log(typeof age);
console.log(typeof boli);
console.log(typeof null);   //object
console.log(typeof undefined);


// primitive and non primitive datatypes
//primitive datatypes are stored in stack and non primitive datatypes are stored in heap
//7 datatypes in js: string , number , boolean , null , undefined , symbol , bigint 

// reference typr data types : array , object, function, date , regex

// js is dynamically typed language : we can change the data type of a variable at runtime
// number include both decimal and int nos'
let email; // undefined se initialise hua h 
let id1=Symbol("id")
//symbol is always a unique value ;
let id2=Symbol("id")
console.log(id1===id2); // false because both are unique values even if they have same description
const bigint1=1234567890123456789012345678901234567890n;
console.log(bigint1);
const arr=[1,2,3];
let obj={
    name:"nikki",
    age:18,
    age:19,  // if we have duplicate keys in an object then the last key will be considered
}
console.log(obj);
//store function in a variable
const fun=function(){
    console.log("helio");
}
fun(); //function call
console.log(fun); //function definition;

//--------------------------------------------------------------------------------------------------------------------------------------------
// primitive use stack = copy of variable 
// non primitive use heap=original reference of variable

























// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// TRUTHY AND FALSY VALUES IN JS:
// FALSY VALUES: -0, 0, "", null, undefined, NaN, false, 0n, -0n, BigInt(0)
//TRUTHY VALUES: all values except falsy values are truthy values in js
// --"0",'FALSE'," ",[],{},function(){},true,1,-1,0.1,-0.1,Infinity,-Infinity,BigInt(1),-BigInt(1)

//NULLISH COALESCING OPERATOR: ?? ==NULL UNDEFINED
let val1;
val1=val1??"default value"; // if val1 is null or undefined then it will return "default value" otherwise it will return val1
console.log(val1); // default value
val1="niki"??"not nikki";
//TERNARY OPERATOR: condition ? true value : false value
let age1=18;
let isAdult=age1>=18 ? "yes" : "no";
console.log(isAdult); // yes