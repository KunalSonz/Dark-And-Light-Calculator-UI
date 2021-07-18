function swapsheet(sheet){
  document.getElementById("stlSheet").href = sheet
}


let a;
let b = []; 
let c;
let sum = {};

function delData(){
  a = 0;
  b = [];
  // console.log(a);
  console.log(b);
  document.querySelector('.numDisplay').innerHTML = a
}

function divide(){
  a= '/';
  b = b + "/";
  
  console.log(b);
  // console.log(a);
  document.querySelector('.numDisplay').innerHTML = b
}
function multiply(){
  a = "x"
  b = b + "*";
  
  console.log(b);
  // console.log(a);
  document.querySelector('.numDisplay').innerHTML = b
}
function substract(){
  a = "-"
  b = b + "-";
 
  console.log(b);
  // console.log(a);
  document.querySelector('.numDisplay').innerHTML = b
}
function add(){
  a = "+"
  b = b + "+";
  console.log(b);
  document.querySelector('.numDisplay').innerHTML = b;
}
function enterDot(){
  a = "."
  b = b + ".";
  
  console.log(b);
  // console.log(a);
  document.querySelector('.numDisplay').innerHTML = b;
}
function enterData(){
  a = "data"
  
  
  document.querySelector('.numDisplay').innerHTML = "undefined";
}

function enterNo(no){
  a = no;
  b = b+a;
  
  
  console.log(b);
  
  document.querySelector('.numDisplay').innerHTML = b;
}


