//VIEW
export const view = (function () {
  const DOMString = {
    header: "header",
    main: "main",
    footer: "footer",
  };
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
      z<a href="#" class="card text-center">
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
  };
})();
