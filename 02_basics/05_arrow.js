const user={
    username:"nikki",
    price:10000,
    welcomemsg:function(){
        console.log(`welcome ${this.username} to our website and your price is ${this.price}`); // to refer current context use "this "
        console.log(this );
    }
}
user.welcomemsg;
user.welcomemsg(); // welcome nikki to our website and your price is 10000
user.username="nikki123";
user.welcomemsg(); // welcome nikki123 to our website and your price is 10000
console.log(this); // window object in browser and global object in node js
//gives emoty object in strict mode


// function chai(){
//     let name = "nikita joshi";
//     console.log(this.name);// undefined because this is referring to the global object and there is no name property in the global object
// }
// chai();





const chai =()=>{
    let name = "nikita joshi";
    console.log(this);// window object in browser and global object in node js
}

//ARROW FUNCTION SYNTAX :
//
const add=(num1,num2)=>{
    console.log(num1+num2);
    return num1+num2;
}
console.log(add(2,3)); // 5

//IMPLICIT RETURN IN ARROW FUNCTION
// if(we use cyurly braces then we are supposed to use return keyword to return the value but if we do not use curly braces then we can directly return the value without using return keyword)
const addtwo=(num1,num2)=>num1+num2; // this will return the sum of num1 and num2 without using the return keyword
//OR
// const addtwo=(num1,num2)=>(num1+num2); // this will return the sum of num1 and num2 without using the return keyword

console.log(addtwo(23,3)); // 26
// returning obj in implicit representation
const OBJ=()=>({name:"nikki",age:23}); // this will return the object without using the return keyword
//MUST BE WRAPPED IN PARENTHESES OTHERWISE IT WILL GIVE US UNDEFINED BECAUSE IT WILL THINK THAT WE ARE STARTING A FUNCTION BODY AND NOT AN OBJECT LITERAL

const ARR=[2,3,4,5,6];

