function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`//ate aqui esta correto


//Carrega no corpo texto da id= msg e também informa a hora do sistema(no caso meu pc)

    if(hora >= 0 && hora < 12){
        img.src = 'manha.jpg'

    }else if(hora<=18){
        img.src = 'tarde.jpg'
    }else{
        img.src = 'noite.jpg'
    }
}

