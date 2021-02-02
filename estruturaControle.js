/*escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a primeira nota: ")
   leia(nota1)
   escreval("Digite a segunda nota: ")
   leia(nota2)
   media := (nota1 + nota2) / 2
   se media >= 6 entao
      escreval("Aprovado! Nota: ", media)
   senao
      escreval("Reprovado! Nota: ", media)
   fimse
*/

var nome, nota1, nota2;
nome = prompt("Digite o nome do aluno: ")
nota1 = prompt("Digite a primeira nota: ")
nota2 = prompt("Digite a segunda nota: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if (media >= 6){
    alert("Você foi aprovado! Nota: " + nota)
}
else
    alert("Você foi reprovado! Nota: " + nota)