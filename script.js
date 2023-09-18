function carregar(){
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora <12) {
        mensagem.innerHTML = `Bom dia, agora são ${hora} horas!`    
        imagem.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        mensagem.innerHTML = `Boa tarde, agora são ${hora} horas!`
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#FFB52B'
    } else {
        mensagem.innerHTML = `Boa noite, agora são ${hora} horas!`
        imagem.src = 'noite.jpg'
        document.body.style.background = '#000430'
    }
}

