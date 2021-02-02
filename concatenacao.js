/*
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite seu nome: ")
   leia(nome)
   escreval("Digite um número: ")
   leia(numero)
   
   escreval(nome, " : ", numero)

*/

var nome, numero

nome = prompt("Digite o seu nome: ")
numero = prompt("Digite um número: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero