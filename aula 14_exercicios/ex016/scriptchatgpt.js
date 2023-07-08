function contar() {
    var cinicio = parseInt(document.getElementById('txinicio').value);
    var cfim = parseInt(document.getElementById('txfim').value);
    var cpassos = parseInt(document.getElementById('txpassos').value);
    var res = document.getElementById('resultado');
    
    var mensagemDetecao = `<br>Início da contagem: ${cinicio} e Fim da contagem: ${cfim} e contar em: ${cpassos} em ${cpassos}<br><br>`;
    var contagem = "";
    
    for (var i = cinicio; i <= cfim; i += cpassos) {
        contagem += i + "👉 ";
        res.innerHTML += `Passos executados:👉 ${i}<br>`;
    }
    // Substituir último espaço vazio por bandeira emoji
    contagem = contagem.trimRight() + "🏁"+ "<br>"+ "<br>"+ "Em lista:";
    res.innerHTML = mensagemDetecao + contagem + "<br>" + res.innerHTML;
}

function limparDados() {
    var res = document.getElementById('resultado');
    res.innerHTML = '';
}