#! /usr/bin/env node
import inquirer from "inquirer";
const computergeneratedNumber = Math.floor(Math.random() * 6);
const Number = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Guess a number from 0 and 5 "
    }
]);
if (Number.userguessednumber === computergeneratedNumber) {
    console.log("Conratulations! You have guessed the right number.");
}
else {
    console.log("Sorry, you have guessed the wrong number. The correct number was " + computergeneratedNumber);
}
