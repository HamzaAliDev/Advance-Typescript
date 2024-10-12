import inquirer from 'inquirer';
// making simple calculator
const question = [
    {
        name: "num1",
        type: "number",
        message: "Enter 1st number "
    },
    {
        name: "num2",
        type: "number",
        message: "Enter 2nd number "
    },
    {
        name: "operation",
        type: "list",
        choices: ["+", "-", "*", "/"]
    }
];
var answers = inquirer.prompt(question);
answers.then((answers) => {
    switch (answers.operation) {
        case "+":
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
            break;
        case "-":
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
            break;
        case "*":
            console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
            break;
        case "/":
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
            break;
        default:
            break;
    }
})
    .catch((error) => {
    console.log("error", error);
});
