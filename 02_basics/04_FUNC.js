// function name(){
//     console.log("this is a function")
// }
// name(); // this is how we call a function

// name; // this will give us the reference of the function but it will not execute the function

// function add(num1, num2){// params 
//     console.log(num1+num2)
//     return num1+num2;

// }

// add();// this will give us NaN because we have not passed any arguments to the function
// add(2,3); // this will give us 5 because we have passed the arguments to the function
// add(2,"a");// here these are called argu,ents 
// add(3,null);
// add(2,"4");
// const res=add(2,3)
// console.log(res,"result ");
// function login(username="sam"){
//     if(username===undefined)
//         return "Please enter a username";

//     return `welcome my dear ${username}`;
// }

// console.log(login("nikki"));
// console.log(login());





// //number of params not known
// function calprice(...num1){
//     // treats num1 as an array of arguments
//     let sum=0;
//     for(i=0;i<num1.length;i++){
// sum+=num1[i];
//     }
//     console.log(sum);
//     return sum;
// }
// calprice(2,3,4,5); // this will give us 14 because we have passed 4 arguments to the function
// const user={
//     name:"miki",
//     sal: "2000$"
// }
// function onjfunction(obj1){
//     //here variable names ya key names me dikkat aajati h 
//     console.log(`the user name is ${obj1.username}`);
// }
// onjfunction(user); // this will give us the user name because we have passed the object as an argument to the function
// onjfunction({username:"nikki"});














// // ===============================================================================================================================================================================================================================================================================
// //SCOPES:
// // {//brcces for scope

// //     //scopes are of three types:
// // }

// if(true){
//     let a=10;
//     const b=20;
//     var c=30; // var is function scoped and it is not block scoped like let and const ,
//     //var is accessible outside the block but let and const are not accessible outside the block

// }
// //
// //  console.log(a);
// // console.log(b);
// console.log(c);
// let d=100;
// if(true){
//     d=1203;
//     console.log(d); 
// }
// console.log(d); // here we can change the value of d because it is declared outside the block and it is accessible inside the block as well as outside the block
function one(){
    const username="nikki";
    function two(){
        const site="codewithnikki";
        console.log("user name from function 1 appeared in functionn 2",username);
    }
    // console.log(site);
    two();
}
one();
if(true){
    const username="nikki";
    if(username==="nikki"){
        const site="codewithnikki";
        console.log(username + " is the user name and the site is " + site)
    }
    // console.log(site); //error

} 
// console.log(username); //errror 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addone(num1){
    return num1+1;
}
console.log(addone(5)); 
const addtwo=function(nums){
    return nums+2;
}
console.log(addtwo(5));




