/** Estudo das Funções - JS
 * 
 */

//função simples (literal)
function hello() {
    console.log("Hello function")
}
console.log(typeof(hello))
hello()

//função atribuida
const hello2 = function() {
    console.log("Hello function assigned")
}

console.log(typeof(hello2))
hello2()

//arrow function => (simplificação da função atribuida)
//o function ------ =>
const hello3 = () => {
    console.log("Hello arrow function")
}

console.log(typeof(hello3))
hello3()

//funções com passagem de parametros e retorno
//função simples
function somarS(num1,num2) {
    return (console.log(num1 + num2))
}

somarS(265,653)

//função atribuida
const somarA = function(num1,num2) {
    return (console.log(num1 + num2))
}

somarA(45,45)

//arrow fuction
const somarAF = (num1,num2) => {
    return (console.log(num1 + num2))
}

somarAF(4105,4105)

//arrow function simplificada (retorno é ímplicito)
const somarAFS = (num1,num2) => console.log(num1 + num2)

somarAFS(6,5)