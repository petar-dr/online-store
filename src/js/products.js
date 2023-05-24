const baseUrl = "http://localhost:5000";
const path = "/products";
var allProducts = [];
const products = document.getElementById("productsItems");
console.log(products)

async function getData(source, callback) {
  data = await fetch(baseUrl + source).then((response) => response.json());
  callback(data);
}

function print(data) {
  let content = "";
  data.forEach((elem) => {
    content += `<div class="item">
                <div class="article">
                <div class="article__heart">
                <i class="fa-solid fa-heart"></i>
                </div>
                <a href="#" class="article__tag">
                <div class="article__tag__box">
                <img
                    class="article__tag__box__background"
                    src=${elem.hoverImg}
                    alt=${elem.name}
          />
          <img
            class="article__tag__box__img"
            src=${elem.img.img1}
            alt=${elem.name}
          />
          <div class="article__tag__box__text">
            <p class="article__tag__box__text__p">${elem.new}</p>
            <h4 class="article__tag__box__text__name">${elem.name}</h4>
            <span class="article__tag__box__text__price">${elem.price}$</span>
          </div>
        </div>
      </a>
    </div>
  </div>`;
  });
  products.innerHTML = content;
}
getData(path, print);
