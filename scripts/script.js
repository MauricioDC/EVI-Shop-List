let Produto = function(){
    let nomeProduto
    let qtdProduto
    this.setNome = function(_nomeProduto){
        this.nomeProduto = _nomeProduto
    }
    this.setQtd = function(_qtdProduto){
        this.qtdProduto = _qtdProduto
    }
    
}

let nmProd = document.getElementById("itemLista")
let qtdProd = document.getElementById("qtdProduto")
let lista = []
let tabCriada = false

function criarTabela (){
    let hNome = document.createElement("th")
    let hQtd = document.createElement("th")
    let tabela = document.createElement("table")
    let head = document.createElement("thead")
    let body = document.createElement("tbody")
    let lNome = document.createElement("td")
    let lQtd = document.createElement("td")

    if(tabCriada == true){
        lNome.innerHTML = produto.nmProd
        lQtd.innerHTML = produo.qtdProd
        hNome.appendChild(lNome)
        hQtd.appendChild(lQtd)
    } else {
        hNome.innerHTML = "Nome"
        hQtd.innerHTML = "Quantidade"
        tabela.appendChild(head)
        tabela.appendChild(body)
        tabela.appendChild(hNome)
        tabela.appendChild(hQtd)
        tabela.id = "tabelaLista"
        tabCriada = true
        
        document.getElementById("lista").appendChild(tabela)
    } 
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
        let produto = new Produto()
        produto.setNome(nmProd.value)
        produto.setQtd(qtdProd.value)
        lista.push(produto)
        nmProd.value = ""
        qtdProd.value = ""
        nmProd.focus()
        criarTabela()
    }

}
