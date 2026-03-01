//object literals 
const obj1={
    name:"nikki",
    age:18,
    loaction:"jaipir",
    favsub:["maths ","eng", "phy"],
    "frnd name":"rosab"
}
console.log(obj1.name);
console.log(obj1.favsub[2]);
console.log(obj1["age"]);
// console.log(obj1.frnd name); //error because of space in key name
console.log(obj1["frnd name"]);
//for using symbols as keys in objects we need to use square brackets
mysymbol=Symbol("id");
const myobj={
    name:"niki",
    [mysymbol]:123
}
console.log(myobj[mysymbol]);
// Object.freeze(obj1); // this method freezes the object and we cant change the values of the object
obj1.name="new name";
console.log(obj1); // the name is not changed because the object is frozen
obj1.greet=function(){
    console.log(`${this.name}`);
}
console.log(obj1.greet()); // here the function has not been executed but uts reference is stored in the object
