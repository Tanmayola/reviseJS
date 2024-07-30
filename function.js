// anme function
//annoynomous functino
// expressional function
//arrow function
//annoymous arrow function
// expressional arrow function
// function constructor
// function expression
// function declaration
// immutablity invoked functional 
// expression
//function expression with arguments
//function def
//function calling
//function declaration or prototype of the function
//prototype ===> function name and its properties like how many arguments are
//been taken by function
//atmascrip 2015 new version function constructor concept
//

// const sum = function (a,b){
//     let su= a+b;
//     console.log(`the sum of ${a} and ${b} is ${su}`);
// }
// sum(3,5);//expressional function
//positional arguments
// function (a,b){
//     let su= a+b;
//     console.log(`the sum of ${a} and ${b} is ${su}`);
// }
// sum(3,5);
//annoymous function
// const sum = function (a,...nums){
//     // let su= a+b;
//     // console.log(`the sum of ${a} and ${b} is ${su}`);
//     console.log(nums);
// }
// sum(3,5);
//nums contin n variables, nums is rest oprater, it store data in array , we can use loops in nums
//arrow function
const sum = (a,...nums) => {
    // let su= a+b;
    // console.log(`the sum of ${a} and ${b} is ${su}`);
    console.log(nums);
}
sum(3,5);
//we cant hosting it
//annoynomous function is arrow function