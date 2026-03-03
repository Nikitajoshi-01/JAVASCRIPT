//FILTER MAP REDUCE
const lang=["javascript","c++","ruby","python","java"];
const values=lang.forEach( (item)=>{
    // console.log(item);
    return item
} );
console.log(values);       //undefined because forEach does not return anything it just executes the function for each element in the array and it does not return anything




////////////////////////////////////////////////
const mynums=[1,2,3,4,5,6,7,8,9,10];
const newnum=mynums.filter( (num)=>{
    // this will return an array of even numbers from the mynums array
    return num%2===0;
})
console.log(newnum);

mynums.forEach( (num)=>{
    if(num>4){
        newnum.push(num);
    }
})
console.log(newnum);









///////////////////////////////////////////////////////////////////////////////////////////

// MAP FUNCTION 
const number=[1,2,3,4,5];
const arrnew= number.map( (num)=>{
    return num*num;     // this will return an array of squares of the numbers in the number array
})
console.log(arrnew);
console.log(number);     //original array is not modified by the map function because it returns a new array and does not modify the original array











// ////////////////////////////////////////////////////////////////////////////////////////
// CHAINING OF MAP AND FILTER FUNCTION
const newarray=number.map( (num)=>num*10).map( (newvalue)=>{
    return newvalue+1;
}).filter( (num)=>num>30);
console.log(newarray);


















//////////////////////////////////////////////////////////////////////////////////
//REDUCE FUNCTION:
const sum=[1,2,3,4,5];
init_value=0;
const total=sum.reduce( function (acc, currval){
    console.log(`accumulator value: ${acc} and current value: ${currval}\n returned value =${acc+currval}`);
    return acc+currval;
},init_value);
console.log(total); // 15 because the reduce function takes the first value of the array as the initial value of the accumulator and then it adds the current value to the accumulator and returns the final value of the accumulator after iterating through all the elements of the array
