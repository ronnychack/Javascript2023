function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano =document.getElementById('txtano');
    var res =document.querySelector('div#resultado');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados tente novamente');
    }else {
        var fsex = document.getElementsByName('radsexo');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'bebe_homem.jpg');
            }else if (idade < 21){
                img.setAttribute('src', 'jovem_homem.jpg' );
            }else if (idade <50){
                img.setAttribute('src','adulto_homem.jpg');
            }else {
                img.setAttribute('src','velho_homem.jpg');
            }
    }else if (fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade <10){
                img.setAttribute('src','bebe_mulher.jpg');
            }else if (idade <21){
                img.setAttribute('src','jovem_mulher.jpg');
            }else if (idade <50){
                img.setAttribute('src','adulto_mulher.jpg');
            }else {
                img.setAttribute('src','velha_mulher.jpg');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img)

    }
}