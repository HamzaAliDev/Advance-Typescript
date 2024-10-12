import chalk from "chalk";
import countries from "./countries.json" assert { type: "json" };
console.log(chalk.blue.bold("hellow world"));
console.log(chalk.red.bold("hellow world"));
console.log(chalk.whiteBright.bgRed.bold("hellow world"));
for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    if (element.name.slice(0, 1) == "P")
        console.log(chalk.bgRed.white.bold(element.name) + "   " + chalk.bgYellow.white.bold(element.code));
}
