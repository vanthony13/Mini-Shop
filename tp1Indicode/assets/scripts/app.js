var soma = 0;
var listaDeEncomenda = [];
alert("Os itens encomendados seram vistos no console");

const showProduct = () => {
  for (i of listaDeEncomenda) {
    console.log(i.titulo + "---" + i.preco + "$00");
  }
};

class CarrinhoCompras {

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML =
     `<h2>Total: ${0}$00</h2>
      <button onclick="showProduct()">Encomendar</button>`;
    cartEl.className = "cart";
    return cartEl;
  }
}

class Produto {
  constructor(titulo, imageURL, preco, descricao) {
    this.titulo = titulo;
    this.imageURL = imageURL;
    this.preco = preco;
    this.descricao = descricao;
  }

  addToCart() {
    const cart = document.querySelector(".cart");
    const h2 = cart.querySelector("h2");
    soma = soma + this.preco;
    console.log(this.preco);
    h2.textContent = soma + "$00";

    // personalizacao
    const produtosEncomendados = {
      titulo: this.titulo,
      preco: this.preco,
      descricao: this.descricao,
    };
     listaDeEncomenda.push(produtosEncomendados);
  }

  render() {
    const li = document.createElement("li");
    li.classList.add("product-item");
    li.innerHTML = `<div><img src="${this.imageURL}" alt="${this.titulo}">
      <div class="product-item__content">
      <h2>${this.titulo}</h2>
      <h3>${this.preco}\$00</h3>
      <p>${this.descricao}</p>
      <button>Adicionar Cart</button>
      </div></div>
      `;

    const addCartButton = li.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return li;
  }
}

class ListaProdutos {
  constructor(produtos) {
    this.produtos = produtos;
  }

  render() {
    const app = document.getElementById("app");
    const ul = document.createElement("ul");
    ul.className = "product-list";

    for (const prod of this.produtos) {
      ul.append(prod.render());
    }
    app.append(ul);
  }
}

const produtos = [
  new Produto(
    "Laptop",
    "https://img.freepik.com/free-psd/digital-device-screen-mockup-vector-with-laptop-smartphone-with-gradient-wallpapers_53876-129214.jpg?t=st=1650013859~exp=1650014459~hmac=60a47c73333070750cc193e914bbd61a240d7dee79e68a40bfe4c457fd907318&w=740",
    250,
    "Computador portátil"
  ),
  new Produto(
    "Mesa",
    "https://img.freepik.com/free-vector/wood-picnic-table-with-benches-wooden-furniture-white-background_107791-5536.jpg?w=740",
    50,
    "Uma mesa simples"
  ),
];

const renderHook = document.getElementById("app");
const carrinho = new CarrinhoCompras();
const cartEl = carrinho.render();
renderHook.append(cartEl);

const pv = new ListaProdutos(produtos);
pv.render();
