#!./usr/bin/env.node
import inquirer from "inquirer";
import chalk from "chalk";
//step 1
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne", // Corrected the name to match the case in the destructuring assignment
        message: "Enter your first number"
    }, // Added missing comma
    { type: "number",
        name: "numberTwo",
        message: "Enter your second number"
    }, // Added missing comma
    { type: "list",
        name: "operator",
        message: "Enter your operator",
        choices: ["+", "-", "*", "/"]
    }
]);
//step 2
const { numberOne, numberTwo, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log(chalk.red("Invalid operator"));
}
console.log(chalk.green(`The result of ${numberOne} ${operator} ${numberTwo} = ${result}`));
