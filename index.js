import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter From Currency :",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency :",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    }, {
        name: "amount",
        message: "Enter Your Amount :",
        type: "number",
    }]);
let fromCur = currency[user_answer.from];
let tocur = currency[user_answer.to];
let Amountcur = user_answer.amount;
let Base_amount = Amountcur / fromCur;
let convertedAmount = Base_amount * tocur;
console.log(convertedAmount);
