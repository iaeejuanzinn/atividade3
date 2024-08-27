let n1 = 4
let n2 = 0

let operador = "/"
let adição
let subtração
let multiplicação
let divisão 

switch (operador) {
    case "+":
        adição = n1 + n2
        console.log("Adição: " + adição)
        break
    case "-":
        subtração = n1 - n2
        console.log("Subtração: " + subtração)
        break
    case "*":
        multiplicação = n1 * n2
        console.log("Multiplicação: " + multiplicação)
        break
    case "/":
        if (n2 === 0) {
            console.log("Não é possível dividir por zero.")
        } else {
            divisão = n1 / n2
            console.log("Divisão: " + divisão)
            break;
        }
        
        break
    default:
        console.log("Operador inválido.")
}