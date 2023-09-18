function carregar(){
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    if (hora >= 0 && hora < 12) {
        mensagem.innerHTML = `Bom dia, agora são ${hora}h${minutos}!`    
        imagem.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        mensagem.innerHTML = `Boa tarde, agora são ${hora}h${minutos}!`
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#FFB52B'
    } else {
        mensagem.innerHTML = `Boa noite, agora são ${hora}h${minutos}!`
        imagem.src = 'noite.jpg'
        document.body.style.background = '#000430'
    }
}

