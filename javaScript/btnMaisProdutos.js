const botaoClicar = document.querySelector('.btnMaisProdutos')

  // Função do evento de click do botão. 

    botaoClicar.addEventListener('click', async()=>{
    const areaDiv = document.querySelector('.secaoProdutos')
  // Array para armazenar o objeto
    let productsPage2 = []

  // Try Catch para trazer os objetos da página 2
    try {
      const produtoPage2 = await fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2')
      const resultado = await produtoPage2.json();
      productsPage2 = resultado.products
    } catch {
      console.log("Não foi possivel excutar essa ação!")
    }

     // ForEach para varrer a array com os produtos.
      productsPage2.forEach(produto => {

    // Div que será criada com os objetos da página 2
      const divProduto = document.createElement('div');
      divProduto.className = 'produto';
      divProduto.innerHTML =
        `
        <img class="imgProduto" src="https://${produto.image}">
        <br>
        <h3 class="h3Produto" >${produto.name}</h3>
        <br>
        <p class="textoProduto" >${produto.description}</p>
        <br>
        <p class="textoProduto">De: R$ ${produto.oldPrice}</p>
        <br>
        <h2 class="h3Produto" >Por: R$ ${produto.price}</h2>
        <br>
        <p class="textoProduto">ou 
        R$${produto.installments.count} x de
        R$${produto.installments.value}
        </p>
        <br>
        <input class="btnComprar" type="button" value="COMPRAR">
        <br>
        <br>
        <br>
      `;
      console.log(divProduto.innerHTML);
      areaDiv.appendChild(divProduto);

    })

  })