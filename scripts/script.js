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
        window.alert(JSON.stringify(lista))
        nmProd.value = ""
        qtdProd.value = ""
        nmProd.focus()
    }

}
