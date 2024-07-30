function sum(a,b){
    return a+b;//2
}
function sub(a,b){
    return a-b;//2
}function mul(a,b){
    return a+b;//2
}function di(a,b){
    return a/b;//2
}
function calculator(a,b,opration)//1
{
    return opration(a,b);
}
console.log(calculator(3,6,sum));//3
console.log(calculator(3,6,sub));
console.log(calculator(3,6,mul));
console.log(calculator(3,6,di));
//apt is call back function in expressjs