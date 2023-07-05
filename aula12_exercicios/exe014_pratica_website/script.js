function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //comentario pode prejudicar o codigo?
    //var hora = 13 , so descomentar que irá mudar manualmente a figura. 
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg';
    } else if (hora < 18) {
        img.src = 'tarde.jpg';
    } else {
        img.src = 'noite.jpg';
    }
}