function contar(){
    let ini = document.getElementById('txi')
    let fim = document.getElementById('txf')
    let passo = document.getElementById('txp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '<br>Impossível Contar!Verique os dados digitados'
        window.alert('[ERRO01] Faltam dados, verifique dados digitados')
    }else {
        res.innerHTML = '<br>Contando:...<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <=0){
            window.alert('Passo Invalido! Consideranddo PASSO com valor 1')
            p = 1
        }
        if(i < f) {
            // contagem crescente
            for(let c = i; c <= f; c = c + p) {    
                res.innerHTML += `👉 ${c}  `
            }        
        }else {
            // contagem regressiva
            for(let c = i; c >= f; c = c - p){
                res.innerHTML += `👉 ${c}  `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

function limparDados() {
    let res = document.getElementById('res');
    res.innerHTML = '<br>Preparando Contagem....';
}