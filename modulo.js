

// Essa função é praticamente identica à função que gera cards
// no eventlistener do botão enviar. Porém ela é utilizada para
// criar os cards com as informações armazenadas no sessionStorage
// assim alguns funcionamentos nao estao presentes, e ela tambem recebe
// como argumentos as informações do array de objetos no sessionStorage

//Assim o código ficou redundante. Mas foi o único jeito que eu achei para que
//eu não precisasse reescrever uma grande parte do código - Arthur



function criaArmazenadas(nome,imagem,desc) {
    
    let divCard = document.createElement("div")
    divCard.setAttribute("id", "card")
    divCard.style.border = "10px solid #363944"
    divCard.style.width = "250px"
    divCard.style.height = "400px"
    divCard.style.background = "#BF8737"
    divCard.style.display = "flex"
    divCard.style.flexDirection = "column"

    let divNome = document.createElement("div")
    divNome.setAttribute("id", "nome")
    divNome.innerHTML = nome
    divNome.style.fontSize = "15px";
    divNome.style.borderTop = "2px solid rgba(255,255,255,.7)"
    divNome.style.borderLeft = "2px solid rgba(255,255,255,.7)"
    divNome.style.borderRight = "2px solid rgba(0,0,0,.5)"
    divNome.style.borderBottom = "2px solid rgba(0,0,0,.5)"
    divNome.style.margin = "7px 7px"
    divNome.style.padding = "4px"

    let nomeIcon = document.createElement("span")
    nomeIcon.setAttribute("id", "symbol")
    nomeIcon.innerHTML = "<img src=\'./img/DARK.png\' width=\'25px\' fontSize=\'5px\' float=\'right\' marginTop=\' -4px\'>"
    // nomeIcon.setAttribute("src", "./img/DARK.png")
    nomeIcon.style.fontSize = "5px"
    nomeIcon.style.float = "right"
    nomeIcon.style.width = "25px"
    nomeIcon.style.marginTop = "-4px"
    divNome.appendChild(nomeIcon)
    divCard.appendChild(divNome)

    let divLevel = document.createElement("div")
    divLevel.setAttribute("id", "level")
    divLevel.innerHTML = "&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;"
    divLevel.style.textAlign = "right"
    divLevel.style.color = "yellow"
    divLevel.style.marginRight = "9px"
    divLevel.style.marginTop = "-7px"



    divCard.appendChild(divLevel)

    // var pic = document.createElement("div")
    // pic.setAttribute("id", "pic")
    // pic.style.margin = "5px 20px"
    // divCard.appendChild(pic)

    // NOTA DO ARTHUR: tirei a tag pic do card quando fiz os ajustes ultimos finos

    //dar append aqui?

    /* Modifiquei essa parte do código
    imgBox é uma div q contem a imagem da carta */

    let imgBox = document.createElement("div")
    imgBox.setAttribute("id", "imgBox")
    imgBox.style.height = "200px"    
    imgBox.style.width = "218px"    
    imgBox.style.margin = "5px"
    imgBox.style.marginBottom = "0px"


    let picImg = document.createElement("img")
    picImg.setAttribute("src", `${imagem}`)
    picImg.style.border = "6px solid #545F7C"
    picImg.style.boxShadow = "2px 2px 2px rgba(0,0,0,.5)"
    picImg.style.width = "inherit"
    picImg.style.height = "inherit"

    imgBox.appendChild(picImg)
    divCard.appendChild(imgBox)

    /*Fim da primeira parte modificada por mim - Arthur */

    let divDescription = document.createElement("div")
    divDescription.setAttribute("id", "description")
    divDescription.style.margin = "5px"
    divDescription.style.background = "#DDCCB3"
    divDescription.style.padding = "3px"
    divDescription.style.border = "4px solid #B34930"


    let h2 = document.createElement("h3")
    h2.innerHTML = "[Monstro/Efeito]"
    h2.style.fontVariant = "small-caps"
    h2.style.margin = "0"
    h2.style.fontStyle = "normal"
    divDescription.appendChild(h2)

    /* Segunda parte que eu modifiquei tentar ajustar o texto da descrição. Nao consegui resolver 
    entao nao fez nenhuma diferença real e visual no site por enquanto. A tag p so esta dentro de
    uma div chamada pBox. (E no fim do arquivo css tem um comentario explicando qual era a minha ideia inicial) */ 
    
    let pBox = document.createElement("div")
    pBox.style.height = "fit-content"
    pBox.style.display = "flex"
    pBox.style.textAlign = "justify"
    divDescription.appendChild(pBox)

    let p = document.createElement("p")
    p.innerHTML = `${desc}`
    p.setAttribute("class", "textoDesc")
    p.style.fontStyle = "italic"
    p.style.margin = "0"
    pBox.appendChild(p)

    divCard.appendChild(divDescription)

    /* Fim da segunda parte do codigo que eu alterei - Arthur */

    let stats = document.createElement("div")
    stats.setAttribute("id", "stats")
    stats.style.marginTop = "20px"
    stats.style.borderTop = "2px solid #000"
    stats.style.textAlign = "right"

    stats.innerHTML = "ATK / 2500  &nbsp;  DEF / 1200"
    // stats.appendChild(pStats)
    divDescription.appendChild(stats)

    document.body.appendChild(divCard)
}