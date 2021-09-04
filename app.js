var nome = window.document.getElementById("nome")
var valorNome = nome.value

var descricao = window.document.getElementById("descricao")
var valorDescricao = descricao.value

var img = window.document.getElementById("img")
var valorImg = descricao.value


var enviar = window.document.getElementById("enviar")
// generator
enviar.addEventListener("click", function (nReset) {
    nReset.preventDefault()
    var divCard = document.createElement("div")
    divCard.setAttribute("id", "card")
    divCard.style.border = "10px solid #363944"
    divCard.style.width = "250px"
    divCard.style.height = "400px"
    divCard.style.background = "#BF8737"

    var divNome = document.createElement("div")
    divNome.setAttribute("id", "nome")
    divNome.innerHTML = nome.value
    divNome.style.fontSize = "15px";
    divNome.style.borderTop = "2px solid rgba(255,255,255,.7)"
    divNome.style.borderLeft = "2px solid rgba(255,255,255,.7)"
    divNome.style.borderRight = "2px solid rgba(0,0,0,.5)"
    divNome.style.borderBottom = "2px solid rgba(0,0,0,.5)"
    divNome.style.margin = "7px 7px"
    divNome.style.padding = "4px"

    var nomeIcon = document.createElement("span")
    nomeIcon.setAttribute("id", "symbol")
    nomeIcon.innerHTML = "<img src=\'./img/DARK.png\' width=\'25px\' fontSize=\'5px\' float=\'right\' marginTop=\' -4px\'>"
    // nomeIcon.setAttribute("src", "./img/DARK.png")
    nomeIcon.style.fontSize = "5px"
    nomeIcon.style.float = "right"
    nomeIcon.style.width = "25px"
    nomeIcon.style.marginTop = "-4px"
    divNome.appendChild(nomeIcon)
    divCard.appendChild(divNome)

    var divLevel = document.createElement("div")
    divLevel.setAttribute("id", "level")
    divLevel.innerHTML = "&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;"
    divLevel.style.textAlign = "right"
    divLevel.style.color = "yellow"
    divLevel.margin = "5px 20px"

    divCard.appendChild(divLevel)

    var pic = document.createElement("div")
    pic.setAttribute("id", "pic")
    pic.style.margin = "5px 20px"
    divCard.appendChild(pic)
    //dar append aqui?
    var picImg = document.createElement("img")
    picImg.setAttribute("src", `${img.value}`)
    picImg.style.border = "6px solid #545F7C"
    picImg.style.boxShadow = "2px 2px 2px rgba(0,0,0,.5)"
    picImg.style.width = "98%"
    divCard.appendChild(picImg)

    var divDescription = document.createElement("div")
    divDescription.setAttribute("id", "description")
    divDescription.style.margin = "5px"
    divDescription.style.background = "#DDCCB3"
    divDescription.style.padding = "3px"
    divDescription.style.border = "4px solid #B34930"


    var h2 = document.createElement("h3")
    h2.innerHTML = "[Monstro/Efeito]"
    h2.style.fontVariant = "small-caps"
    h2.style.margin = "0"
    h2.style.fontStyle = "normal"
    divDescription.appendChild(h2)

    var p = document.createElement("p")
    p.innerHTML = `${descricao.value}`
    p.style.fontStyle = "italic"
    p.style.fontSize = "19px"
    p.style.margin = "0"
    divDescription.appendChild(p)

    divCard.appendChild(divDescription)

    var stats = document.createElement("div")
    stats.setAttribute("id", "stats")
    stats.style.marginTop = "20px"
    stats.style.borderTop = "2px solid #000"
    stats.style.textAlign = "right"
    // var pStats = document.createElement("p")
    // pStats.style.marginTop = "-21px"
    // pStats.style.textAlign = "left"
    stats.innerHTML = "ATK / 2500  &nbsp;  DEF / 1200"
    // stats.appendChild(pStats)
    divDescription.appendChild(stats)
    // var cNome = document.createElement("p")
    // cNome.appendChild(document.createTextNode(nome.value))
    // divCard.appendChild(cNome)

    // var cDesc = document.createElement("p")
    // cDesc.appendChild(document.createTextNode(descricao.value))
    // divCard.appendChild(cDesc)

    // var cImg = document.createElement("IMG")
    // cImg.setAttribute("src", `${img.value}`)
    // // mudar 10 ou 50%
    // cImg.style.width = "10%"
    // cImg.style.height = "10%"
    // divCard.appendChild(cImg)
    document.body.appendChild(divCard)



})

// Reseter de Pagina e campos
var reset = window.document.getElementById("reset")

reset.addEventListener("click", function (param) {
    param.preventDefault()
    window.location.reload()
    nome.value = ""
    descricao.value = ""
    img.value = ""
})
