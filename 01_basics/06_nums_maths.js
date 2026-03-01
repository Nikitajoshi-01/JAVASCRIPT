const score=400;
console.log(score);
const num=new Number(400);
console.log(num);
console.log(num);
console.log(typeof score);
console.log(typeof num);
console.log(score==num);
console.log(num.toString());
console.log(num.toFixed(2)); // adds precision the number of digits after the decimal point
const num2=123.3455;
console.log(num2.toPrecision(5)) // adds precision the total number of digits in the number
console.log(Number.MAX_VALUE);

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.2));
console.log(Math.min(4,5,6,7));
console.log(Math.max(4,5,6,7));
console.log(Math.random()); // generates a random number between 0 and 1
console.log(Math.floor(Math.random()*10)+1); // generates a random number between 0 and 10
const min=20;
const max=30;
console.log(Math.floor(Math.random()*(max-min+1))+min); // generates a random number between min and max
