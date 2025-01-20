/**
 * Tipagem dinâmica - JS
 */

//declaração de variáveis
let nome, idade, peso, altura, vip, imc

//entrada de dados
nome = "Carlos Antonio"
idade = 32
peso = 81.2
altura = 1.86
vip = true

//a linha abaixo verifica o tipo da variável
//console.log(typeof(vip))

console.clear()

//processamento
//imc (índice de massa corporal | fcm (Frequência cardiáca máxima))
imc = peso / (altura * altura)
fcm = 208 - (0.7 * idade)

//saida
console.log("Ficha do aluno")
console.log("_____________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`IMC: ${imc.toFixed(2)}`)
console.log(`FCM: ${fcm} bpm`)