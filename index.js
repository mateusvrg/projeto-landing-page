var setaDireita = window.document.getElementById("seta-direita")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function rolarParaDireita() {
    bruna.style ="display:none"
    samantha.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex"
}

function rolarParaEsquerda() {
    samantha.style ="display:none"
    bruna.style ="display:flex"
    setaEsquerda.style ="display:none"
    setaDireita.style ="display:flex"
}
