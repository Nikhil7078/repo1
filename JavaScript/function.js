
function add(str,a,b){
    return (a+b);
}
function calculator(str,a,b)
{
    if(str == 'add'){
        return function add(){
            console.log(a+b);
        }
    }
}
    //else if(str == 'sub'){
    //  }

    // calculator('add',2,5);
    add(4,6);

  //2) function Expression

  // let variable_name = function(){
      //do something
 // }
 //name of variable is used to invoke the function 
 // varible_name();

 let sayHi = function(){
     console.log("hello guys is am function expression");
 }
 console.log("line\n"+sayHi);
 sayHi();


 //3) IIFE -> Imediately invoke function expreesion  

 function add(a,b){
     return (a+b);
 }

 let additionIIFE = (function add(a,b){
     console.log(a+b);
 })(20,30);
 console.log(additionIIFE);