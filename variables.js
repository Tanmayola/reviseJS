// scope of the variable -->JS have a main function, if we dont have ha function all let var const all is global var , {}<-- this is a block (this is a block scop, its local scop), var's life is limited in block scop, function can create env , 
// resssignment -->// let changes in let only it's not one to may maping,
// redecleration -->//
// mutablity -->// it allow changes ex-->a=5 //let , var //in react ->state updation -> overlap a value, let achnge its own value in let only, 
// immutablity -->//changes not allowed ex-> const = 54
// clousers--> //functin main{function variable} 
// hosting 
//
// a=10;// we have 2 function here it have a main function
// function variable(){
//     var a =5;//function khatam env khatam.
//     console.log(a);
// }
// variable();
// console.log(a);// we have 2 function here it have a main function
// //each functin create own env

//undefing meaning garbage , null contain noting
//\

a= 50 //lexical concepts
function variable(){
    let b=22;
    let a= 33;
    console.log(a);
    console.log(b);
}
variable(); 
console.log(a);//closer

//functin main{function variable} 

