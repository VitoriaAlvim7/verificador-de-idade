function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById(`txtano`)
    var res = window.document.querySelector(`div#res`)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = window.document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var gênero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            gênero = `Homem`
            if (idade >= 0 && idade < 10) {
                img.setAttribute(`src`, `assets/img/homemcrianca.png`)
            } else if (idade >= 10 && idade < 23) {
                img.setAttribute(`src`, `assets/img/homemjovem.png`)
            } else if (idade >= 23 && idade < 50) {
                img.setAttribute(`src`, `assets/img/homemadulto.png`)
            } else{
                img.setAttribute(`src`, `assets/img/homemidoso.png`)
            }
        } else if (fsex[1].checked) {
            gênero = `Mulher`
            if (idade >= 0 && idade < 10) {
                img.setAttribute(`src`, `assets/img/mulhercrianca.png`)
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute(`src`, `assetsimg/mulherjovem.png`)
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute(`src`, `assets/img/mulheradulta.png`)
            } else{
                img.setAttribute(`src`, `assets/img/mulheridosa.png`)
            }
        }
        res.innerHTML = `${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}