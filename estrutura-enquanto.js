/*
nome: caractere
   idade, limite: inteiro
   cont : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite a quantidade de vezes que vai ser verificado a idada!")
   leia(limite)
   cont := 0
   enquanto cont < limite faca
       escreva("Digite o nome da pessoa: ")
       leia(nome)
       escreva("Digite a idade do(a) ", nome, ": ")
       leia(idade)
       
       se idade > 18 entao
            escreval(nome, " você é maior de idade!")
       senao
            escreval(nome, " você é menor de idade!")
       fimse
       cont := cont + 1
       
   fimenquanto
*/

var nome, idade, limite, cont

limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
cont = 0
while(cont < limite){
     nome = prompt("Digite o nome da pessoa: ")
     idade = prompt("Digite a idade do(a) " + nome + ": ")

     if (idade > 18)
          document.getElementById("paragrafo").innerText = nome + " você é maior de idade!"
     else 
          document.getElementById("paragrafo").innerText = nome + " você é menor de idade!"
     cont ++
}
