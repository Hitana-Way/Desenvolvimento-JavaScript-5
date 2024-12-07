// Criando um título
const titulo = document.createElement("h1");

titulo.id = 'titulo'; 
titulo.innerText = "Papelaria";

// Selecionando o elemento <body>
const body = document.querySelector("body");

// Adicionando o título no HML/ DOM
body.appendChild(titulo);

// Criando o elemento para o produto
const produto = document.createElement("div");
produto.className = "produto";

// Adicionando o conteúdo do produto
produto.innerHTML = `
 <div>
    <h2 class="nomeProduto">Caderno</h2>
    <img class="imgProduto" src="./img/caderno01.png" alt="Foto de 4 cadernos com animais na capa">
    <p class="descricaoProduto">Caderno com 200 folhas pautadas e capa dura.</p>
    <p class="valorProduto">R$9,99</p>
 </div>
`;

// Adicionando produto ao HTML/DOM
body.appendChild(produto);
