function contar() {
    var cinicio = parseInt(document.getElementById('txinicio').value);
    var cfim = parseInt(document.getElementById('txfim').value);
    var cpassos = parseInt(document.getElementById('txpassos').value);
    var res = document.getElementById('resultado');
    
    var mensagemDetecao = `<br>Início da contagem: ${cinicio} e Fim da contagem: ${cfim} e contar em: ${cpassos} em ${cpassos}<br><br>`;
    var contagem = "";
    if(cpassos<=0){
        window.alert('Passo Invalido! Consideranddo PASSO com valor 1')
        cpassos = 1
    }
    if(cinicio <cfim){
        for (var i = cinicio; i <= cfim; i += cpassos) {
            contagem += i + "👉 ";
            res.innerHTML += `Passos executados:👉 ${i}<br>`;
        }
    }else{
        for (var i = cinicio; i >= cfim; i = i -cpassos){
            contagem += i + "👉 ";
            res.innerHTML += `Passos executados:👉 ${i}<br>`;
        }
    }

    // Substituir último espaço vazio por bandeira emoji
    contagem = contagem.trimRight() + "🏁"+ "<br>"+ "<br>"+ "Em lista:";
    res.innerHTML = mensagemDetecao + contagem + "<br>" + res.innerHTML;
}

function limparDados() {
    var res = document.getElementById('resultado');
    res.innerHTML = '';
}