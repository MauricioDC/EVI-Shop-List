class Produto {
    constructor(nomeProduto, qtdProduto) {
        this.nomeProduto = nomeProduto;
        this.qtdProduto = qtdProduto;
    }
}

let nmProd = document.getElementById("itemLista")
let qtdProd = document.getElementById("qtdProduto")
let lista = []

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

    nome.innerHTML = produto.nomeProduto.toUpperCase()
    qtd.innerHTML = produto.qtdProduto
    qMenosB.innerText = "-"
    qMaisB.innerText = "+"
    qMaisB.addEventListener("click", function (e) {
        produto.qtdProduto = parseInt(produto.qtdProduto) + 1
        qtd.innerHTML = produto.qtdProduto
    })

    qMenosB.addEventListener("click", function (e) {
        if (produto.qtdProduto <= 1) {
            let confirm = window.confirm("Deseja remover o iten?")
            if (confirm === true) {
                let linha = document.querySelector("tr")
               let tbody = document.querySelector("tbody")
               tbody.deleteRow(linha);
            }
        } else {
            produto.qtdProduto = parseInt(produto.qtdProduto) - 1
            qtd.innerHTML = produto.qtdProduto
        }

    })
    qMenosL.appendChild(qMenosB)
    qMaisL.appendChild(qMaisB)
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
