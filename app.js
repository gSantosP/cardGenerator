var nome = window.document.getElementById("nome")
var valorNome = nome.value

var descricao = window.document.getElementById("descricao")
var valorDescricao = descricao.value

var img = window.document.getElementById("img")
var valorImg = descricao.value


var enviar = window.document.getElementById("enviar")

enviar.addEventListener("click", function(nReset){
    nReset.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("name","card")
    // config da div
    // div.style.width = "100px";
    // div.style.height = "100px";
    // div.style.background = "red";
    // div.style.color = "white";
    var name = document.getElementsByName("card").innerHTML = "<p>" + nome.value + "</p>"
    // document.body.appendChild(name)
    // divcard.innerHTML = valorNome
    var cNome = document.createElement("p")
    cNome.appendChild(document.createTextNode(nome.value))
    div.appendChild(cNome)

    var cDesc = document.createElement("p")
    cDesc.appendChild(document.createTextNode(descricao.value))
    div.appendChild(cDesc)

    var cImg = document.createElement("IMG")
    cImg.setAttribute("src", `${img.value}`)
    // cImg.src = `${img.value}`
    // mudar 10 ou 50%
    cImg.style.width = "10%"
    cImg.style.height = "10%"
    // document.getElementById("img").appendChild(img)
    div.appendChild(cImg)
    // cImg.appendChild(document.cretae)


    document.body.appendChild(div)

    
})


// Reseter de Pagina e campos
var reset = window.document.getElementById("reset")

reset.addEventListener("click", function(param){
    param.preventDefault()
    window.location.reload()
    nome.value = ""
    descricao.value = ""
    img.value = ""
    // var body = document.querySelector("body")
    // var divs = document.querySelectorAll("div")
    // document.body.removeChild(divs)
    
})

// var div = document.createElement("div")
// document.body.main.appendChild(div)






// var botaoCreateDiv = document.createElement("button");
// var botaoTextoCreateDiv = document.createTextNode("CreateDiv");
// botaoCreateDiv.setAttribute("id", "creatediv-button");

// botaoCreateDiv.appendChild(botaoTextoCreateDiv);
// form.appendChild(botaoCreateDiv);

