var idade = 15
var pais = 'Brasi'
if(idade  >= 16 && pais == 'Brasil'){
    console.log('Você pode votar!')
    console.log('Você mora no Brasil')

}else if(idade < 16 && pais != 'Brasil'){
    console.log('Você não tem 16 anos e não mora no Brasil!')

}else if(idade >= 16 && pais != 'Brasil'){
    console.log('Você tem mais que 16 anos mas não mora no Brasil')
}


