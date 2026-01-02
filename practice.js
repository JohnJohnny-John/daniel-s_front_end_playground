// Functions that parse and utilize parameters
let userName = "Mayajane Doro";

function greetUser(userName){
    console.log("Hello, " + userName + "!");
}
 
greetUser(userName);

// Function that returns a value

function calculateArea(length, width){
    return length * width;
}

let length = 5;
let width = 10;
let area = calculateArea(length, width  );
console.log("Area: " + area);   

// Function with default parameters

function introduce(name, age = 25){
    console.log("My name is " + name + " and I am " + age + " years old.");
}       

introduce("Alice");
introduce("Bob", 25); 



//annonymous function assigned to a variable
let square = function(number){
    return number * number;
};  

setTimeout(function(){
    console.log("Square of 4 is: " + square(4));
}, 8000);  

// array methods    
array.forEach(element => {
    console.log(element);       
});

let array = [1, 2, 3, 4, 5];

let doubledArray = array.map(function(element){
    return element * 2;
}); 

// Creating a function
function sayHello(){
    console.log("Hello, World!");
}

// Calling the function
sayHello();

// Function using arrow syntax
() => {
    console.log("Hello, World!");
}