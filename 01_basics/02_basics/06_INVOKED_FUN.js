//IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function chai (){
    console.log(`welcome to code with nikki`)
})();
// iife is used to create a new scope and to avoid polluting the global scope with variables and functions and it is also used to execute a function immediately after its definition without having to call it separately.

((name)=>{
    console.log(`welcome to code with ${name}`);
})("nikjoshi");
