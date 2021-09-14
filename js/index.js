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
//func declaration
function myAdd1(x1,x2){
    return x1+x2;
}
//func expression
let myAdd2=function(x1,x2){
    return x1+x2;
}
console.log(myAdd1(2,2));
console.log(myAdd2(2,2));

//array function
let myAdd3=(x1,x2)=>x1+x2;
//or
let myAdd4=(x1,x2)=>{
    let result;
    result=x1+x2;
    return result;//important
}
console.log(myAdd3(2,2));
console.log(myAdd4(2,2));

let sayHelloWithUser=(userName)=>{
    let greeting='Hello,'+userName;
    console.log(greeting);
}

//вывести числа от введенного до 0
let myFunc1=userValue=>{
    let i;
    for(i=userValue; i>=0; i--){
        console.log(i);
    }
}
myFunc1(10);
//or
let myFunc1=userValue=>{
    for(userValue; userValue>=0; userValue--){
        console.log(userValue);
    }
}
myFunc1(10);
//or
let myFunc1=userValue=>{
    while(userValue>=0){
        console.log(userValue);
        userValue--;
    }
}
myFunc1(10);

//Определите в какую четверть часа попадает ввыденное количество минут пользователем (например, 40 минут - 3-я четверть часа)
let userValue=(minutes)=>{
    let part=Math.ceil(minutes/15);
    return part;
}

let userValue=(minutes)=>{
    let part=Math.ceil(minutes/15);
    switch(part){
        case 1:{
            console.log('1 part');
            break;
        }
        case 2:{
            console.log('2 part');
            break;
        }
        case 3:{
            console.log('3 part');
            break;
        }
        case 4:{
            console.log('4 part');
            break;
        }
        default: {
            console.log('error');
            break;
        }
    }
}

let userValue=prompt('Enter minutes');
console.log('Is' definePartOfHour(userValue));

//Найти произведение чисел в пределах от limit1 до limit2

let limit=(limit1,limit2)=>{
    if(limit1>limit2){
        let buf=limit1;
        limit1=limit2;
        limit2=buf;
    }
    let i,result=1;
    for(i=limit1;i<=limit2;i++){
        result*=i;
    }
    return result;
}
//or
let limit=(limit1,limit2)=>{
    if(limit1>limit2){
        let buf=limit1;
        limit1=limit2;
        limit2=buf;
    }
    let result=1;
    for(;limit1<=limit2;limit1++){
        result*=limit1;
    }
    return result;
}
console.log(limit(1,8));