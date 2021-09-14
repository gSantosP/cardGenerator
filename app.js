// parte usada para obter dados dos campos
var nome = window.document.getElementById("nome")

var descricao = window.document.getElementById("descricao")

var img = window.document.getElementById("img")




//****************** */
// Meta: Refatorar esse codigo para POO, com um classe, e ao clicar no botao
// gerar card, o programa deve instanciar um objeto com os nomes dos campo
// e com os valores 
//****************** */
var enviar = window.document.getElementById("enviar")

// gerador de divs estilizadas com os campos preenchidos no forms
enviar.addEventListener("click", function (nReset) {
    nReset.preventDefault()

    var valorNome = nome.value.trim();
    var valorDescricao = descricao.value.trim();
    var valorImg = img.value.trim();
    //************ */
    //Validações
    if(valorNome == "" || valorDescricao == "" || valorImg == ""){
        window.alert("Por favor, preencha todos os campos")
    }
    else if (valorNome > 150){
        window.alert("Utilize menos de 150 caracteres")
    }
    else {

        var divCard = document.createElement("div")
        divCard.setAttribute("id", "card")
        divCard.style.border = "10px solid #363944"
        divCard.style.width = "250px"
        divCard.style.height = "400px"
        divCard.style.background = "#BF8737"
        divCard.style.display = "flex"
        divCard.style.flexDirection = "column"

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
        divLevel.style.marginRight = "9px"
        divLevel.style.marginTop = "-7px"
    


        divCard.appendChild(divLevel)

        // var pic = document.createElement("div")
        // pic.setAttribute("id", "pic")
        // pic.style.margin = "5px 20px"
        // divCard.appendChild(pic)

        // NOTA DO ARTHUR: tire a tag pic do card quando fiz os ajustes ultimos finos

        //dar append aqui?

        /* Modifiquei essa parte do código
        imgBox é uma div q contem a imagem da carta */

        var imgBox = document.createElement("div")
        imgBox.setAttribute("id", "imgBox")
        imgBox.style.height = "200px"    
        imgBox.style.width = "218px"    
        imgBox.style.margin = "5px"
        imgBox.style.marginBottom = "0px"
   

        var picImg = document.createElement("img")
        picImg.setAttribute("src", `${img.value}`)
        picImg.style.border = "6px solid #545F7C"
        picImg.style.boxShadow = "2px 2px 2px rgba(0,0,0,.5)"
        picImg.style.width = "inherit"
        picImg.style.height = "inherit"

        imgBox.appendChild(picImg)
        divCard.appendChild(imgBox)

        /*Fim da primeira parte modificada por mim - Arthur */

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

        /* Segunda parte que eu modifiquei tentar ajustar o texto da descrição. Nao consegui resolver 
        entao nao fez nenhuma diferença real e visual no site por enquanto. A tag p so esta dentro de
        uma div chamada pBox. (E no fim do arquivo css tem um comentario explicando qual era a minha ideia inicial) */ 
        
        var pBox = document.createElement("div")
        pBox.style.height = "fit-content"
        pBox.style.display = "flex"
        pBox.style.textAlign = "justify"
        divDescription.appendChild(pBox)

        var p = document.createElement("p")
        p.innerHTML = `${descricao.value}`
        p.setAttribute("class", "textoDesc")
        p.style.fontStyle = "italic"
        p.style.margin = "0"
        pBox.appendChild(p)

        divCard.appendChild(divDescription)

        /* Fim da segunda parte do codigo que eu alterei - Arthur */

        var stats = document.createElement("div")
        stats.setAttribute("id", "stats")
        stats.style.marginTop = "20px"
        stats.style.borderTop = "2px solid #000"
        stats.style.textAlign = "right"

        stats.innerHTML = "ATK / 2500  &nbsp;  DEF / 1200"
        // stats.appendChild(pStats)
        divDescription.appendChild(stats)




        // var cImg = document.createElement("IMG")
        // cImg.setAttribute("src", `${img.value}`)
        // // mudar 10 ou 50%
        // cImg.style.width = "10%"
        // cImg.style.height = "10%"
        // divCard.appendChild(cImg)
        document.body.appendChild(divCard)
        }

        console.log(valorDescricao)
        console.log(valorImg)
        console.log(valorNome)


})

// Botao que eseta a Pagina e os campos
var reset = window.document.getElementById("reset")

reset.addEventListener("click", function (param) {
    param.preventDefault()
    window.location.reload()
    nome.value = ""
    descricao.value = ""
    img.value = ""
})
// botao que "alerta" com o manual de instruções
var manual = document.getElementById("manual")
manual.addEventListener("click", function(nReset){
    nReset.preventDefault()
    window.alert('Escolha uma imagem no google e clique em "Copiar link da imagem"\n Depois cole em "Url da imagem"')
})
// botao que leva a pagina "time"
var btnTime = document.getElementById("time")
btnTime.addEventListener("click", function(nReset){
    nReset.preventDefault()
    window.location = "./alunos/index.html"
})


