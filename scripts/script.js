class Produto {
    constructor(nomeProduto, qtdProduto) {
        this.nomeProduto = nomeProduto;
        this.qtdProduto = qtdProduto;
    }
}

let nmProd = document.getElementById("itemLista")
let qtdProd = document.getElementById("qtdProduto")
let lista = []
var contador = 0

document.getElementById("qtdProduto")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("buttonADC").click();
        }
    });

function montarLista(produto) {
    let tBody = document.querySelector("tbody")
    let qtd = document.createElement("td")
    let nome = document.createElement("td")
    let qMenosL = document.createElement("td")
    let qMaisL = document.createElement("td")
    let linha = document.createElement("tr")
    let qMenosB = document.createElement("button")
    let qMaisB = document.createElement("button")
    let linhaN = document.createElement("td")

    linha.setAttribute("id", contador); contador++
    nome.innerHTML = produto.nomeProduto.toUpperCase()
    qtd.innerHTML = produto.qtdProduto
    qMenosB.innerText = "-"
    qMaisB.innerText = "+"
    linhaN.innerText = contador
    qMenosB.addEventListener("click", function (e) {
        if (produto.qtdProduto <= 1) {
            qMenosB.disabled = true
        } else if(produto.qtdProduto >= 1){
            qMenosB.disabled = false
            produto.qtdProduto = parseInt(produto.qtdProduto) - 1
            qtd.innerHTML = produto.qtdProduto
        }

    })
    qMaisB.addEventListener("click", function (e) {
        produto.qtdProduto = parseInt(produto.qtdProduto) + 1
        qtd.innerHTML = produto.qtdProduto
    })
    qMenosL.appendChild(qMenosB)
    qMaisL.appendChild(qMaisB)
    linha.appendChild(linhaN)
    linha.appendChild(nome)
    linha.appendChild(qtd)
    linha.appendChild(qMaisL)
    linha.appendChild(qMenosL)
    tBody.appendChild(linha)
}

function addProduto() {

    if (nmProd.value.length == 0) {
        window.alert("Favor informar o nome do produto!")
        nmProd.focus()
    }
    else if (qtdProd.value == 0 || qtdProd.value < 0) {
        window.alert("Favor informar a quantidade!")
        qtdProd.focus()
    } else {
        let produto = new Produto(nmProd.value, qtdProd.value)
        lista.push(produto)
        nmProd.value = ""
        qtdProd.value = ""
        nmProd.focus()
        montarLista(produto)
    }

}

function removeRow(r) {
    document.querySelector("tbody").deleteRow(r)
}