var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log(`Bom dia! Agora são horas.`)
}else if (hora <= 18){
    console.log(`Boa Tarde! Agora são horas.`)
}else{
    console.log(`Boa  Noite! Agora são  horas.`)
}