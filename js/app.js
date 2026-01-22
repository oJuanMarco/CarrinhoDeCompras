function adicionar(){
    if(quantidade()===null){
        return;
    }
    carrinho();
}

function quantidade(){
    let qtd = document.getElementById("quantidade");
    let numeracao = parseInt(qtd.value);
    if(numeracao>100){
        alert("Informe uma quantidade abaixo de 100 itens");
        return null;
    }else if(numeracao==0){
        alert("Informe uma quantidade mínima de itens");
        return null;
    }else if(isNaN(numeracao)){
        alert("Informe a quantidade de itens");
        return null;
    }else{
        return numeracao;
    }
}

 let soma = 0;

function carrinho(){
    let produtos = document.getElementById("produto").value;
    let nomeProduto = produtos.split("-")[0];
    let valorProduto = produtos.split("R$")[1];
    let listaProdutos= document.getElementById ("lista-produtos");
    let total = document.getElementById ("valor-total");
    let quantia = quantidade();
    let preco = valorProduto*quantia;
    let qtd = document.getElementById("quantidade");

    soma = soma + preco;

    listaProdutos.innerHTML +=  
     `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantia}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
     </section>`;

    total.innerHTML = `<span class="texto-azul" id="valor-total">R$${soma}</span>`;
    qtd.value = " ";
}


function limpar(){
    document.getElementById ("lista-produtos").innerHTML = " ";
    document.getElementById ("valor-total").innerHTML = `<span class="texto-azul" id="valor-total">R$${" "}</span>`;
    soma = 0;
}