class Produto { //Criando uma classe para produto.
    constructor(nomeProduto, qtdProduto) { //Construtor da Classe que recebe um parametro nome e um quantidade.
        this.nomeProduto = nomeProduto;
        this.qtdProduto = qtdProduto;
    }
}

let nmProd = document.getElementById("itemLista") //Armazenando o elemento HTML input text em uma variavel para manipular no javascript.
let qtdProd = document.getElementById("qtdProduto") //Armazenando o elemento HTML input number em uma variavel para manipular no javascript.
let lista = [] //Criando um Vetor para armazenar a lista, penso em futuramente utilizar ele para enviar dados ao banco.
var contador = 0 //Contador criado para atribuir um ID sequencial as linhas da tabela que guarda a lista de compra.

document.getElementById("qtdProduto") //Função criada para ser acionada ao preencher a quantidade e pressionar a tecla ENTER.
    .addEventListener("keyup", function (event) { //Ela adiciona uma escuta ao input number;
        event.preventDefault();
        if (event.keyCode === 13) { //Cria uma condicional para verificar se o enter foi pressionado;
            document.getElementById("buttonADC").click(); //Caso true chama o elemento HTML button e da um "click", adicionando o produto a lista.
        }
    });

function montarLista(produto) { //Função criada para montar e exibir a lista de comprar, utilizando o elemento HTML table.
    let tBody = document.querySelector("tbody") //Criando um elemento HTML tbody que é o corpo da tabela e atribuindo a uma variavel.
    let qtd = document.createElement("td") //Criando um elemento HTML td que é uma coluna e atribuindo a uma variavel.
    let nome = document.createElement("td")// ----------------------------------------------------------------
    let qMenosL = document.createElement("td") //----------------------------------------------------------------
    let qMaisL = document.createElement("td") //----------------------------------------------------------------
    let linha = document.createElement("tr") //Criando um elemento HTML tr que linha e atribuindo a uma variavel.
    let qMenosB = document.createElement("button") //Criando um elemento HTML button e atribuindo a uma variavel.
    let qMaisB = document.createElement("button")//--------------------------------------------------------
    let linhaN = document.createElement("td")//Criando um elemento HTML td que é uma coluna para receber o mesmo contador que é utilizado para gerar o ID e exibilo na tela.

    linha.setAttribute("id", contador); contador++ //Recuperando a variavel linha criada acima e setando um novo atributo a ela, o id, ->
    // -> recebendo o contador como valor e incrementando o mesmo no fim.
    nome.innerHTML = produto.nomeProduto.toUpperCase() //Pegando o valor que está na variavel nomeProduto pertencente a classe produto e atribuindo a variavel ->
    // -> nome criada acima, no seu innerHTML, seu corpo de exibição, utilizando o metodo toUpperCase para deixar o texto digitado todo em maiusculo.
    qtd.innerHTML = produto.qtdProduto //Mesmo procedimento com o valor da variavel qtdProduto.
    qMenosB.innerText = "-" //Atribuindo um texto ao botão de menos criado acima.
    qMaisB.innerText = "+" //Atribuindo um texto ao botão de mais criado acima.
    linhaN.innerText = contador //Atribuindo o valor do contador a coluna que ira exibilo.
    qMenosB.addEventListener("click", function (e) { //Adicionando uma função de escuta ao botao de menos para adicionar a funcionalidade de -> 
        //-> diminuir a quantidade e futuramente deletar o item se o valor for inferior a 1.
        if (produto.qtdProduto <= 1) { //Condicional para avaliar se o produto está com a quantidade igual ou menor que um.
            removeRow(linha.getAttribute("this.id")); //Chamada da função que deletaria o item, porem precisa ser ajustada.
        } else { //Caso a condição acima não seja atendida o botão apenas decrementa a quantidade.
            produto.qtdProduto = parseInt(produto.qtdProduto) - 1 //Atribuindo ao objeto produto o atributo qtdProduto com o valor decrementado.
            qtd.innerHTML = produto.qtdProduto //Atribuindo ao elemento HTML o valor da variavel qtdProduto.
        }

        let listaVazia = document.querySelector("tbody").children.length //Criando uma variavel para armazenar quantos "filhos" tem o body.
        if (listaVazia >= 0) { //caso o valor seja menor ou igual a zero indicando que a lista está vazia o contador das linhas zera.
            contador = 0
        }
    })
    qMaisB.addEventListener("click", function (e) {//Mesma função descrita acima porem incrementando a quantidade.
        produto.qtdProduto = parseInt(produto.qtdProduto) + 1
        qtd.innerHTML = produto.qtdProduto
    })
    qMenosL.appendChild(qMenosB) //Adicionando o elemento button a coluna.
    qMaisL.appendChild(qMaisB)//--------------------------------------------------------
    linha.appendChild(linhaN)//Adicionando a coluna do contador a linha.
    linha.appendChild(nome)//Adicionando a coluna do nome a linha.
    linha.appendChild(qtd) //Adicionando a coluna da quantidade a linha.
    linha.appendChild(qMaisL)//Adicionando a coluna do elemento button a linha.
    linha.appendChild(qMenosL)// ----------------------------------------------------------------
    tBody.appendChild(linha)//Adicionando a linha ao elemento tbody corpo da tabela.
}

function addProduto() { //Função para adicionar o objeto do produto a lista, função criada acima.

    if (nmProd.value.length == 0) { //Validando se o campo de nome não está em branco.
        window.alert("Favor informar o nome do produto!")//Caso true exibindo um alerta;
        nmProd.focus()//Colocando o foco no campo;
        nmProd.style.border = "2px solid red"//Pintando a borda de vermelho.
        //@Caio nesse trecho que você vai criar a função para tornar a borda vermelha.
    }
    else if (qtdProd.value == 0 || qtdProd.value < 0) {//Mesma função descrita acima porem para o campo quantidade.
        window.alert("Favor informar a quantidade!")
        qtdProd.focus()
        //@Caio nesse trecho que você vai criar a função para tornar a borda vermelha.
    } else { //Caso não entre em nenhum dos laços acima o produto sera instanciado.
        let produto = new Produto(nmProd.value, qtdProd.value) //Instanciando o produto, passando a ele o valor do elemento HTML input text e input number como parametro.
        lista.push(produto)//Adicionando o produto ao vetor.
        nmProd.value = "" //Deixando o campo limpo.
        qtdProd.value = ""//----------------------------------------------------------------
        nmProd.focus()//Setando foco no campo.
        montarLista(produto)//Chamando a função de montar a lista passando como parametro o produto criado.
    }

}

function removeRow(r) { //Função criada para deletar a linha da tabela criada acima.
    document.querySelector("tbody").deleteRow(r) //Recuperando o elemento do corpo da tabela, utilizando o metodo deleteRow para deletar -> 
    // -> a linha passando como parametro a linha recebida.
}

