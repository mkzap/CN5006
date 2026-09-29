console.log("Hello, World!");
var num1 = Number(readline("Enter the first number:"));
var num2 = Number(readline("Enter the second number:"));
var operation = readline("Enter the operation: add, divide, multiply, or subtract");
switch (operation) {
  case "add":
    console.log(num1 + num2);
    break;
  case "divide":
    console.log(num1 / num2);
    break;
  case "multiply":
    console.log(num1 * num2);
    break;
  case "subtract":
    console.log(num1 - num2);
    break;
  default:
    console.log("Invalid operation");
}
