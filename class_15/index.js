import inquirer from "inquirer";
// using async and await and calculate grade.
console.log("This is  Grading System");
async function grade() {
    do {
        var result = await inquirer.prompt([{
                name: "num",
                type: "number",
                message: "Enter your score: "
            }]);
        var score = result.num;
        if (score >= 80) {
            console.log("Your grade is A ");
        }
        else if (score >= 70) {
            console.log("Your grade is B ");
        }
        else if (score >= 60) {
            console.log("Your grade is C ");
        }
        else if (score >= 50) {
            console.log("Your grade is D ");
        }
        else {
            console.log("Your grade is F ");
        }
        var sign = await inquirer.prompt([{
                name: "value",
                type: "input",
                message: "Do you want more then enter 'y' "
            }]);
    } while (sign.value === "y" || sign.value === "Y");
}
grade();
