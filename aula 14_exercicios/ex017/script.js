function tabuada() {
    let num = document.getElementById('txtn') //pega texto no html
    let tab = document.getElementById('seltab')//pega select do html para mostrar resultado depois
    if (num.value.length == 0 ){// == 0 pra nao digitar nada em branco
        window.alert('Por favor , digite um numero!')
    }else{
        let n = Number(num.value)
        let c = 0 // contador do laco quantas vezes ele irá mostrar na tela
        tab.innerHTML = ''// comando pra limpar select para nao mostrar mesma tabuada varias vezes.
        while( c <= 10){ // contador for igual menor que 10
            let item = document.createElement('option')// cria opcao no select pra mostrar valor da tabuada
            item.text = `${n} x ${c} = ${n*c}` // numero x contador = num vs con valor da tabuada
            item.value = `tab${c}`//cria valor tab
            tab.appendChild(item)//para aparece na tabela adiciona no filho item
            c++//incrementa c cada loop.
        }
    } 

}
