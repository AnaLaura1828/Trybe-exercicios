const operations = require('./operacoes')
const readLine = require('readline-sync')

console.log("calculadora simples");
const num1 = readLine.questionInt("digite um numero: ")
const operacao = readLine.question("digite a operacao: (+, -, *, /) ")
const num2 = readLine.questionInt("digite um numero: ")

switch (operacao) {
    case "+":
        operations.sum(num1, num2)
        break;
    case "-":
            operations.sub(num1, num2)
        break;
    case "*":
            operations.mul(num1, num2)
        break;
    case "/":
                operations.div(num1, num2)
        break;
    default:
       console.log("Operação é desconhecida !!");
}