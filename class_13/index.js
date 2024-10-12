import inquirer from 'inquirer';
const questions = [
    {
        name: "age",
        type: "number",
        message: "Enter your age "
    },
    {
        name: "username",
        type: "input",
        message: "Enter your name "
    }
];
var answers = inquirer
    .prompt(questions
/* Pass your questions in here */
);
answers.then((answers) => {
    // Use user feedback for... whatever!!
    console.log("answers ", answers);
})
    .catch((error) => {
    console.log("err", error);
});
