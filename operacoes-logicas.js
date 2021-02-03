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