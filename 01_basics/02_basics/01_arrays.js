const arr=[1,2,3,4,5];
//arrays are recyclable objects that can store multiple values in a single variable
//arrays are non primitive data types and are stored in heap memory
//arrays can store diff ddatattupes
arr[1]="helio";
console.log(arr);
//arrays make shallow copy of the original array when we assign it to a new variable
//deep copy= when we create a new array and copy the values of the original array to the new array
// shallow copy means reference is same for both the arrays and any change in one array will reflect in the other array
const arr2= new Array(1,2,3,4,5);
//array methods :
arr.push(23);
console.log(arr);
arr.pop();
arr.unshift("classes"); //adds an element at the beginning of the array
arr.shift(); //removes the first element of the array
console.log(arr.includes("noice"));
console.log(arr.indexOf(3));
console.log(arr);
const newarr=arr.join("-"); //joins the elements of the array into a string with the specified separator
console.log(newarr, typeof newarr);
const arr3=newarr.split("-");
console.log(arr3, typeof arr3);
//slice and splice
console.log("not sliced  ",arr);
const slarr=arr.slice(1,4); //returns a new array with the specified start and end index
console.log("sliced ",slarr);
console.log("arr didnt change  ",arr)
arr.splice(2,2); //removes the specified number of elements from the specified index and returns the removed elements
console.log("spliced -- arr got chnaged ",arr);
  























const myarr =[1,"niki"];
const myarr2=["newarray ", 1 ,2 ,3 ];
// myarr.push(myarr2); // push adds the new array as a single element in the original array
console.log(myarr);
myarr3=myarr.concat(myarr2); // concat adds the elements of the new array to the original array
console.log(myarr3, "prev array myarr didnt change", myarr);
//cancat me ek hi array ko jod sakte , but spread me multiple arrays ko jod sakte hai
const myarr4=[...myarr,...myarr2]; // spread operator adds the elements of the new array to the original array
console.log(myarr4, "prev array myarr didnt change", myarr);

//when ther is an array inside another array , array inside that another array etc then we need to flatten that , 
const myarr5=[1,2,[3,4,[5,6,["third array"]]]];
console.log(myarr5.flat(2)); // flat method flattens the array to the specified depth
console.log(myarr5.flat(Infinity));
console.log(Array.isArray("niku"));
console.log(Array.isArray(myarr5));
console.log(Array.from("nikita")); // converts a string to an array of characters

console.log(Array.from({name:"niki",age:18})); // converts an object to an array of its values
let s=23;
let s2=91;
console.log(Array.of(s,s2));
