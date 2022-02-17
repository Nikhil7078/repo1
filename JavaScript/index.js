// variable declaration
var a;
// variable intialization
var a = 10;
console.log(a);
console.log(typeof a);

a = "hello";
console.log(a);
// type of operator
console.log(typeof a);

a = false;
console.log(a);
console.log(typeof a);

a = null;
console.log(typeof a);
// null is a object

// Number
var num = 10;
console.log(num);
var float = 2.4;
console.log(float);

//string 
' '," ",``;
// single quotes , double quotes, backtick
var str = 'a';
console.log(str);

var b = "hi hope you guys are\nable grasp the concepts"
console.log(b);

var b = `hi hope you guys 
are able grasp the concepts`
console.log(b);

var num = 4500;
console.log(`half of ${num} is ${num/2}`);

var  r = 100;
console.log(r);

var r = 100;
console.log(r);

// We cant declare variable again
// let l = 100;
// console.log(l);

// let l = 100;
// console.log(l);

//2 problem with var keyword
// var keyword is function scope
// let keywprd is block scope

let j = 20;
for(let i = 0;i<num;i++)
{
 let j = 20;
 if(i%2 ==0){
     let hello = 1000;
    //  console.log(i);
     console.log(hello);
 }
 console.log("inner"+j);
}
 console.log("outer"+j);
//  console.log(`value of i is ` ${i});
 console.log(hello); // error dega hello is not defiend 

 {
    //  this is block opening and closing of curly braces is a block
 }






 