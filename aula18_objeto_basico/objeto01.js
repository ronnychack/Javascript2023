let amigo = {nome: 'Jose',
             sexo: 'M',
             peso: 80,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(100)
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)