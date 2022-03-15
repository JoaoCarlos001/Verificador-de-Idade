function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('ERRO !!!')
    }else{
        var fsex = document.getElementsByName('rad')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                    img.setAttribute('src', 'bebê homem.jpg')
            }else if(idade < 21){
                    img.setAttribute('src', 'jovem homem.jpg')
            }else if(idade <50){
                    img.setAttribute('src', 'homem adulto.jpg')
            }else{
                    img.setAttribute('src', 'idoso homem.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                    img.setAttribute('src', 'bebê mulher.jpg')
            }else if(idade < 21){
                    img.setAttribute('src', 'jovem mulher.jpg')
            }else if(idade <50){
                    img.setAttribute('src', 'mulher adulto.jpg')
            }else{
                    img.setAttribute('src', 'idosa mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `voce é ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}