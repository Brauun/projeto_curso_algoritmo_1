function acaoBotao(){
    var numero, fatorial
    numero = prompt("Digite o número para calcular o fatorial: ")
    fatorial = 1
    i = i + 1
    for (var i = 1; i <= numero; i++){
        fatorial = fatorial * i
    }

    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
}

