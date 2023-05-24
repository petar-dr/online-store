//VIEW
export const view = (function () {
  const DOMString = {
    header: "header",
    main: "main",
    footer: "footer",
    delivery: "iconDelivery",
    service: "iconService",
  };
  function item(obj) {
    //div item
    const item = document.createElement("div");
    item.classList.add("item");
    // div article
    const article = document.createElement("div");
    article.classList.add("item__article");
    item.appendChild(article);
    //div for heart icon
    const articleHeart = document.createElement("div");
    articleHeart.classList.add("item__article__heart");
    article.appendChild(articleHeart);
    // heart icon
    const icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-heart");
    articleHeart.appendChild(icon);
    //a tag
    const aTag = document.createElement("a");
    aTag.setAttribute("href", "#");
    aTag.classList.add("item__article__tag");
    article.appendChild(aTag);
    // div for images
    const box = document.createElement("div");
    box.classList.add("item__article__tag__box");
    aTag.appendChild(box);
    // img background
    const imgBackground = document.createElement("img");
    imgBackground.setAttribute("src", obj.hoverImg);
    imgBackground.setAttribute("alt", obj.name);
    imgBackground.setAttribute("href", "#");
    imgBackground.classList.add("item__article__tag__box__background");
    box.appendChild(imgBackground);
    const img = document.createElement("img");
    // item img
    img.setAttribute("src", obj.img.img1);
    img.setAttribute("alt", obj.name);
    img.setAttribute("href", "#");
    img.classList.add("item__article__tag__box__img");
    box.appendChild(img);
    // div text
    const text = document.createElement("div");
    text.classList.add("item__article__tag__box__text");
    box.appendChild(text);
    // text p tag new
    const p = document.createElement("p");
    p.classList.add("item__article__tag__box__text__p");
    // obj.new ? p.classList.add("displayMark") : p.classList.add("noDisplayMark");
    p.innerHTML = "NEW";
    text.appendChild(p);
    // text h4 item name
    const name = document.createElement("h4");
    name.classList.add("item__article__tag__box__text__name");
    name.innerHTML = obj.name;
    text.appendChild(name);
    // text price
    const price = document.createElement("span");
    price.classList.add("item__article__tag__box__text__name");
    price.innerHTML = obj.price;
    text.appendChild(price);

    return item;
  }
  function loadDelivery() {
    const main = document.getElementById("main");
    const content = `   <div class="products">
    <aside class="products__aside">
      <h3>Delivery</h3>
     
    </aside>
    <div id="productsItems" class="products__items">OVO JE DELIVERY</div>
    </div>`;
    main.innerHTML = content;
  }
  function loadService() {
    const main = document.getElementById("main");
    const content = `   <div class="products">
    <aside class="products__aside">
      <h3>Service</h3>
     
    </aside>
    <div id="productsItems" class="products__items">OVO JE Service</div>
    </div>`;
    main.innerHTML = content;
  }
  function loadSection1() {
    const content = `<div class="section1">
    <div
      id="carouselExampleIndicators"
      class="section1__carousel carousel slide"
      data-bs-ride="carousel"
    >
      <div class="section1__carousel__indicatots carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <picture>
            <source
              media="(max-width: 400px)"
              srcset="../img/Carousel/xs/400_img1.jpg"
            />
            <source
              media="(max-width: 600px)"
              srcset="../img/Carousel/mobile/600_img1.jpg"
            />
            <source
              media="(max-width: 800px)"
              srcset="../img/Carousel/tablet/800_img1.jpg"
            />
            <img
              src="../img/Carousel/carouselImg1.jpg"
              class="d-block w-100"
              alt="carouselImg1"
            />
          </picture>
          <div class="my__caption my__caption--black">
            <h6>Pretty and comfortable</h6>
            <h2>Explore new collection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae voluptates nam quibusdam quas alias libero sapiente,
              laboriosam sunt ipsam esse in aut dolorem nemo id accusamus
              dolorum officiis? Consequatur, harum.
            </p>
            <a href="#" class="my__caption__a my__caption__a--black"
              >Buy now <span>&#8594;</span></a
            >
          </div>
        </div>
        <div class="carousel-item">
          <picture>
            <source
              media="(max-width: 400px)"
              srcset="../img/Carousel/xs/400_img2.jpg"
            />
            <source
              media="(max-width: 600px)"
              srcset="../img/Carousel/mobile/600_img2.jpg"
            />
            <source
              media="(max-width: 800px)"
              srcset="../img/Carousel/tablet/800_img2.jpg"
            />
            <img
              src="../img/Carousel/carouselImg2.jpg"
              class="d-block w-100"
              alt="carouselImg2"
            />
          </picture>
          <div class="my__caption my__caption--white">
            <h6>Simplicity</h6>
            <h2>Chair for everyone</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae voluptates nam quibusdam quas alias libero sapiente,
              laboriosam sunt ipsam esse in aut dolorem nemo id accusamus
              dolorum officiis? Consequatur, harum.
            </p>
            <a href="#" class="my__caption__a my__caption__a--white"
              >Buy now <span>&#8594;</span></a
            >
          </div>
        </div>
        <div class="carousel-item">
          <picture>
            <source
              media="(max-width: 400px)"
              srcset="../img/Carousel/xs/400_img3.jpg"
            />
            <source
              media="(max-width: 600px)"
              srcset="../img/Carousel/mobile/600_img3.jpg"
            />
            <source
              media="(max-width: 800px)"
              srcset="../img/Carousel/tablet/800_img3.jpg"
            />
            <img
              src="../img/Carousel/carouselImg3.jpg"
              class="d-block w-100"
              alt="carouselImg3."
            />
          </picture>
          <div class="my__caption my__caption--white">
            <h6>New product</h6>
            <h2>Chair with style</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae voluptates nam quibusdam quas alias libero sapiente,
              laboriosam sunt ipsam esse in aut dolorem nemo id accusamus
              dolorum officiis? Consequatur, harum.
            </p>
            <a href="#" class="my__caption__a my__caption__a--white"
              >Buy now <span>&#8594;</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div> `;
    return content;
  }
  function loadSection2() {
    const content = `<div class="section2">
      <a href="#" class="card text-center">
      <div class="card__divImg">
        <img
          class="card-img-top"
          src="../img/section2/chair.jpg"
          alt="Card image cap"
        />
      </div>
      <div class="card__text">
        <h2 class="card__text__title">Chairs</h2> 
   <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p> 
   <button class="card__text__btn">See more</button>
      </div>
    </a>
    <a href="#" class="card text-center">
      <div class="card__divImg">
        <img
          class="card-img-top"
          src="../img/section2/table.jpg"
          alt="Card image cap"
        />
      </div>
      <div class="card__text">
        <h2 class="card__text__title">Tables</h2>
   <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
 <button class="card__text__btn">See more</button>
      </div>
    </a>
    <a href="#" class="card text-center">
      <div class="card__divImg">
        <img
          class="card-img-top"
          src="../img/section2/sofa.jpg"
          alt="Card image cap"
        />
      </div>
      <div class="card__text">
        <h2 class="card__text__title">Sofas</h2> 
   <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p> 
 <button class="card__text__btn">See more</button>
      </div>
    </a>
  </div>  `;
    return content;
  }
  function loadSection3(obj) {
    const section3 = document.createElement("div");
    section3.classList.add("section3");
    section3.setAttribute("id", "section3");
    const title = document.createElement("div");
    title.classList.add("section3__title");
    title.innerHTML = `<div class="section3__title"> <h2> Popular products</h2</div>`;
    const popularProducts = document.createElement("div");
    popularProducts.classList.add("section3__popularProducts");
    obj.forEach((elem) => {
      popularProducts.appendChild(item(elem));
    });
    section3.appendChild(title);
    section3.appendChild(popularProducts);
    return section3;
  }
  return {
    getDOMString: function () {
      return DOMString;
    },
    section1: function () {
      return loadSection1();
    },
    section2: function () {
      return loadSection2();
    },
    section3: function (obj) {
      return loadSection3(obj);
    },
    loadDelivery: function () {
      return loadDelivery();
    },
    loadService: function () {
      return loadService();
    },
  };
})();
