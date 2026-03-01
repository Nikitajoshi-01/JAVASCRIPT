// date starts ffrom 1 jan 1970 in js
let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let newcreate=new Date(2020,0,12); // month starts from 0 in js so 0 is jan and 11 is dec
console.log(newcreate.toLocaleString());
let newdate2=new Date("2020-01-12"); //yyyy-mm-dd 
console.log(newdate2.toLocaleString());
let newdate3=new Date("2020/01/12") //yyyy/mm/dd
console.log(newdate3.toLocaleString());
let newdate4=new Date("01-14-2023") //mm-dd-yyyy
let mytimestamp=Date.now(); // gives the timestamp in milliseconds since 1 jan 1970
console.log(mytimestamp);
console.log(newdate2.getTime()); // gives the timestamp in milliseconds since 1 jan 1970 for the given date

// newdate2.toLocaleDateString('default',{
//     weekday:'long',
//     year:'numeric'
// })
console.log(newdate2.toLocaleDateString('default',{
    weekday:'long',
    year:'numeric'
}));