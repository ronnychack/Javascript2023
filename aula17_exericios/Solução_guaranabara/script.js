let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#resultado')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}


function adicionarNumero() {
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))  
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) 
        res.innerHTML = '' 
  } else {
    window.alert('Valor invalido ou já está na lista')
  } 
  num.value = ''
  num.focus()
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma = soma +valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML = res.innerHTML + `<p> Ao todo, temos ${total} numeros cadastros.</p>`
        res.innerHTML +=  `<p>Maior valor digitado foi ${maior}.</p>`
        res.innerHTML +=  `<p>Menor valor digitado foi ${menor}.</p>`
        res.innerHTML += `<p>Soma de todos os valores , temos ${soma}.</p>`
        res.innerHTML += `<p>Media de todos os valores , temos ${media}.</p>`
    }
  }