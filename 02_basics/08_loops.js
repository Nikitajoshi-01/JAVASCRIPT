//for loop:
arr=[1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//break and contihnue;



//WHILE DO WHILE LOOP 
let index=0;
while(index<=10){
    console.log("index value: "+index);
    index++;
}


// do while()

let score =1;
console.log("do while loop")
do{
    console.log(`score value: ${score}`)
    score++;
}
while(score>10);



//FOR OF :
const arr2=[1,2,3,4,5];
for(const it of arr2){
    console.log(it);
}
const str1="code with nikki";
for(let i of str1){
    console.log(`the  char is ${i}`);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const map=new Map();
map.set('nik',"nikita");
map.set('joshi',"nikita joshi")
console.log(map);
for(const [key, value ] of map){
    console.log(key+"-_"+value);
}

const myobj ={
    "name1":"nikki",
    "name2":"pammu"
}
// for(const [key, value ] of(myobj)){
//     console.log(key+"-_"+value);
// }        // THIS IS NOT ITERABLE ---OBJ IS NOT ITERABLE 











// /for in loop is used for iterating over the properties of an object and it gives us the keys of the object
const myobj1={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
for(const key in myobj1){
    console.log(`${key} for this ${myobj1[key]}`);
}
const lang=["javascript","c++","ruby"]
for(const it in lang){
    console.log(`the index is ${it} and the value is ${lang[it]}`);
}

//map is not iterable 

// for(const it in map){
//     console.log(key);
// }




//FOR EACH LOOP :
const arr3=[1,"we are values not indices",3,4,5];
arr3.forEach((function (item){
console.log(item);
}))


arr3.forEach(  (item)=>{
    console.log(item);
})

function printme(item){
    console.log(`HI I M IN PRINT ME FUNCTION ${item}`);
}
arr3.forEach(printme);      // HERE FUNCTION REFERENCE IS GIVEN NOT FUNCTION CALL BECAUSE WE ARE NOT CALLING THE FUNCTION WE ARE JUST PASSING THE REFERENCE OF THE FUNCTION TO THE FOR EACH LOOP AND FOR EACH LOOP WILL CALL THE FUNCTION FOR EACH ITEM IN THE ARRAY



arr3.forEach(  (item , index,arr3)=>{
    console.log(`the item is ${item} and the index is ${index} and the array is ${arr3}`)
})



const arrofobj=[
{
    lang:"javascript",
    framewok:"react",
    extension:".js"
},
{
    lang:"c++",
    framework:"angular",
    extension:".cpp"
},
{
    lang:"ruby",
    framework:"rails",
    extension:".rb"
},
{
    lang:"python",
    framework:"django",
    extension:".py"
}
]
arrofobj.forEach( (item,index)=>{
    console.log(` obj ${index} the language is ${item.lang} and the framework is ${item.framework} and the extension is ${item.extension}`)
})