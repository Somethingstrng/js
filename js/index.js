"use strict";

//switch - переключатель
let x=prompt();
if(x==1){
    alert("User have entered 1");
}   else if(x==2){
    alert("User have entered 2");
}   else if(x==3){
    alert("User have entered 3");
}   else if(x==4){
    alert("User have entered 4");
}   else if(x==5){
    alert("User have entered 5");
}   else if(x==6){
    alert("User have entered 6");
}   else if(x==7){
    alert("User have entered 7");
}   else{
    alert("User have entered some number");
}
let x=prompt();
switch(x){
    case 1: {alert("User have entered 1"); break;} //лучше ставить фигурные скобки
    case 2: alert("User have entered 2"); break;
    case 3: alert("User have entered 3"); break;
    case 4: alert("User have entered 4"); break;
    case 5: alert("User have entered 5"); break;
    case 6: alert("User have entered 6"); break;
    case 7: alert("User have entered 7"); break;
    default: alert("User have entered some number"); break;
}

if(i<100){f1();f2();f3();}


function myAdd(x1,x2){
    return x1+x2;
}
let res1=myAdd(2,3);


function myAdd(x1,x2){
    return x1+x2;
}
function mySub(x1,x2){
    return x1-x2;
}
function myDiv(x1,x2){
    return x1/x2;
}
function myMult(x1,x2){
    return x1*x2;
}
let num1=prompt("enter num 1");
let num2=prompt('enter num 2');
let op=prompt('enter +,-,*,/');
switch(op){
    case '+': {
        console.log(myAdd(num1,num2)); break;
    }
    case '-': {
        console.log(mySub(num1,num2)); break;
    }
    case '/': {
        console.log(myDiv(num1,num2)); break;
    }
    case '*': {
        console.log(myMult(num1,num2)); break;
    }
    default: {
        console.log('unknown op'); break;
    }
}
// вместо
if(op=='+'){
    myAdd(num1,num2);
} else if(op=='-'){
    mySub(num1,num2);
}   else if(op=='/'){
    myDiv(num1,num2);
}   else if(op=='*'){
    myMult(num1,num2);
}   else{
    console.log('unknown op');
}

//function expression
let helloFunc=function(){
    console.log('hello')
}
let resHelloFunc=helloFunc;
console.log(resHelloFunc);