function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 13
    var mnt = data.getMinutes()
    var linear = document.getElementById('linear')

    msg.innerHTML = `Agora são ${hora}:${mnt} h.`

    if(hora >= 0 && hora < 12){
        img.src = "imagens/manha.png"
        linear.style.background = `linear-gradient(to bottom,
        #87ceeb 0%,
        #aee1f9 40%,
        #fefbd8 70%,
        #fff5cc 100%)`

    }else if(hora >= 12 && hora <18){
        img.src = "imagens/tarde.png"
        linear.style.background = `linear-gradient(to bottom,
        #0b1b2b 0%,
        #5b2a86 30%,
        #ff4e50 55%,
        #ff9a76 75%,
        #ffd27f 100%)`  
    }else{
        img.src = "imagens/noite.png"
        linear.style.background = `linear-gradient(to bottom,
        #0b1b2b 0%,
        #1a237e 40%,
        #283593 70%,
        #3f51b5 90%,
        #9fa8da 100%)`
    }
}
const botao = document.getElementById('atualizar')

botao.addEventListener('mouseenter', () =>{
    msg.style.fontSize = '1.4em'
    msg.style.transition = 'font-size .6s ease'
    
})

botao.addEventListener('mouseleave', () =>{
    msg.style.fontSize = '1em'
    msg.style.transition = 'font-size .4s ease'
    
})



