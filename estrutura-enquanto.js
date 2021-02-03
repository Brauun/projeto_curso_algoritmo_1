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
