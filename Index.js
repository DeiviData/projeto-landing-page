var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function rolarParaDireita() {
    Leonardo.style = "display:none"

    Samanta.style = "display:flex; margin-left: 0%; margin-right: 5%"

    Bruna.style = "display:flex; margin-left: -2.5%; margin-right: 0%"

    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-left: 35%; margin-top:105px"
    
}

function rolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Samanta.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
    
}