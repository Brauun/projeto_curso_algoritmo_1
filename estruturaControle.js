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