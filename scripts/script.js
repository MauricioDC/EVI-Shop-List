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
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buttonADC").click();
    }
});

function montarLista(produto) {
        let tBody = document.querySelector("tbody")
        let qtd = document.createElement("td")
        let nome = document.createElement("td")
        let linha = document.createElement("tr")
        let remover = document.createElement("button")
        nome.innerHTML = produto.nomeProduto
        qtd.innerHTML =  produto.qtdProduto
        linha.appendChild(nome)
        linha.appendChild(qtd)
        tBody.appendChild(linha)
}

function addProduto() {

    if(nmProd.value.length == 0){
        window.alert("Favor informar o nome do produto!")
        nmProd.focus()
    } 
    else if (qtdProd.value == 0 || qtdProd.value < 0){
        window.alert("Favor informar a quantidade!")
        qtdProd.focus()
    } else {
        let produto = new Produto(nmProd.value, qtdProd.value)
        lista.push(produto)
        nmProd.value = ""
        qtdProd.value = ""
        console.log(JSON.stringify(produto))
        nmProd.focus()
        montarLista(produto)
    }

}
