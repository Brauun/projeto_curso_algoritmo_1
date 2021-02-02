/*
   passou := falso
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a primeira nota: ")
   leia(nota1)
   escreval("Digite a segunda nota: ")
   leia(nota2)
   media := (nota1 + nota2) / 2
   
   se media >= 6 entao
      passou := verdadeiro
   fimse
   
   se (passou) && (media >= 50 || media <= 70) entao
      escreval("Aprovado! Nota: ", media)
   senao
      escreval("Reprovado! Nota: ", media)
   fimse
*/

var nome, nota1, nota2, passou;

passou = false
nome = prompt("Digite o nome do Aluno: ")
nota1 = prompt("Digite a primeiran nota do Aluno: ")
nota2 = prompt("Digite a segunda nota do Aluno: ")

media = (parseInt(nota1) + parseInt(noat2)) / 2;

if(media >= 50)
    passou = true;

if(passou && (media >= 70 && media <= 90))
    alert("Aprovado!" + nome)
else
    alert('Reprovado!' + nome)