import inquirer, { Answers, QuestionCollection } from 'inquirer';
 
//take input from users.  

const questions:QuestionCollection = [
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
]
var answers:Promise<Answers> = inquirer
  .prompt(questions
    /* Pass your questions in here */
  )
  answers.then((answers:Answers) => {
    // Use user feedback for... whatever!!
    console.log("answers ",answers);
    
  })
  .catch((error) => {
    console.log("err",error);
    
  });