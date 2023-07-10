function adicionarNumero() {
    var numeroInput = document.getElementById("numero").value;//pega valor digitado pelo usuario coloca em numeroInput
    var selectElement = document.getElementById("selectn");//cria variavel para o select , selectn
    var optionElement = document.createElement("option");// cria variavel para criar option para cada numero adicionado.
    optionElement.text = numeroInput;//transforma cada option criado em numero digitado pelo usuário
    selectElement.add(optionElement);// adiciona elmento no options
}

function somarNumeros() {
    var selectElement = document.getElementById("selectn");//selecionar select para somar os numeros
    var options = selectElement.options;//cria variavel options , dos elementos adicionados em select
    var soma = 0;//declara soma valendo 0
    if(options == 0){
        window.alert('digite um numero')
    }
    for (var i = 0; i < options.length; i++) { // laço for iniciando em 0 , 0 < tamanho do options , adiona mais 1
        soma += parseInt(options[i].value);// soma = soma(0) 
    }
    document.getElementById("resultado").textContent = "A soma dos números é: " + soma; // Exibir resultado na div
}
      
       
