
// Função para carregar todos os produtos ao entrar na página. 
window.onload = async() => {

    console.log('AQUI DEVE APARECER UM OBJETO JSON')
  
    //  Div que vai receber os valores dos produtos
    const criaDiv = document.createElement('div')
    //  Classe para estilistar os produtos
    criaDiv.classList.add('produto')
  
    //  Área em que os produtos vão ficar.
    const areaDiv = document.querySelector('.secaoProdutos')

    let products = []; //Array para armazenas as informações dos produtos.

    //Try catch para acessar o objeto com as informações. 
    try {
      const produto = await fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
      const resultado = await produto.json();
      products = resultado.products
    } catch {
      console.log("Não foi possivel excutar essa ação!")
    }
    

      // ForEach para varrer a array com os produtos.
      products.forEach(produto => {
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
      R$ ${produto.installments.count} x de
      R$ ${produto.installments.value}
      </p>
      <br>
      <input class="btnComprar" type="button" value="COMPRAR">
      <br>
      <br>
      <br>

      `;
      console.log(divProduto.innerHTML);
      areaDiv.appendChild(divProduto);
    });

  }

  