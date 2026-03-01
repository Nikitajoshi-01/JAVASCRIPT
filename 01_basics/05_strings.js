const name="nikita "
const count=2;
// console.log(name+count+" Value");
// use backticks and ${} to print the value of variables in a string
console.log(`${name} ${count} Value`);
// string interpolation
let str1="hello";

const name1=new String ("NOKITa joshi"); // string creation using object constructor
console.log(name1);// this gives length and other properties of the string.

console.log(name1.length) // givs teh length of the string
console.log(name1[0]) // gives the first character of the string
console.log(name1.__proto__); // gives the prototype of the string object which has all the methods of the string
console.log(name1.toUpperCase()); // converts the string to uppercase
console.log(name1.charAt(2)); // gives the character at the specified index
console.log(name1.indexOf("o")); // gives the index of the first occurrence of the specified character
const newstr=name1.substring(0,4); // gives the substring from the specified start index to the end index
// the end value is not included in the substring // ignores the negative values and considers them as 0
console.log(newstr);
console.log(name1); // the original string is not changed because strings are immutable in js
const anotherstr=name1.slice(-2,4); // gives the substring from the specified start index to the end index
// the end value is not included in the substring


const newstr1="       niki        ";
console.log(newstr1.trim()); // removes the whitespace from both ends of the string
const url="https://niki chs0hq";
console.log(url.replace(" ","-")); // replaces the specified value with the new value
console.log(url.includes("chs0hq")); // checks if the specified value is present in the string
console.log(url.split(" ")); // splits the string into an array of substrings based on the specified separator
