const prompt = require ('prompt-sync')();
const num1 = parseInt(prompt("Enter a number: "))
const num2 = parseInt(prompt("Enter a second number: "))
const decision = prompt("Do you want to add, subtract, divide or multiply?: ")
var answer 
if (decision == "add"){
    answer = num1 + num2
    console.log(num1 + " + " + num2 + " = " + answer)
}
else if (decision == "subtract"){
    answer = num1 - num2
    console.log(num1 + " - " + num2 + " = " + answer)
}
else if (decision == "divide"){
    answer = num1 / num2
    console.log(num1 + " / " + num2 + " = " + answer)
}
else if (decision == "multiply"){
    answer = num1 * num2
    console.log(num1 + " * " + num2 + " = " + answer)
}
else{
    console.log("Please write either: add, subtract, divide or multiply")
}