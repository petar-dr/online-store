//VIEW
export const view = (function () {

  const footerMenuData = [
    {
      title: "Costumer service",
      content: [{ name: "Costumer support", link: "support.html" }, { name: "Delivery", link: "delivery.html" }],

    },
    {
      title: "Information",
      content: [{ name: "Term of use", link: "termofuse.html" }, { name: "Privacy policy", link: "privacypolicy.html" }],


    },
    {
      title: "Stay in touch",
      content: [{ name: "Facebook", link: "http://www.facebook.com" }, { name: "Instagram", link: "http://www.instagram.com" }, { name: "Pinterest", link: "http://www.pinterest.com" }, { name: "Linkedin", link: "http://www.linkedin.com" }],

    },
    {
      title: "About us",
      content: [{ name: "Our Store", link: "#" }, { name: "Production", link: "#" }],
    },
  ];

  const cardsSection2 = [
    {
      imageSrc: "../img/section2/chair.jpg",
      imageAlt: "Card image cap",
      title: "Chairs",
      aUrl: "products.html?category=chairs",
      content: "",
    },
    {
      imageSrc: "../img/section2/table.jpg",
      imageAlt: "Card image cap",
      title: "Tables",
      aUrl: "products.html?category=tables",
      content: "",
    },
    {
      imageSrc: "../img/section2/sofa.jpg",
      imageAlt: "Card image cap",
      title: "Sofas",
      aUrl: "products.html?category=sofas",
      content: "",
    },
  ];

  function item(obj, itemClass2) {
    //div item
    const item = document.createElement("div");
    item.classList.add("item", itemClass2);
    // div article
    const article = document.createElement("div");
    article.classList.add("item__article");
    item.appendChild(article);
    const aTag = document.createElement("a");
    let url = "product.html?id=" + obj.id;
    aTag.setAttribute("href", url);
    aTag.classList.add("item__article__tag");
    article.appendChild(aTag);
    // div for images
    const box = document.createElement("div");
    box.classList.add("item__article__tag__box");
    aTag.appendChild(box);
    // img background
    const imgBackground = document.createElement("img");
    imgBackground.setAttribute("id", "itemBackground");
    imgBackground.setAttribute("src", obj.hoverImg);
    imgBackground.setAttribute("alt", obj.name);

    imgBackground.classList.add("item__article__tag__box__background");
    box.appendChild(imgBackground);
    const img = document.createElement("img");
    // item img
    img.setAttribute("src", obj.img.img1);
    img.setAttribute("alt", obj.name);
    img.classList.add("item__article__tag__box__img");
    box.appendChild(img);
    // div text
    const text = document.createElement("div");
    text.classList.add("item__article__tag__box__text");
    box.appendChild(text);
    // marksBox
    const marksBox = document.createElement("div");
    marksBox.classList.add("item__article__tag__box__text__marksBox");
    text.appendChild(marksBox);
    // text p tag new
    if (obj.new) {
      const spanNew = document.createElement("span");
      spanNew.classList.add("item__article__tag__box__text__marksBox__spanNew");
      spanNew.innerHTML = "NEW";

      marksBox.appendChild(spanNew);
    }
    if (obj.discount > 0) {
      const spanDis = document.createElement("span");
      spanDis.classList.add("item__article__tag__box__text__marksBox__spanDis");
      spanDis.innerHTML = `<strong>-</strong> ${obj.discount}%`;
      marksBox.appendChild(spanDis);
    }
    // text h4 item name
    const name = document.createElement("h4");
    name.classList.add("item__article__tag__box__text__name");
    name.innerHTML = obj.name;
    text.appendChild(name);

    // priceBox
    const priceBox = document.createElement("div");
    priceBox.classList.add("item__article__tag__box__text__priceBox");
    text.appendChild(priceBox);

    //price with discount
    if (obj.discount > 0) {
      const oldPrice = document.createElement("del");
      oldPrice.classList.add(
        "item__article__tag__box__text__priceBox__oldPrice"
      );
      oldPrice.innerHTML = `${obj.price}.00&euro;`;

      priceBox.appendChild(oldPrice);

      let newPrice = obj.price - Math.floor(obj.price * (obj.discount / 100));

      const price = document.createElement("span");
      price.classList.add("item__article__tag__box__text__priceBox__price");
      price.innerHTML = ` ${newPrice}.00&euro;`;
      priceBox.appendChild(price);
    }
    //price without discount
    else {
      const price = document.createElement("span");
      price.classList.add("item__article__tag__box__text__priceBox__price");
      price.innerHTML = ` ${obj.price}.00&euro;`;
      priceBox.appendChild(price);
    }

    return item;
  }

  // header and footer
  function loadHeader() {
    // create header element
    const header = document.createElement("header");
    header.id = "header";
    header.classList.add("header", "container-fluid");

    // Create header__top element
    const headerTop = document.createElement("div");
    headerTop.classList.add("header__top");
    header.appendChild(headerTop);

    // Create header__top__text element
    const headerTopText = document.createElement("snap");
    headerTopText.classList.add("header__top__text");
    headerTopText.textContent = "Welcome to furniture store.";
    headerTop.appendChild(headerTopText);

    // Create header__main element
    const headerMain = document.createElement("div");
    headerMain.classList.add("header__main");
    header.appendChild(headerMain);

    // Create header__main__left element
    const headerMainLeft = document.createElement("div");
    headerMainLeft.classList.add("header__main__left", "col-lg-4", "col-xl-4");
    headerMain.appendChild(headerMainLeft);
    //Create a tag for Delivery
    const aDelivery = document.createElement("a");
    aDelivery.setAttribute("href", "delivery.html");
    headerMainLeft.appendChild(aDelivery);

    // Create iconDelivery element
    const iconDelivery = document.createElement("span");
    iconDelivery.id = "iconDelivery";
    iconDelivery.classList.add(
      "header__main__left__first",
      "p--tb",
      "text--medium"
    );
    aDelivery.appendChild(iconDelivery);

    // Create iconDelivery icon element
    const iconDeliveryIcon = document.createElement("i");
    iconDeliveryIcon.classList.add("icon--left", "fa-solid", "fa-truck");
    iconDelivery.appendChild(iconDeliveryIcon);
    iconDelivery.innerHTML += "Delivery";

    //Create a tag for Service
    const aService = document.createElement("a");
    aService.setAttribute("href", "support.html");
    headerMainLeft.appendChild(aService);

    // Create iconService element
    const iconService = document.createElement("span");
    iconService.id = "iconService";
    iconService.classList.add(
      "header__main__left__second",
      "p--tb",
      "text--medium",
      "ml--20px"
    );
    aService.appendChild(iconService);

    // Create iconService icon element
    const iconServiceIcon = document.createElement("i");
    iconServiceIcon.classList.add("icon--left", "fa-solid", "fa-phone");
    iconService.appendChild(iconServiceIcon);
    iconService.innerHTML += "Customer support";

    // Create header__main__middle element
    const headerMainMiddle = document.createElement("div");
    headerMainMiddle.classList.add(
      "header__main__middle",
      "col-11",
      "col-sm-10",
      "col-md-6",
      "col-lg-4",
      "col-xl-4"
    );
    headerMain.appendChild(headerMainMiddle);

    // Create header__main__middle link element
    const middleLink = document.createElement("a");
    middleLink.href = "index.html";
    headerMainMiddle.appendChild(middleLink);

    // Create middleLink heading element
    const middleLinkHeading = document.createElement("h1");
    middleLinkHeading.textContent = "furniture store";
    middleLink.appendChild(middleLinkHeading);

    // Create header__main__right element
    const headerMainRight = document.createElement("div");
    headerMainRight.classList.add(
      "header__main__right",
      "col-1",
      "col-sm-2",
      "col-md-6",
      "col-lg-4",
      "col-xl-4"
    );
    headerMain.appendChild(headerMainRight);

    // Create search icon
    const searchIcon = document.createElement("a");
    searchIcon.setAttribute("href", "search.html");

    searchIcon.classList.add(
      "header__main__right__search",
      "p--tb",
      "ml--20px",
      "text--medium"
    );
    headerMainRight.appendChild(searchIcon);

    // Create search icon element
    const searchIconElement = document.createElement("i");
    searchIconElement.classList.add("fa-solid", "fa-magnifying-glass");
    searchIcon.appendChild(searchIconElement);

    // Create account icon
    const accountIcon = document.createElement("a");
    accountIcon.setAttribute("href", "account.html");
    accountIcon.classList.add(
      "header__main__right__profile",
      "p--tb",
      "ml--20px",
      "text--medium"
    );
    headerMainRight.appendChild(accountIcon);

    // Create account icon element
    const accountIconElement = document.createElement("i");
    accountIconElement.classList.add("fa-solid", "fa-user");
    accountIcon.appendChild(accountIconElement);

    // Create favorite icon
    const favoriteIcon = document.createElement("a");
    favoriteIcon.setAttribute("href", "favorite.html");

    favoriteIcon.classList.add(
      "header__main__right__favorite",
      "p--tb",
      "ml--20px",
      "text--medium"
    );
    headerMainRight.appendChild(favoriteIcon);

    // Create favorite icon element
    const favoriteIconElement = document.createElement("i");
    favoriteIconElement.classList.add("fa-solid", "fa-heart");
    favoriteIcon.appendChild(favoriteIconElement);

    // Create cart icon
    const cartIcon = document.createElement("a");
    cartIcon.setAttribute("href", "cart.html");
    cartIcon.classList.add(
      "header__main__right__cart",
      "p--tb",
      "ml--20px",
      "text--medium"
    );
    headerMainRight.appendChild(cartIcon);

    // Create cart icon element
    const cartIconElement = document.createElement("i");
    cartIconElement.classList.add("fa-solid", "fa-bag-shopping");
    cartIcon.appendChild(cartIconElement);

    // Create menu button
    const menuBtnInput = document.createElement("input");
    menuBtnInput.type = "checkbox";
    menuBtnInput.id = "menu-btn";
    menuBtnInput.classList.add("btnH");
    headerMainRight.appendChild(menuBtnInput);

    // Create menu button label
    const menuBtnLabel = document.createElement("label");
    menuBtnLabel.htmlFor = "menu-btn";
    headerMainRight.appendChild(menuBtnLabel);

    // Create ham-button element
    const hamButton = document.createElement("div");
    hamButton.id = "hamBtn";

    hamButton.classList.add("ham", "header__main__right__ham");
    menuBtnLabel.appendChild(hamButton);

    // Create line1 element
    const line1 = document.createElement("div");
    line1.classList.add("line1", "line");
    hamButton.appendChild(line1);

    // Create line2 element
    const line2 = document.createElement("div");
    line2.classList.add("line2", "line");
    hamButton.appendChild(line2);

    // Create line3 element
    const line3 = document.createElement("div");
    line3.classList.add("line3", "line");
    hamButton.appendChild(line3);

    // Create navbar element
    const navbar = document.createElement("div");
    navbar.id = "navbar";
    navbar.classList.add(
      "header__nav",
      "navbar",
      "navbar-expand-lg",
      "navbar-light"
    );
    header.appendChild(navbar);

    // Create header__nav__box element
    const navBox = document.createElement("div");
    navBox.classList.add("header__nav__box");
    navbar.appendChild(navBox);


    // Create header__nav__box__list element
    const navList = document.createElement("ul");
    navList.classList.add(
      "header__nav__box__list",
      "navbar-nav",
      "me-auto",
      "mb-lg-0"
    );
    navBox.appendChild(navList);

    const hamMenuIcons = document.createElement("li");
    hamMenuIcons.id = "hamMenuIcons";
    hamMenuIcons.classList.add("nav--item");
    navList.appendChild(hamMenuIcons);

    // Create list items
    let navItems = [
      { id: "newPage", text: "New", href: "new.html" },
      { id: "products", text: "Products", href: "products.html" },
      { id: "discounts", text: "Discounts", href: "discount.html" },
      { id: "search", text: "Search", href: "search.html" },
    ];

    for (let i = 0; i < navItems.length; i++) {
      let navItem = navItems[i];
      const listItem = document.createElement("li");
      listItem.classList.add("nav--item");
      navList.appendChild(listItem);
      const link = document.createElement("a");
      link.classList.add("nav--link");
      link.id = navItem.id;
      link.textContent = navItem.text;
      if (navItem.href) {
        link.href = navItem.href;
      }
      listItem.appendChild(link);
    }

    return header;
  }
  function loadHamMenuIcons() {

    const iconsBox = document.createElement("div");
    iconsBox.classList.add("hamMenuIcons__box")

    // Create search icon
    const searchIcon = document.createElement("a");
    searchIcon.setAttribute("href", "search.html");

    searchIcon.classList.add(
      "hamMenuIcons__search",
      "p--tb",

      "text--medium"
    );
    iconsBox.appendChild(searchIcon);

    // Create search icon element
    const searchIconElement = document.createElement("i");
    searchIconElement.classList.add("fa-solid", "fa-magnifying-glass");
    searchIcon.appendChild(searchIconElement);

    // Create account icon
    const accountIcon = document.createElement("a");
    accountIcon.setAttribute("href", "account.html");
    accountIcon.classList.add(
      "hamMenuIcons__profile",
      "p--tb",
      "text--medium"
    );
    iconsBox.appendChild(accountIcon);

    // Create account icon element
    const accountIconElement = document.createElement("i");
    accountIconElement.classList.add("fa-solid", "fa-user");
    accountIcon.appendChild(accountIconElement);

    // Create favorite icon
    const favoriteIcon = document.createElement("a");
    favoriteIcon.setAttribute("href", "favorite.html");

    favoriteIcon.classList.add(
      "hamMenuIcons__favorite",
      "p--tb",

      "text--medium"
    );
    iconsBox.appendChild(favoriteIcon);

    // Create favorite icon element
    const favoriteIconElement = document.createElement("i");
    favoriteIconElement.classList.add("fa-solid", "fa-heart");
    favoriteIcon.appendChild(favoriteIconElement);

    // Create cart icon
    const cartIcon = document.createElement("a");
    cartIcon.setAttribute("href", "cart.html");
    cartIcon.classList.add(
      "hamMenuIcons__profile__cart",
      "p--tb",
      "text--medium"
    );
    iconsBox.appendChild(cartIcon);

    // Create cart icon element
    const cartIconElement = document.createElement("i");
    cartIconElement.classList.add("fa-solid", "fa-bag-shopping");
    cartIcon.appendChild(cartIconElement);

    return iconsBox;
  }

  function loadFooter() {
    // Create footer element
    const footer = document.createElement("footer");
    footer.id = "footer";

    // Create middle section
    const middleSection = document.createElement("div");
    middleSection.id = "footerMenu";
    middleSection.classList.add("middle");
    footer.appendChild(middleSection);

    return footer;
  }
  // home page - sections
  function loadSection1() {
    // Create section1 container
    const section1Div = document.createElement("div");
    section1Div.classList.add("section1");

    // Create carousel container
    const carouselDiv = document.createElement("div");
    carouselDiv.id = "carouselExampleIndicators";
    carouselDiv.classList.add("section1__carousel", "carousel", "slide");
    carouselDiv.setAttribute("data-bs-ride", "carousel");
    section1Div.appendChild(carouselDiv);

    // Create carousel indicators container
    const indicatorsDiv = document.createElement("div");
    indicatorsDiv.classList.add(
      "section1__carousel__indicatots",
      "carousel-indicators"
    );
    carouselDiv.appendChild(indicatorsDiv);

    // Create carousel indicator buttons
    for (let i = 0; i < 3; i++) {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("data-bs-target", "#carouselExampleIndicators");
      button.setAttribute("data-bs-slide-to", i.toString());
      if (i === 0) {
        button.classList.add("active");
        button.setAttribute("aria-current", "true");
      }
      button.setAttribute("aria-label", "Slide " + (i + 1).toString());
      indicatorsDiv.appendChild(button);
    }

    // Create carousel inner container
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("carousel-inner");
    carouselDiv.appendChild(innerDiv);

    // Create carousel items
    const carouselItems = [
      {
        href: "http://127.0.0.1:5500/pages/products.html?category=sofas",
        imageSrc: "../img/Carousel/carouselImg1.jpg",
        imageAlt: "carouselImg1",
        captionClass: "my__caption my__caption--black",
        captionTitle: "Pretty and comfortable",
        captionSubtitle: "Explore our sofas",
        captionContent:
          "Textiles from ecological materials with the comfort and functionality of Scandinavian design - it's time to bring a new piece into your home.",
        captionLinkClass: "my__caption__a my__caption__a--black",
      },
      {
        href: "http://127.0.0.1:5500/pages/product.html?id=24",
        imageSrc: "../img/Carousel/carouselImg2.jpg",
        imageAlt: "carouselImg2",
        captionClass: "my__caption my__caption--white",
        captionTitle: "Simplicity",
        captionSubtitle: "Chair for everyone",
        captionContent:
          "The chair is made of oak, its design is permeated by fluid, organic forms, combining strong curves with exceptional lightness. As a result, we got a minimalist design . . .",
        captionLinkClass: "my__caption__a my__caption__a--white",
      },
      {
        href: "http://127.0.0.1:5500/pages/product.html?id=2",
        imageSrc: "../img/Carousel/carouselImg3.jpg",
        imageAlt: "carouselImg3",
        captionClass: "my__caption my__caption--white",
        captionTitle: "New product",
        captionSubtitle: "Chair with style",
        captionContent:
          "This luxury hybrid armchair offers unparalleled seating comfort thanks to its robust frame and soft upholstery. It is characterized by solid legs, made using traditional . . .",
        captionLinkClass: "my__caption__a my__caption__a--white",
      },
    ];


    for (let j = 0; j < carouselItems.length; j++) {
      let carouselItem = carouselItems[j];

      // Create carousel item
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("carousel-item", "carousel--item--section1");
      if (j === 0) {
        itemDiv.classList.add("active");
      }
      innerDiv.appendChild(itemDiv);

      // Create picture element
      const pictureElem = document.createElement("picture");
      itemDiv.appendChild(pictureElem);

      // Create source elements for responsive images
      const imageSources = [
        {
          media: "(max-width: 400px)",
          srcset: "../img/Carousel/xs/400_img" + (j + 1) + ".jpg",
        },
        {
          media: "(max-width: 600px)",
          srcset: "../img/Carousel/mobile/600_img" + (j + 1) + ".jpg",
        },
        {
          media: "(max-width: 800px)",
          srcset: "../img/Carousel/tablet/800_img" + (j + 1) + ".jpg",
        },
      ];

      for (let k = 0; k < imageSources.length; k++) {
        const sourceElem = document.createElement("source");
        sourceElem.media = imageSources[k].media;
        sourceElem.srcset = imageSources[k].srcset;
        pictureElem.appendChild(sourceElem);
      }

      // Create image element
      const imgElem = document.createElement("img");
      imgElem.src = carouselItem.imageSrc;
      imgElem.alt = carouselItem.imageAlt;
      imgElem.classList.add("d-block", "w-100");
      pictureElem.appendChild(imgElem);

      // Create carousel item caption
      const captionDiv = document.createElement("div");
      captionDiv.classList.add("my__caption", "my__caption--white");
      itemDiv.appendChild(captionDiv);

      // Create caption elements
      const captionTitle = document.createElement("h6");
      captionTitle.textContent = carouselItem.captionTitle;
      captionDiv.appendChild(captionTitle);

      const captionSubtitle = document.createElement("h2");
      captionSubtitle.textContent = carouselItem.captionSubtitle;
      captionDiv.appendChild(captionSubtitle);

      const captionContent = document.createElement("p");
      captionContent.textContent = carouselItem.captionContent;
      captionDiv.appendChild(captionContent);

      const captionLink = document.createElement("a");
      captionLink.href = carouselItem.href;
      captionLink.classList.add("my__caption__a", "my__caption__a--white");
      captionLink.innerHTML = "Buy now";
      captionDiv.appendChild(captionLink);
    }

    return section1Div;
  }

  function loadSection2() {
    // Create section2 container
    const section2Div = document.createElement("div");
    section2Div.id = "section2";
    section2Div.classList.add("section2");

    const cards = cardsSection2;

    cards.forEach(function (card) {
      section2Div.appendChild(createCardsSection2(card));
    });

    return section2Div;
  }
  function loadSection2Small() {
    // Create images container
    const caroselSection2 = document.createElement("div");
    caroselSection2.id = "section2Small";
    caroselSection2.classList.add("section2Small");
    // Create carousel container
    const carouselDiv = document.createElement("div");
    carouselDiv.id = "carouselSection2";
    carouselDiv.classList.add("carousel", "carousel-dark");
    carouselDiv.setAttribute("data-bs-interval", "false");
    caroselSection2.appendChild(carouselDiv);
    // Create carousel inner container
    const carouselInnerDiv = document.createElement("div");
    carouselInnerDiv.classList.add("carousel-inner");
    carouselDiv.appendChild(carouselInnerDiv);
    // Create carousel items
    const cards = cardsSection2;
    cards.forEach(function (card, index) {
      const carouselItemDiv = document.createElement("div");
      carouselItemDiv.classList.add("carousel-item");
      if (index === 0) {
        carouselItemDiv.classList.add("active");
      }

      const class1 = "card--section2Small";
      carouselItemDiv.appendChild(createCardsSection2(card, class1));
      carouselInnerDiv.appendChild(carouselItemDiv);
    });
    // Create carousel controls
    const prevButton = createCarouselControlButton(
      "carousel-control-prev",
      "carousel-control-prev--product",
      "carouselSection2",
      "prev",
      "carousel-control-prev-icon",
      "Previous"
    );
    carouselDiv.appendChild(prevButton);
    const nextButton = createCarouselControlButton(
      "carousel-control-next",
      "carousel-control-next--product",
      "carouselSection2",
      "next",
      "carousel-control-next-icon",
      "Next"
    );
    carouselDiv.appendChild(nextButton);
    function createCarouselControlButton(
      className,
      className2,
      target,
      slide,
      iconClass,
      ariaLabel
    ) {
      const button = document.createElement("button");
      button.classList.add(className, className2);
      button.type = "button";
      button.setAttribute("data-bs-target", "#" + target);
      button.setAttribute("data-bs-slide", slide);
      const iconSpan = document.createElement("span");
      iconSpan.classList.add(iconClass);
      iconSpan.setAttribute("aria-hidden", "true");
      const labelSpan = document.createElement("span");
      labelSpan.classList.add("visually-hidden");
      labelSpan.textContent = ariaLabel;
      button.appendChild(iconSpan);
      button.appendChild(labelSpan);
      return button;
    }

    return caroselSection2;
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
      const classPopular = "item--popular";
      popularProducts.appendChild(item(elem, classPopular));
    });
    section3.appendChild(title);
    section3.appendChild(popularProducts);
    return section3;
  }
  //Home page function 
  function loadfooterMenuSmall() {
    const accordionData = footerMenuData;

    // Create accordion
    const accordionDiv = document.createElement("div");
    accordionDiv.classList.add("accordion", "footerMenuSmall");
    accordionDiv.id = "accordionFooterMenu";

    // Helper function to create accordion button
    function createAccordionButton(title, collapseId, headingId, expanded) {
      const button = document.createElement("button");
      button.classList.add(
        "accordion-button",
        "accordion-flush",
        "accordion-button--footerMenu",
        "accordion-button--title",
        "collapsed"
      );
      button.type = "button";
      button.setAttribute("data-bs-toggle", "collapse");
      button.setAttribute("data-bs-target", "#" + collapseId);
      button.setAttribute("aria-expanded", expanded);
      button.setAttribute("aria-controls", collapseId);
      button.id = headingId;
      button.textContent = title;

      return button;
    }

    // Loop through the footerMenuData and create accordion items
    accordionData.forEach((item, index) => {
      // Create accordion item div
      const accordionItemDiv = document.createElement("div");
      accordionItemDiv.classList.add(
        "accordion-item",
        "accordion-item--footerMenu",
        "accordion-item--text"
      );
      accordionDiv.appendChild(accordionItemDiv);

      // Create accordion header div
      const accordionHeaderDiv = document.createElement("h2");
      accordionHeaderDiv.classList.add("accordion-header");
      accordionItemDiv.appendChild(accordionHeaderDiv);

      // Create accordion button
      const accordionButton = createAccordionButton(
        item.title,
        `collapse${index + 1}`,
        `heading${index + 1}`,
        index === 0 // Expand the first item by default
      );
      accordionHeaderDiv.appendChild(accordionButton);

      // Create accordion collapse div
      const accordionCollapseDiv = document.createElement("div");
      accordionCollapseDiv.id = `collapse${index + 1}`;
      accordionCollapseDiv.classList.add("accordion-collapse", "collapse");
      accordionCollapseDiv.setAttribute(
        "aria-labelledby",
        `heading${index + 1}`
      );
      accordionCollapseDiv.setAttribute(
        "data-bs-parent",
        "#accordionFooterMenu"
      );
      accordionItemDiv.appendChild(accordionCollapseDiv);

      // Create accordion body div
      const accordionBodyDiv = document.createElement("div");
      accordionBodyDiv.classList.add(
        "accordion-body",
        "accordion-body--footerMenu"
      );
      const ul = document.createElement("ul");
      ul.classList.add("accordionFooterMenu__list");
      item.content.forEach((contentItem) => {
        const li = document.createElement("li");
        li.classList.add("accordionFooterMenu__list__item");
        const a = document.createElement("a");
        li.appendChild(a);
        a.textContent = contentItem.name;
        a.href = contentItem.link;
        ul.appendChild(li);
      });
      accordionBodyDiv.appendChild(ul);
      accordionCollapseDiv.appendChild(accordionBodyDiv);
    });
    // Append the accordion to the desired element in the document

    return accordionDiv;
  }
  function loadfooterMenuLarge() {
    const accordionData = footerMenuData;

    // Create footerMenuLarge div
    const footerMenuLarge = document.createElement("div");
    footerMenuLarge.classList.add("middle__footerMenuLarge");
    footerMenuLarge.id = "footerMenuLarge";
    // Create customerService div
    const customerServiceDiv = document.createElement("div");
    customerServiceDiv.id = "customerService";
    customerServiceDiv.classList.add("middle__box");
    footerMenuLarge.appendChild(customerServiceDiv);

    // Create customerService title
    const customerServiceTitle = document.createElement("span");
    customerServiceTitle.classList.add("middle__box__title");
    customerServiceTitle.textContent = "Customer service";
    customerServiceDiv.appendChild(customerServiceTitle);

    // Create customerService list
    const customerServiceList = document.createElement("ul");
    customerServiceList.classList.add("middle__box__list");
    customerServiceDiv.appendChild(customerServiceList);

    // Create customerService list items
    const customerServiceItems = [{ name: "Support", link: "support.html" }, { name: "Delivery", link: "delivery.html" }];
    for (let i = 0; i < customerServiceItems.length; i++) {
      let customerServiceItem = customerServiceItems[i].name;
      const listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      customerServiceList.appendChild(listItem);

      const link = document.createElement("a");
      link.href = customerServiceItems[i].link;
      link.textContent = customerServiceItem;
      listItem.appendChild(link);
    }

    // Create information div
    const informationDiv = document.createElement("div");
    informationDiv.id = "information";
    informationDiv.classList.add("middle__box");
    footerMenuLarge.appendChild(informationDiv);

    // Create information title
    const informationTitle = document.createElement("span");
    informationTitle.classList.add("middle__box__title");
    informationTitle.textContent = "Information";
    informationDiv.appendChild(informationTitle);

    // Create information list
    const informationList = document.createElement("ul");
    informationList.classList.add("middle__box__list");
    informationDiv.appendChild(informationList);

    // Create information list items
    const informationItems = ["Terms of use", "Privacy policy"];
    for (let i = 0; i < informationItems.length; i++) {
      let informationItem = informationItems[i];
      const listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      informationList.appendChild(listItem);

      const link = document.createElement("a");
      link.href = "#";
      link.textContent = informationItem;
      listItem.appendChild(link);
    }

    // Create stayInTouch div
    const stayInTouchDiv = document.createElement("div");
    stayInTouchDiv.id = "stayInTouch";
    stayInTouchDiv.classList.add("middle__box");
    footerMenuLarge.appendChild(stayInTouchDiv);

    // Create stayInTouch title
    const stayInTouchTitle = document.createElement("span");
    stayInTouchTitle.classList.add("middle__box__title");
    stayInTouchTitle.textContent = "Stay in touch";
    stayInTouchDiv.appendChild(stayInTouchTitle);

    // Create stayInTouch list
    const stayInTouchList = document.createElement("ul");
    stayInTouchList.id = "stayInTouch__list";
    stayInTouchList.classList.add("middle__box__list");
    stayInTouchDiv.appendChild(stayInTouchList);

    // Create stayInTouch list items
    const stayInTouchItems = ["Facebook", "Instagram", "Pinterest", "LinkedIn"];
    for (let i = 0; i < stayInTouchItems.length; i++) {
      let stayInTouchItem = stayInTouchItems[i];
      const listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      stayInTouchList.appendChild(listItem);

      const link = document.createElement("a");
      link.href = "#";
      link.textContent = stayInTouchItem;
      listItem.appendChild(link);
    }

    // Create aboutUs div
    const aboutUsDiv = document.createElement("div");
    aboutUsDiv.id = "aboutUs";
    aboutUsDiv.classList.add("middle__box");
    footerMenuLarge.appendChild(aboutUsDiv);

    // Create aboutUs title
    const aboutUsTitle = document.createElement("span");
    aboutUsTitle.classList.add("middle__box__title");
    aboutUsTitle.textContent = "About us";
    aboutUsDiv.appendChild(aboutUsTitle);

    // Create aboutUs list
    const aboutUsList = document.createElement("ul");
    aboutUsList.id = "aboutUs__list";
    aboutUsList.classList.add("middle__box__list");
    aboutUsDiv.appendChild(aboutUsList);

    // Create aboutUs list items
    const aboutUsItems = ["Our Store", "Production"];
    for (let i = 0; i < aboutUsItems.length; i++) {
      let aboutUsItem = aboutUsItems[i];
      const listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      aboutUsList.appendChild(listItem);

      const link = document.createElement("a");
      link.href = "#";
      link.textContent = aboutUsItem;
      listItem.appendChild(link);
    }
    return footerMenuLarge;
  }
  function displayHamMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.add("displayNavbar");
  }
  function closeHamMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("displayNavbar");
  }
  function createCardsSection2(card, cardClass2) {
    // Create card link
    const cardLink = document.createElement("a");
    cardLink.id = "card";
    cardLink.href = card.aUrl;
    cardLink.classList.add("card", "text-center", cardClass2);

    // Create card image container
    const divImg = document.createElement("div");
    divImg.classList.add("card__divImg");
    cardLink.appendChild(divImg);

    // Create card image
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.src = card.imageSrc;
    cardImg.alt = card.imageAlt;
    divImg.appendChild(cardImg);

    // Create card text container
    const cardText = document.createElement("div");
    cardText.classList.add("card__text");
    cardLink.appendChild(cardText);

    // Create card title
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card__text__title");
    cardTitle.textContent = card.title;
    cardText.appendChild(cardTitle);

    // Create card content
    const cardContent = document.createElement("p");
    cardContent.classList.add("card-text");
    cardContent.textContent = card.content;
    cardText.appendChild(cardContent);

    // Create "See more" button
    const seeMoreBtn = document.createElement("button");
    seeMoreBtn.classList.add("card__text__btn");
    seeMoreBtn.textContent = "See more";
    cardText.appendChild(seeMoreBtn);

    return cardLink;
  }

  // Product page
  function loadProductMain(obj, array) {
    if (array == null) {
      array = [];
    }
    // Create main container
    const mainDiv = document.createElement("main");
    mainDiv.classList.add("productPage__main");

    // Create images container
    const imagesDiv = document.createElement("div");
    imagesDiv.classList.add("productPage__main__images");
    mainDiv.appendChild(imagesDiv);

    // Create carousel container
    const carouselDiv = document.createElement("div");
    carouselDiv.id = "carouselSection2";
    carouselDiv.classList.add("carousel", "carousel-dark");
    carouselDiv.setAttribute("data-bs-interval", "false");
    imagesDiv.appendChild(carouselDiv);

    // Create carousel inner container
    const carouselInnerDiv = document.createElement("div");
    carouselInnerDiv.classList.add("carousel-inner");
    carouselDiv.appendChild(carouselInnerDiv);

    // Create carousel items
    const images = [obj.img.img1, obj.img.img2, obj.img.img3];
    images.forEach(function (image, index) {
      const carouselItemDiv = document.createElement("div");
      carouselItemDiv.classList.add("carousel-item", "carousel--item--poducts");
      if (index === 0) {
        carouselItemDiv.classList.add("active");
      }

      const img = document.createElement("img");
      img.src = image;
      img.classList.add("d-block", "w-100");
      img.alt = "...";

      carouselItemDiv.appendChild(img);
      carouselInnerDiv.appendChild(carouselItemDiv);
    });

    // Create carousel controls
    const prevButton = createCarouselControlButton(
      "carousel-control-prev",
      "carousel-control-prev--product",
      "carouselSection2",
      "prev",
      "carousel-control-prev-icon",
      "Previous"
    );
    carouselDiv.appendChild(prevButton);

    const nextButton = createCarouselControlButton(
      "carousel-control-next",
      "carousel-control-next--product",
      "carouselSection2",
      "next",
      "carousel-control-next-icon",
      "Next"
    );
    carouselDiv.appendChild(nextButton);

    // Create info section container
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("productPage__main__info");
    mainDiv.appendChild(infoDiv);

    // Create info header
    const infoHeaderDiv = document.createElement("div");
    infoHeaderDiv.classList.add("productPage__main__info__header");
    infoDiv.appendChild(infoHeaderDiv);

    // Create availability section
    const availableDiv = document.createElement("div");
    availableDiv.classList.add("productPage__main__info__header__available");
    infoHeaderDiv.appendChild(availableDiv);

    const availableTextSpan = document.createElement("span");
    availableTextSpan.classList.add(
      "productPage__main__info__header__available__text"
    );
    const availableIcon = document.createElement("i");
    if (obj.available) {
      availableTextSpan.textContent = "Available ";

      availableIcon.classList.add(
        "fa-solid",
        "fa-circle-check",
        "productPage__main__info__header__available__iconYes"
      );
    } else {
      availableTextSpan.textContent = "Not available ";

      availableIcon.classList.add(
        "fa-solid",
        "fa-circle-xmark",
        "productPage__main__info__header__available__iconNo"
      );
    }
    availableTextSpan.appendChild(availableIcon);
    availableDiv.appendChild(availableTextSpan);

    // Create heart icon
    const heartIcon = document.createElement("i");
    heartIcon.setAttribute("id", "heartIcon");
    heartIcon.classList.add(
      "fa-solid",
      "fa-heart",
      "productPage__main__info__header__heartIcon"
    );

    if (array.includes(obj.id.toString())) {
      heartIcon.classList.add(
        "productPage__main__info__header__heartIcon--clicked"
      );
    } else {
      heartIcon.classList.add(
        "productPage__main__info__header__heartIcon--normal"
      );
    }

    heartIcon.setAttribute("data-id", `${obj.id}`);
    infoHeaderDiv.appendChild(heartIcon);

    // Create product name
    const productName = document.createElement("h2");
    productName.classList.add("productPage__main__info__name");
    productName.textContent = obj.name;
    infoDiv.appendChild(productName);

    // Create product price box
    const priceBox = document.createElement("span");
    priceBox.classList.add("productPage__main__info__priceBox");
    infoDiv.appendChild(priceBox);

    if (obj.discount > 0) {
      const oldPrice = document.createElement("del");
      oldPrice.classList.add("productPage__main__info__priceBox__oldPrice");
      oldPrice.innerHTML = `  ${obj.price}.00&euro;`;
      priceBox.appendChild(oldPrice);
      console.log(obj.price)
      let newPrice = (obj.price - Math.floor(obj.price * (obj.discount / 100)));
      console.log(newPrice)
      const price = document.createElement("span");
      price.classList.add("productPage__main__info__priceBox__price");
      price.innerHTML = ` ${newPrice}.00&euro;`;
      priceBox.appendChild(price);
    }
    //price without discount
    else {
      const price = document.createElement("span");
      price.classList.add("productPage__main__info__priceBox__price");
      price.innerHTML = ` ${obj.price}.00&euro;`;
      priceBox.appendChild(price);
    }

    // Create product code
    const productCode = document.createElement("p");
    productCode.classList.add("productPage__main__info__code");
    productCode.innerHTML = `Code: <span>${obj.code}</span>`;
    infoDiv.appendChild(productCode);

    // Create cart buttons container
    const cartButtonsDiv = document.createElement("div");
    cartButtonsDiv.classList.add("productPage__main__info__cartButtons");
    infoDiv.appendChild(cartButtonsDiv);

    // Create quantity buttons
    const quantityDiv = document.createElement("div");
    quantityDiv.classList.add("productPage__main__info__cartButtons__quantity");
    cartButtonsDiv.appendChild(quantityDiv);

    const minusButton = document.createElement("button");
    minusButton.id = "minusBtn";
    minusButton.classList.add(
      "productPage__main__info__cartButtons__quantity__minus"
    );

    minusButton.textContent = "-";
    quantityDiv.appendChild(minusButton);

    const quantityButton = document.createElement("button");
    quantityButton.id = "quantityBtn";
    quantityButton.classList.add(
      "productPage__main__info__cartButtons__quantity__number"
    );
    quantityButton.textContent = "1";
    quantityDiv.appendChild(quantityButton);

    const plusButton = document.createElement("button");
    plusButton.id = "plusBtn";
    plusButton.classList.add(
      "productPage__main__info__cartButtons__quantity__plus"
    );
    plusButton.textContent = "+";
    quantityDiv.appendChild(plusButton);

    // Create addToCart button
    const addToCartButton = document.createElement("button");
    addToCartButton.id = "addToCart";
    addToCartButton.classList.add(
      "productPage__main__info__cartButtons__addToCart"
    );
    addToCartButton.textContent = "Add to cart";
    addToCartButton.setAttribute("data-id", obj.id)
    cartButtonsDiv.appendChild(addToCartButton);
    if (!obj.available) {
      cartButtonsDiv.style.display = "none";
    }

    // Create accordion
    const accordionDiv = document.createElement("div");
    accordionDiv.classList.add("accordion", "accordion-flush");
    accordionDiv.id = "accordionProductPage";
    infoDiv.appendChild(accordionDiv);

    // Create description accordion item
    const descriptionAccordionItemDiv = document.createElement("div");
    descriptionAccordionItemDiv.classList.add(
      "accordion-item",
      "accordion-item--text"
    );
    accordionDiv.appendChild(descriptionAccordionItemDiv);

    const descriptionAccordionHeaderDiv = document.createElement("h2");
    descriptionAccordionHeaderDiv.classList.add("accordion-header");
    descriptionAccordionItemDiv.appendChild(descriptionAccordionHeaderDiv);

    const descriptionAccordionButton = createAccordionButton(
      "Description",
      "collapseOne",
      "headingOne",
      true
    );
    descriptionAccordionHeaderDiv.appendChild(descriptionAccordionButton);

    const descriptionAccordionCollapseDiv = document.createElement("div");
    descriptionAccordionCollapseDiv.id = "collapseOne";
    descriptionAccordionCollapseDiv.classList.add(
      "accordion-collapse",
      "collapse",
      "show"
    );
    descriptionAccordionCollapseDiv.setAttribute(
      "aria-labelledby",
      "headingOne"
    );
    descriptionAccordionCollapseDiv.setAttribute(
      "data-bs-parent",
      "#accordionProductPage"
    );
    descriptionAccordionItemDiv.appendChild(descriptionAccordionCollapseDiv);

    const descriptionAccordionBodyDiv = document.createElement("div");
    descriptionAccordionBodyDiv.classList.add("accordion-body");
    descriptionAccordionBodyDiv.innerHTML = obj.desc;
    descriptionAccordionCollapseDiv.appendChild(descriptionAccordionBodyDiv);

    // Create dimensions accordion item
    const dimensionsAccordionItemDiv = document.createElement("div");
    dimensionsAccordionItemDiv.classList.add(
      "accordion-item",
      "accordion-item--text"
    );
    accordionDiv.appendChild(dimensionsAccordionItemDiv);

    const dimensionsAccordionHeaderDiv = document.createElement("h2");
    dimensionsAccordionHeaderDiv.classList.add("accordion-header");
    dimensionsAccordionItemDiv.appendChild(dimensionsAccordionHeaderDiv);

    const dimensionsAccordionButton = createAccordionButton(
      "Dimensions",
      "collapseTwo",
      "headingTwo",
      false
    );
    dimensionsAccordionButton.classList.add("collapsed");
    dimensionsAccordionHeaderDiv.appendChild(dimensionsAccordionButton);

    const dimensionsAccordionCollapseDiv = document.createElement("div");
    dimensionsAccordionCollapseDiv.id = "collapseTwo";
    dimensionsAccordionCollapseDiv.classList.add(
      "accordion-collapse",
      "collapse"
    );
    dimensionsAccordionCollapseDiv.setAttribute(
      "aria-labelledby",
      "headingTwo"
    );
    dimensionsAccordionCollapseDiv.setAttribute(
      "data-bs-parent",
      "#accordionProductPage"
    );
    dimensionsAccordionItemDiv.appendChild(dimensionsAccordionCollapseDiv);

    const dimensionsAccordionBodyDiv = document.createElement("div");
    dimensionsAccordionBodyDiv.classList.add("accordion-body");

    //Create ul list element
    const dimensionList = document.createElement("ul");
    dimensionList.classList.add("accordionProductPage__list");
    dimensionsAccordionBodyDiv.appendChild(dimensionList);

    //Create li element form object
    const dimensions = obj.dimensions;
    const entries = Object.entries(dimensions);

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];

      const listItem = document.createElement("li");
      listItem.classList.add("accordionProductPage__list__item");

      listItem.textContent = `${entry[0]}: ${entry[1]}`;
      listItem.innerHTML += "cm";
      dimensionList.appendChild(listItem);
    }
    dimensionsAccordionCollapseDiv.appendChild(dimensionsAccordionBodyDiv);

    // Create share section
    const shareDiv = document.createElement("div");
    shareDiv.classList.add("thridAccordion");
    infoDiv.appendChild(shareDiv);

    const shareTitle = document.createElement("p");
    shareTitle.classList.add("thridAccordion__title");
    shareTitle.textContent = "Share";
    shareDiv.appendChild(shareTitle);

    const shareIconsDiv = document.createElement("div");
    shareIconsDiv.classList.add("thridAccordion__icons");
    shareDiv.appendChild(shareIconsDiv);

    const socialMediaLinks = [
      { href: "https://www.facebook.com/", iconClass: "fa-facebook" },
      { href: "https://www.instagram.com/", iconClass: "fa-instagram" },
      { href: "https://twitter.com/", iconClass: "fa-twitter" },
      { href: "https://www.pinterest.com/", iconClass: "fa-pinterest" },
    ];

    socialMediaLinks.forEach(function (link) {
      const iconLink = document.createElement("a");
      iconLink.href = link.href;

      const icon = document.createElement("i");
      icon.classList.add("fa-brands", `${link.iconClass}`);

      iconLink.appendChild(icon);
      shareIconsDiv.appendChild(iconLink);
    });

    return mainDiv;
    // Helper function to create carousel control buttons
    function createCarouselControlButton(
      className,
      className2,
      target,
      slide,
      iconClass,
      ariaLabel
    ) {
      const button = document.createElement("button");
      button.classList.add(className, className2);
      button.type = "button";
      button.setAttribute("data-bs-target", "#" + target);
      button.setAttribute("data-bs-slide", slide);

      const iconSpan = document.createElement("span");
      iconSpan.classList.add(iconClass);
      iconSpan.setAttribute("aria-hidden", "true");

      const labelSpan = document.createElement("span");
      labelSpan.classList.add("visually-hidden");
      labelSpan.textContent = ariaLabel;

      button.appendChild(iconSpan);
      button.appendChild(labelSpan);

      return button;
    }

    // Helper function to create accordion button
    function createAccordionButton(title, collapseId, headingId, expanded) {
      const button = document.createElement("button");
      button.classList.add(
        "accordion-button",
        "accordion-button--productPage",
        "accordion-button--title"
      );
      button.type = "button";
      button.setAttribute("data-bs-toggle", "collapse");
      button.setAttribute("data-bs-target", "#" + collapseId);
      button.setAttribute("aria-expanded", expanded);
      button.setAttribute("aria-controls", collapseId);
      button.id = headingId;
      button.textContent = title;

      return button;
    }
  }
  function loadLoginMain() {
    // Create main loginPageMain container
    const loginPageMain = document.createElement("div");
    loginPageMain.classList.add("loginPageMain");

    // Create loginBox
    const loginBoxDiv = document.createElement("div");
    loginBoxDiv.classList.add("loginPageMain__loginBox");
    loginPageMain.appendChild(loginBoxDiv);

    // Create form element
    const form = document.createElement("form");
    form.id = "formLogIn";
    form.classList.add("loginPageMain__loginBox__form")


    // Create loginBox title
    const titleH3 = document.createElement("h3");
    titleH3.classList.add("loginPageMain__loginBox__form__title");
    titleH3.textContent = "Log in";
    form.appendChild(titleH3);

    // Create username input field
    const usernameDiv = document.createElement("div");
    usernameDiv.classList.add("loginPageMain__loginBox__form__username");
    form.appendChild(usernameDiv);

    const usernameInput = document.createElement("input");
    usernameInput.id = "usernameInput";
    usernameInput.type = "username";
    usernameInput.classList.add("loginPageMain__loginBox__form__username__input");
    usernameInput.placeholder = "username";
    usernameDiv.appendChild(usernameInput);

    const usernameWarningP = document.createElement("p");
    usernameWarningP.id = "usernameWarning";
    usernameWarningP.classList.add("loginPageMain__loginBox__form__username__warning");
    usernameDiv.appendChild(usernameWarningP);

    // Create password input field
    const passwordDiv = document.createElement("div");
    passwordDiv.classList.add("loginPageMain__loginBox__form__password");
    form.appendChild(passwordDiv);

    //Create password icon
    const passwordIcon = document.createElement("i");
    passwordIcon.id = "passwordIcon";
    passwordIcon.classList.add("fa-solid", "fa-eye-slash");
    passwordDiv.appendChild(passwordIcon);

    const passwordInput = document.createElement("input");
    passwordInput.id = "passwordInput";
    passwordInput.type = "password";
    passwordInput.classList.add("loginPageMain__loginBox__form__password__input");
    passwordInput.placeholder = "password";
    passwordDiv.appendChild(passwordInput);

    const passwordWarningP = document.createElement("p");
    passwordWarningP.id = "passwordWarning";
    passwordWarningP.classList.add(
      "loginPageMain__loginBox__form__password__warning"
    );
    passwordDiv.appendChild(passwordWarningP);

    // Create login button
    const loginButton = document.createElement("button");
    loginButton.id = "submitBtnLogin";
    loginButton.classList.add("loginPageMain__loginBox__form__submit");
    loginButton.textContent = "Log in";
    form.appendChild(loginButton);


    loginBoxDiv.appendChild(form);

    // Create message section
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("loginPageMain__loginBox__message");
    loginBoxDiv.appendChild(messageDiv);

    // Create message p
    const messageP = document.createElement("p");
    messageP.innerHTML = "If you don't have an account, ";

    //Create message link and text
    const aLink = document.createElement("a");
    aLink.setAttribute("href", "signup.html");
    aLink.classList.add("loginPageMain__loginBox__message__link");
    aLink.textContent = "sign up";
    messageDiv.appendChild(messageP);
    messageP.appendChild(aLink);
    messageP.innerHTML += ".";

    return loginPageMain;
  }
  function loadSignupMain() {
    // Create main signupPage container
    const signupPageDiv = document.createElement("div");
    signupPageDiv.classList.add("signupPageMain");

    // Create signupBox
    const signupBoxDiv = document.createElement("div");
    signupBoxDiv.classList.add("signupPageMain__signupBox");
    signupPageDiv.appendChild(signupBoxDiv);
    // Create form element
    const form = document.createElement("form");
    form.id = "formSignUp";
    form.classList.add("signupPageMain__signupBox__form")
    // Create signupBox title
    const titleH3 = document.createElement("h3");
    titleH3.classList.add("signupPageMain__signupBox__form__title");
    titleH3.textContent = "Sign up";
    form.appendChild(titleH3);

    // Create name input field
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("signupPageMain__signupBox__form__name");
    form.appendChild(nameDiv);

    const nameInput = document.createElement("input");
    nameInput.id = "usernameInput";
    nameInput.type = "text";
    nameInput.classList.add("signupPageMain__signupBox__form__name__input");
    nameInput.placeholder = "username";
    nameDiv.appendChild(nameInput);

    const nameWarningP = document.createElement("p");
    nameWarningP.id = "usernameWarning";
    nameWarningP.classList.add("signupPageMain__signupBox__form__name__warning");
    nameDiv.appendChild(nameWarningP);

    // Create email input field
    const emailDiv = document.createElement("div");
    emailDiv.classList.add("signupPageMain__signupBox__form__email");
    form.appendChild(emailDiv);

    const emailInput = document.createElement("input");
    emailInput.id = "emailInput";
    emailInput.type = "email";
    emailInput.classList.add("signupPageMain__signupBox__form__email__input");
    emailInput.placeholder = "youremail@email.com";
    emailDiv.appendChild(emailInput);

    const emailWarningP = document.createElement("p");
    emailWarningP.id = "emailWarning";
    emailWarningP.classList.add("signupPageMain__signupBox__form__email__warning");
    emailDiv.appendChild(emailWarningP);

    // Create password input field
    const passwordDiv = document.createElement("div");
    passwordDiv.classList.add("signupPageMain__signupBox__form__password");
    form.appendChild(passwordDiv);

    //Create password icon
    const passwordIcon = document.createElement("i");
    passwordIcon.id = "passwordIcon";
    passwordIcon.classList.add("fa-solid", "fa-eye-slash");
    passwordDiv.appendChild(passwordIcon);

    const passwordInput = document.createElement("input");
    passwordInput.id = "passwordInput";
    passwordInput.type = "password";
    passwordInput.classList.add("signupPageMain__signupBox__form__password__input");
    passwordInput.placeholder = "password";
    passwordDiv.appendChild(passwordInput);

    const passwordWarningP = document.createElement("p");
    passwordWarningP.id = "passwordWarning";
    passwordWarningP.classList.add(
      "signupPageMain__signupBox__form__password__warning"
    );
    passwordDiv.appendChild(passwordWarningP);

    // Create signup button
    const signupButton = document.createElement("button");
    signupButton.id = "submitBtn";
    signupButton.classList.add("signupPageMain__signupBox__form__submit");
    signupButton.textContent = "Sign up";
    form.appendChild(signupButton);

    signupBoxDiv.appendChild(form);



    // Create message section
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("signupPageMain__signupBox__message");
    signupBoxDiv.appendChild(messageDiv);

    // Create message p
    const messageP = document.createElement("p");
    messageP.innerHTML = "If you already have an account, ";

    //Create message link and text
    const aLink = document.createElement("a");
    aLink.setAttribute("href", "login.html");
    aLink.classList.add("signupPageMain__signupBox__message__link");
    aLink.textContent = "log in";
    messageDiv.appendChild(messageP);
    messageP.appendChild(aLink);
    messageP.innerHTML += ".";

    return signupPageDiv;
  }
  function loadCartPageMain(data) {
    // Create cart container
    const cartPageMain = document.createElement("div");
    cartPageMain.classList.add("cartPage");

    //Create title block
    const titleBlock = document.createElement("div");
    titleBlock.classList.add("cartPage__titleBlock");
    cartPageMain.appendChild(titleBlock);
    //Create title 
    const title = document.createElement("h1");
    title.classList.add("cartPage__titleBlock__title");
    title.textContent = "Cart";
    titleBlock.appendChild(title);

    if (data.length < 1) {

      //Crete text container
      const textContainer = document.createElement("div");
      textContainer.classList.add("cartPage__textContainer");
      cartPageMain.appendChild(textContainer);

      const textBox = document.createElement("div");
      textBox.classList.add("cartPage__textContainer__box");



      const textTitle = document.createElement("p");
      textTitle.classList.add("cartPage__textContainer__box__title");
      textTitle.innerHTML = `<i class="fa-regular fa-folder-open cartPage__textContainer__box__icon"></i> There are no products in your cart`;
      textBox.appendChild(textTitle);

      textContainer.appendChild(textBox);

      const textDescription = document.createElement("div");
      textDescription.classList.add("cartPage__textContainer__description");
      textDescription.textContent = 'The shopping cart works like any shopping cart - you put what you like in it. If your shopping cart is empty, it means that you have not selected any products. If you want to choose one of the products from our online store, you need to go to the product page and press the Add to cart button.'
      textContainer.appendChild(textDescription);


    }
    else {

      // Create items block
      const itemsBlock = document.createElement("div");
      itemsBlock.classList.add("cartPage__itemsBlock");
      cartPageMain.appendChild(itemsBlock);

      const table = document.createElement("table");
      itemsBlock.appendChild(table);

      const thead = document.createElement("thead");
      table.appendChild(thead);


      const favProductTitle = document.createElement("tr");
      thead.appendChild(favProductTitle);

      const removeProductTh = document.createElement("th");
      removeProductTh.classList.add("cartPage__itemsBlock__removeProduct");
      removeProductTh.innerHTML = `&nbsp;`
      favProductTitle.appendChild(removeProductTh);

      const imgProductTh = document.createElement("th");
      imgProductTh.classList.add("cartPage__itemsBlock__imgProduct");
      imgProductTh.innerHTML = `&nbsp;`

      favProductTitle.appendChild(imgProductTh);


      const nameProductTh = document.createElement("th");
      nameProductTh.classList.add("cartPage__itemsBlock__nameProduct");
      nameProductTh.textContent = "Product";
      favProductTitle.appendChild(nameProductTh);


      const priceProduct = document.createElement("th");
      priceProduct.classList.add("cartPage__itemsBlock__priceProduct");
      priceProduct.textContent = "Price";
      favProductTitle.appendChild(priceProduct);

      const quantityProduct = document.createElement("th");
      quantityProduct.classList.add("cartPage__itemsBlock__quantityProduct");
      quantityProduct.textContent = "Quantity";
      favProductTitle.appendChild(quantityProduct);

      const totalPrice = document.createElement("th");
      totalPrice.classList.add("cartPage__itemsBlock__totalPrice");
      totalPrice.textContent = "Total";
      favProductTitle.appendChild(totalPrice);


      const tbody = document.createElement("tbody");
      table.appendChild(tbody);

      data.forEach(elem => tbody.appendChild(cartProduct(elem)))

      console.log(data.length)
      if (data.length > 0) {
        //Create buy box
        const buyContainer = document.createElement("div");
        buyContainer.classList.add("cartPage__buy");
        cartPageMain.appendChild(buyContainer);

        //Create buy box price
        const buyBoxPrice = document.createElement("div");
        buyBoxPrice.classList.add("cartPage__buy__price");
        buyContainer.appendChild(buyBoxPrice);

        const buyBoxLabel = document.createElement("span");
        buyBoxLabel.classList.add("cartPage__buy__price__text");
        buyBoxLabel.textContent = "Total cart price: "
        buyBoxPrice.appendChild(buyBoxLabel);

        let totalPrice = 0;
        data.forEach(elem => {
          totalPrice += (elem.quantity * elem.price);
        })
        const buyBoxNumber = document.createElement("span");
        buyBoxNumber.classList.add("cartPage__buy__price__number");
        buyBoxNumber.innerHTML = ` ${totalPrice}.00&euro;`;
        buyBoxPrice.appendChild(buyBoxNumber);

      }
    }

    return cartPageMain
  }
  function cartProduct(obj) {

    const favProduct = document.createElement("tr");
    favProduct.classList.add("cartProduct");

    //Product remove
    const removeProduct = document.createElement("td");
    removeProduct.classList.add("cartPage__itemsBlock__removeProduct");
    const iconRemove = document.createElement("i");
    iconRemove.id = "iconRemove"
    iconRemove.classList.add("fa-solid", "fa-x", "cartPage__itemsBlock__removeProduct__icon", "removeFavoriteProduct")
    iconRemove.setAttribute("data-id", obj.id)
    removeProduct.appendChild(iconRemove);
    favProduct.appendChild(removeProduct);

    favProduct.appendChild(removeProduct);

    //Product image
    const imgProductTd = document.createElement("td");
    imgProductTd.classList.add("cartPage__itemsBlock__imgProduct");

    const imageTd = document.createElement("img");
    imageTd.classList.add("cartPage__itemsBlock__imgProduct__image")
    imageTd.setAttribute("src", obj.img.img1);
    imageTd.setAttribute("alt", obj.name)

    imgProductTd.appendChild(imageTd);
    favProduct.appendChild(imgProductTd);

    //Product name
    const nameProductTd = document.createElement("td");
    nameProductTd.classList.add("cartPage__itemsBlock__nameProduct");
    nameProductTd.setAttribute("data-label", "Product: ");


    const nameTd = document.createElement("span");
    nameTd.classList.add("nameProduct__name")
    nameTd.textContent = obj.name;

    nameProductTd.appendChild(nameTd);
    favProduct.appendChild(nameProductTd);

    //Product price
    const priceProduct = document.createElement("td");
    priceProduct.setAttribute("data-label", "Price :");
    priceProduct.classList.add("cartPage__itemsBlock__priceProduct");
    favProduct.appendChild(priceProduct);

    const price = document.createElement("span");
    price.innerHTML = ` ${obj.price}.00&euro;`;
    priceProduct.appendChild(price)

    //Product quantity
    const quantityProduct = document.createElement("td");
    quantityProduct.setAttribute("data-label", "Quantity:");
    quantityProduct.classList.add("cartPage__itemsBlock__quantityProduct");
    favProduct.appendChild(quantityProduct);

    // Create quantity buttons
    const quantityDiv = document.createElement("div");
    quantityDiv.classList.add("cartPage__itemsBlock__quantityProduct__quantity");
    quantityProduct.appendChild(quantityDiv);

    const minusButton = document.createElement("button");
    minusButton.id = "cartMinusBtn";
    minusButton.setAttribute("data-id", obj.id)

    minusButton.classList.add(
      "cartPage__itemsBlock__quantityProduct__quantity__minus"
    );

    minusButton.textContent = "-";
    quantityDiv.appendChild(minusButton);

    const quantityButton = document.createElement("button");
    quantityButton.id = "cartQuantityBtn";
    quantityButton.classList.add(
      "cartPage__itemsBlock__quantityProduct__quantity__number"
    );
    quantityButton.textContent = obj.quantity;
    quantityDiv.appendChild(quantityButton);

    const plusButton = document.createElement("button");
    plusButton.id = "cartPlusBtn";
    plusButton.setAttribute("data-id", obj.id)

    plusButton.classList.add(
      "cartPage__itemsBlock__quantityProduct__quantity__plus"
    );
    plusButton.textContent = "+";
    quantityDiv.appendChild(plusButton);

    //Product total price
    const total = document.createElement("td");
    total.setAttribute("data-label", "Total price:");
    total.classList.add("cartPage__itemsBlock__total");
    favProduct.appendChild(total);

    const totalPrice = document.createElement("span");
    totalPrice.classList.add(
      "cartPage__itemsBlock__total__price"
    );
    let calcTotal = obj.quantity * obj.price
    totalPrice.innerHTML = ` ${calcTotal}.00&euro;`;
    total.appendChild(totalPrice);

    return favProduct;
  }
  function loadFavoriteMain(wishList) {
    // Create favorite container
    const favoritePageMain = document.createElement("div");
    favoritePageMain.classList.add("favoritePage");

    //Create title block
    const titleBlock = document.createElement("div");
    titleBlock.classList.add("favoritePage__titleBlock");
    favoritePageMain.appendChild(titleBlock);
    //Create title 
    const title = document.createElement("h1");
    title.classList.add("favoritePage__titleBlock__title");
    title.textContent = "Wish list";
    titleBlock.appendChild(title);

    if (wishList.length < 1) {

      //Crete text container
      const textContainer = document.createElement("div");
      textContainer.classList.add("favoritePage__textContainer");
      favoritePageMain.appendChild(textContainer);

      const textBox = document.createElement("div");
      textBox.classList.add("favoritePage__textContainer__box");



      const textTitle = document.createElement("p");
      textTitle.classList.add("favoritePage__textContainer__box__title");
      textTitle.innerHTML = ` <i class="fa-regular fa-folder-open favoritePage__textContainer__box__icon"></i>There are no products in your wish list`;
      textBox.appendChild(textTitle);

      textContainer.appendChild(textBox);

      const textDescription = document.createElement("div");
      textDescription.classList.add("favoritePage__textContainer__description");
      textDescription.textContent = 'Open the page with the product you like and press the heart - this is how you make your wish list. By adding products that you like, you create a list that can serve as inspiration or that you will eventually put in the basket and order. In order for the list to be remembered on all your devices, you need to be logged.'
      textContainer.appendChild(textDescription);


    }
    else {

      // Create items block
      const itemsBlock = document.createElement("div");
      itemsBlock.classList.add("favoritePage__itemsBlock");
      favoritePageMain.appendChild(itemsBlock);

      const table = document.createElement("table");
      itemsBlock.appendChild(table);

      const thead = document.createElement("thead");
      table.appendChild(thead);


      const favProductTitle = document.createElement("tr");
      thead.appendChild(favProductTitle);

      const removeProductTh = document.createElement("th");
      removeProductTh.classList.add("favoritePage__itemsBlock__removeProduct");
      removeProductTh.innerHTML = `&nbsp;`
      favProductTitle.appendChild(removeProductTh);

      const imgProductTh = document.createElement("th");
      imgProductTh.classList.add("favoritePage__itemsBlock__imgProduct");
      imgProductTh.innerHTML = `&nbsp;`

      favProductTitle.appendChild(imgProductTh);


      const nameProductTh = document.createElement("th");
      nameProductTh.classList.add("favoritePage__itemsBlock__nameProduct");
      nameProductTh.textContent = "Product";
      favProductTitle.appendChild(nameProductTh);


      const priceProduct = document.createElement("th");
      priceProduct.classList.add("favoritePage__itemsBlock__priceProduct");
      priceProduct.textContent = "Price";
      favProductTitle.appendChild(priceProduct);


      const addProduct = document.createElement("th");
      addProduct.classList.add("favoritePage__itemsBlock__addProduct");
      addProduct.innerHTML = `&nbsp;`

      favProductTitle.appendChild(addProduct);


      const tbody = document.createElement("tbody");
      table.appendChild(tbody);

      wishList.forEach(elem => tbody.appendChild(favoriteProduct(elem)))

      if (wishList.length > 1) {
        //Create add all items block
        const addAllBtn = document.createElement("td");
        addAllBtn.classList.add("favoritePage__addAllBtn");
        favoritePageMain.appendChild(addAllBtn);
      }
    }

    return favoritePageMain
  }
  function favoriteProduct(obj) {

    const favProduct = document.createElement("tr");
    favProduct.classList.add("favoriteProduct");

    //Product remove
    const removeProduct = document.createElement("td");
    removeProduct.classList.add("favoritePage__itemsBlock__removeProduct");
    const iconRemove = document.createElement("i");
    iconRemove.id = "iconRemove"
    iconRemove.classList.add("fa-solid", "fa-x", "favoritePage__itemsBlock__removeProduct__icon", "removeFavoriteProduct")
    iconRemove.setAttribute("data-id", obj.id)
    removeProduct.appendChild(iconRemove);
    favProduct.appendChild(removeProduct);

    favProduct.appendChild(removeProduct);

    //Product image
    const imgProductTd = document.createElement("td");
    imgProductTd.classList.add("favoritePage__itemsBlock__imgProduct");

    const imageTd = document.createElement("img");
    imageTd.classList.add("favoritePage__itemsBlock__imgProduct__image")
    imageTd.setAttribute("src", obj.img.img1);
    imageTd.setAttribute("alt", obj.name)

    imgProductTd.appendChild(imageTd);
    favProduct.appendChild(imgProductTd);

    //Product name
    const nameProductTd = document.createElement("td");
    nameProductTd.classList.add("favoritePage__itemsBlock__nameProduct");
    nameProductTd.setAttribute("data-label", "Product: ");


    const nameTd = document.createElement("span");
    nameTd.classList.add("nameProduct__name")
    nameTd.textContent = obj.name;

    nameProductTd.appendChild(nameTd);
    favProduct.appendChild(nameProductTd);

    //Product price
    const priceProduct = document.createElement("td");
    priceProduct.setAttribute("data-label", "Price :");

    priceProduct.classList.add("favoritePage__itemsBlock__priceProduct");
    favProduct.appendChild(priceProduct);

    const price = document.createElement("span");
    price.innerHTML = ` ${obj.price}.00&euro;`;
    priceProduct.appendChild(price)

    //Product add to cart
    const addProduct = document.createElement("td");
    addProduct.classList.add("favoritePage__itemsBlock__addProduct");
    favProduct.appendChild(addProduct);

    const addToCartButton = document.createElement("button");
    addToCartButton.id = "addBtn"

    addToCartButton.classList.add(
      "productPage__main__info__cartButtons__addToCart"
    );
    addToCartButton.setAttribute("data-id", obj.id)
    addToCartButton.textContent = "Add to cart";
    addProduct.appendChild(addToCartButton);

    return favProduct;
  }
  function loadAccountMain() {

    // Create account container
    const accountContainer = document.createElement("div");
    accountContainer.classList.add("accountContainer");

    // Create account title
    const accountTitle = document.createElement("h1");
    accountTitle.classList.add("accountContainer__title");
    accountTitle.textContent = "Account"
    accountContainer.appendChild(accountTitle);

    // Create div main account
    const mainAccount = document.createElement("div");
    mainAccount.id = "mainaccount";
    mainAccount.classList.add("accountContainer__main");
    accountContainer.appendChild(mainAccount);

    const textBox = document.createElement("div");
    textBox.classList.add("accountContainer__main__box");

    const textTitle = document.createElement("p");
    textTitle.classList.add("accountContainer__main__box__title");
    textTitle.innerHTML = `<i class="fa-solid fa-circle-xmark accountContainer__main__box__icon"></i> You can't enter in account, because you are log out.`;
    textBox.appendChild(textTitle);

    mainAccount.appendChild(textBox);

    const textDescription = document.createElement("div");
    textDescription.classList.add("accountContainer__main__description");
    textDescription.innerHTML = `To open the account menu, you need to go to <a href="signup.html" class="accountContainer__main__description__mark">sign up</a> page and create an account, or if you already have an account you need to go to <a href="login.html" class="accountContainer__main__description__mark">log in</a> page.`
    accountContainer.appendChild(textDescription);



    return accountContainer;
  }
  function loadAccountAccessMain() {
    // Create account container
    const accountContainer = document.createElement("div");
    accountContainer.classList.add("accountContainer");

    // Create account title
    const accountTitle = document.createElement("h1");
    accountTitle.classList.add("accountContainer__title");
    accountTitle.textContent = "Account"
    accountContainer.appendChild(accountTitle);

    // Create div main account
    const mainAccount = document.createElement("div");
    mainAccount.id = "mainaccount";
    mainAccount.classList.add("accountContainer__main");
    accountContainer.appendChild(mainAccount);

    //Create aside account
    const asideAccount = document.createElement("aside");
    asideAccount.id = "asideAccount";
    asideAccount.classList.add("accountContainer__main__aside");
    mainAccount.appendChild(asideAccount);

    const menuAccount = document.createElement("ul");
    menuAccount.id = "asideAccount";
    menuAccount.classList.add("accountContainer__main__aside__menuList");
    asideAccount.appendChild(menuAccount);

    const menuOption = ["Account data", "Wish list", "Log out"];
    menuOption.forEach((elem, index) => {
      const liOption = document.createElement("li");
      liOption.classList.add("accountContainer__main__aside__menuList__item");

      const aOption = document.createElement("a");
      aOption.classList.add("accountContainer__main__aside__menuList__item__name");
      aOption.textContent = elem;
      if (index == 1) {
        aOption.href = "favorite.html";
      }
      if (index == 2) {
        aOption.id = "logOut"
      }
      liOption.appendChild(aOption);
      menuAccount.appendChild(liOption);
    });


    // Create div main account
    const menuContent = document.createElement("div");
    menuContent.id = "mainaccount";
    menuContent.classList.add("accountContainer__main__content");
    mainAccount.appendChild(menuContent);


    return accountContainer;
  }

  // Products page
  function loadProductsMain() {
    // Create products container
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("products");

    // Create aside
    const aside = document.createElement("aside");
    aside.id = "productsAside";
    aside.classList.add("products__aside");
    productsDiv.appendChild(aside);

    // Create div main products
    const mainProducts = document.createElement("div");
    mainProducts.id = "mainProducts";
    mainProducts.classList.add("products__main");

    // Create filters div
    const productsFilters = document.createElement("div");
    productsFilters.id = "productsFilters";
    productsFilters.classList.add("productsFilters")

    mainProducts.appendChild(productsFilters);

    // Create display products div
    const displayProducts = document.createElement("div");
    displayProducts.id = "displayProducts";

    const productsPagination = document.createElement("div");
    productsPagination.id = "productsPagination";

    mainProducts.appendChild(displayProducts);
    mainProducts.appendChild(productsPagination);

    productsDiv.appendChild(mainProducts);

    return productsDiv;
  }
  function loadSearchMain() {

    const searchContainer = document.createElement("div");
    searchContainer.classList.add("searchContainer");


    const title = document.createElement("h1");
    title.classList.add("searchContainer__title");
    title.textContent = "Search";
    searchContainer.appendChild(title);

    const searchBox = document.createElement("div");
    searchBox.id = "searchBox";
    searchBox.classList.add("searchContainer__box");
    searchContainer.appendChild(searchBox);

    const formBox = document.createElement("form");
    formBox.id = "searchForm";
    formBox.classList.add("searchContainer__box__form");
    searchBox.appendChild(formBox);

    const searchInput = document.createElement("input");
    searchInput.id = "searchValue";
    searchInput.type = "search";
    searchInput.placeholder = "enter product name"
    searchInput.classList.add("searchContainer__box__form__input");
    formBox.appendChild(searchInput);

    const searchBtn = document.createElement("button");
    searchBtn.classList.add("searchContainer__box__form__btn");
    searchBtn.type = "submit";
    searchBtn.textContent = " Search"
    formBox.appendChild(searchBtn);

    const messageBox = document.createElement("div");
    messageBox.id = "messageBox";
    messageBox.classList.add("searchContainer__box__messageBox");
    searchBox.appendChild(messageBox);

    const warningMessage = document.createElement("p");
    warningMessage.id = "warningMessage";
    warningMessage.classList.add("searchContainer__box__messageBox__warning");
    searchBox.appendChild(warningMessage);

    const searchResult = document.createElement("div");
    searchResult.id = "searchResult";
    searchResult.classList.add("searchContainer__searchResult");
    searchContainer.appendChild(searchResult);

    const searchImgBox = document.createElement("div");
    searchImgBox.classList.add("searchContainer__searchResult__box");
    searchResult.appendChild(searchImgBox);

    const searchImg = document.createElement("img");
    searchImg.classList.add("searchContainer__searchResult__box__img");
    searchImg.setAttribute("src", "../../../img/search/search-results.png");
    searchImg.setAttribute("alt", "search result");
    searchImgBox.appendChild(searchImg);

    return searchContainer
  }
  function searchNoResult() {

    const searchImgBox = document.createElement("div");
    searchImgBox.classList.add("searchContainer__searchResult__box");


    const searchImg = document.createElement("img");
    searchImg.classList.add("searchContainer__searchResult__box__img");
    searchImg.setAttribute("src", "../../../img/search/search-results.png");
    searchImg.setAttribute("alt", "search result");
    searchImgBox.appendChild(searchImg);

    return searchImgBox
  }

  //Sorts and filters
  function sortPopular(data) {
    const popularSort = document.getElementById("popularSort").checked;
    if (popularSort) {
      data = data.sort((a, b) =>
        parseInt(a.soldItems) < parseInt(b.soldItems) ? 1 : -1
      );
    }
    return data;
  }
  function sortLowHigh(data) {
    const priceLowSort = document.getElementById("priceLowSort").checked;
    if (priceLowSort) {
      data = data.sort((a, b) =>
        parseInt(a.price - (a.price * (a.discount / 100))) > parseInt(b.price - (b.price * (b.discount / 100))) ? 1 : -1
      );
    }
    return data;
  }
  function sortHighLow(data) {
    const sortHighLow = document.getElementById("priceHighSort").checked;
    if (sortHighLow) {
      data = data.sort((a, b) =>
        parseInt(a.price - (a.price * (a.discount / 100))) < parseInt(b.price - (b.price * (b.discount / 100))) ? 1 : -1
      );
    }
    return data;
  }
  function filterNew(data) {
    const newFilter = document.getElementById("newFilter").checked;
    if (newFilter) {
      return data.filter((elem) => elem.new == true);
    }
    return data;
  }
  function filterDiscount(data) {
    const discountPrice = document.getElementById("discountPrice").checked;
    if (discountPrice) {
      return data.filter((elem) => elem.discount > 0);
    }
    return data;
  }
  function filterContainerSmall() {
    const filterContainer = document.createElement("div");
    filterContainer.classList.add("filterContainer")

    // Create the main container div
    const accordion = document.createElement("div");
    accordion.className = "accordion accordion-flush";
    accordion.id = "accordionFlushExample";

    // Create the first accordion item
    const item1 = document.createElement("div");
    item1.className = "accordion-item accordion-item--fiters";

    // Create the first accordion item header
    const header1 = document.createElement("h2");
    header1.className = "accordion-header";
    header1.id = "flush-headingOne";

    // Create the button inside the first accordion item header
    const button1 = document.createElement("button");
    button1.className = "accordion-button collapsed accordion-button--filters";
    button1.type = "button";
    button1.setAttribute("data-bs-toggle", "collapse");
    button1.setAttribute("data-bs-target", "#flush-collapseOne");
    button1.setAttribute("aria-expanded", "false");
    button1.setAttribute("aria-controls", "flush-collapseOne");
    button1.textContent = "Categories";

    // Append the button to the first accordion item header
    header1.appendChild(button1);

    // Create the first accordion item body
    const body1 = document.createElement("div");
    body1.id = "flush-collapseOne";
    body1.className = "accordion-collapse collapse";
    body1.setAttribute("aria-labelledby", "flush-headingOne");
    body1.setAttribute("data-bs-parent", "#accordionFlushExample");

    // Create the content inside the first accordion item body
    const content1 = document.createElement("div");
    content1.className = "accordion-body";

    // Create the unordered list inside the first accordion item body
    const list1 = document.createElement("ul");
    list1.className = "filterSection__title__list";

    // Create the list items for categories
    const listItem1 = document.createElement("li");
    listItem1.className = "filterSection__title__list__item";
    const link1 = document.createElement("a");
    link1.className = "filterSection__title__list__item__name";
    link1.href = "products.html?category=all";
    link1.textContent = "All";
    listItem1.appendChild(link1);

    const listItem2 = document.createElement("li");
    listItem2.className = "filterSection__title__list__item";
    const link2 = document.createElement("a");
    link2.className = "filterSection__title__list__item__name";
    link2.href = "products.html?category=chairs";
    link2.textContent = "Chairs";
    listItem2.appendChild(link2);

    const listItem3 = document.createElement("li");
    listItem3.className = "filterSection__title__list__item";
    const link3 = document.createElement("a");
    link3.className = "filterSection__title__list__item__name";
    link3.href = "products.html?category=tables";
    link3.textContent = "Tables";
    listItem3.appendChild(link3);

    const listItem4 = document.createElement("li");
    listItem4.className = "filterSection__title__list__item";
    const link4 = document.createElement("a");
    link4.className = "filterSection__title__list__item__name";
    link4.href = "products.html?category=sofas";
    link4.textContent = "Sofas";
    listItem4.appendChild(link4);

    // Append the list items to the unordered list
    list1.appendChild(listItem1);
    list1.appendChild(listItem2);
    list1.appendChild(listItem3);
    list1.appendChild(listItem4);

    // Append the unordered list to the content inside the first accordion item body
    content1.appendChild(list1);

    // Append the content to the first accordion item body
    body1.appendChild(content1);

    // Append the first accordion item header and body to the first accordion item
    item1.appendChild(header1);
    item1.appendChild(body1);


    // Create the second accordion item
    const item2 = document.createElement("div");
    item2.className = "accordion-item accordion-item--fiters";

    // Create the second accordion item header
    const header2 = document.createElement("h2");
    header2.className = "accordion-header";
    header2.id = "flush-headingTwo";

    // Create the button inside the second accordion item header
    const button2 = document.createElement("button");
    button2.className = "accordion-button collapsed accordion-button--filters";
    button2.type = "button";
    button2.setAttribute("data-bs-toggle", "collapse");
    button2.setAttribute("data-bs-target", "#flush-collapseTwo");
    button2.setAttribute("aria-expanded", "false");
    button2.setAttribute("aria-controls", "flush-collapseTwo");
    button2.textContent = "Sort";

    // Append the button to the second accordion item header
    header2.appendChild(button2);

    // Create the second accordion item body
    const body2 = document.createElement("div");
    body2.id = "flush-collapseTwo";
    body2.className = "accordion-collapse collapse";
    body2.setAttribute("aria-labelledby", "flush-headingTwo");
    body2.setAttribute("data-bs-parent", "#accordionFlushExample");

    // Create the content inside the second accordion item body
    const content2 = document.createElement("div");
    content2.className = "accordion-body";

    // Create the unordered list inside the second accordion item body
    const list2 = document.createElement("ul");
    list2.className = "filterSection__title__list";

    // Create the list items for sorting options
    const listItem5 = document.createElement("li");
    listItem5.className = "filterSection__title__list__item";
    const label1 = document.createElement("label");
    label1.className = "filterSection__title__list__item__name";
    label1.setAttribute("for", "popularSort");
    label1.textContent = "Popular";
    const input1 = document.createElement("input");
    input1.setAttribute("type", "radio");
    input1.id = "popularSort";
    input1.className = "filterSection__title__list__item__input";
    input1.name = "sortList";
    input1.checked = true;
    listItem5.appendChild(label1);
    listItem5.appendChild(input1);

    const listItem6 = document.createElement("li");
    listItem6.className = "filterSection__title__list__item";
    const label2 = document.createElement("label");
    label2.className = "filterSection__title__list__item__name";
    label2.setAttribute("for", "priceLowSort");
    label2.textContent = "Price low-high";
    const input2 = document.createElement("input");
    input2.setAttribute("type", "radio");
    input2.id = "priceLowSort";
    input2.className = "filterSection__title__list__item__input";
    input2.name = "sortList";
    listItem6.appendChild(label2);
    listItem6.appendChild(input2);

    const listItem7 = document.createElement("li");
    listItem7.className = "filterSection__title__list__item";
    const label3 = document.createElement("label");
    label3.className = "filterSection__title__list__item__name";
    label3.setAttribute("for", "priceHighSort");
    label3.textContent = "Price high-low";
    const input3 = document.createElement("input");
    input3.setAttribute("type", "radio");
    input3.id = "priceHighSort";
    input3.className = "filterSection__title__list__item__input";
    input3.name = "sortList";
    listItem7.appendChild(label3);
    listItem7.appendChild(input3);

    // Append the list items to the unordered list
    list2.appendChild(listItem5);
    list2.appendChild(listItem6);
    list2.appendChild(listItem7);

    // Append the unordered list to the content inside the second accordion item body
    content2.appendChild(list2);

    // Append the content to the second accordion item body
    body2.appendChild(content2);

    // Append the second accordion item header and body to the second accordion item
    item2.appendChild(header2);
    item2.appendChild(body2);

    // Create the third accordion item (similar to item2) and append it to the main container div
    const item3 = document.createElement("div");
    item3.className = "accordion-item accordion-item--fiters";

    // Create the third accordion item header
    const header3 = document.createElement("h2");
    header3.className = "accordion-header";
    header3.id = "flush-headingThree";

    // Create the button inside the third accordion item header
    const button3 = document.createElement("button");
    button3.className = "accordion-button collapsed accordion-button--filters";
    button3.type = "button";
    button3.setAttribute("data-bs-toggle", "collapse");
    button3.setAttribute("data-bs-target", "#flush-collapseThree");
    button3.setAttribute("aria-expanded", "false");
    button3.setAttribute("aria-controls", "flush-collapseThree");
    button3.textContent = "Filters";

    // Append the button to the third accordion item header
    header3.appendChild(button3);

    // Create the third accordion item body
    const body3 = document.createElement("div");
    body3.id = "flush-collapseThree";
    body3.className = "accordion-collapse collapse";
    body3.setAttribute("aria-labelledby", "flush-headingThree");
    body3.setAttribute("data-bs-parent", "#accordionFlushExample");

    // Create the content inside the third accordion item body
    const content3 = document.createElement("div");
    content3.className = "accordion-body";

    // Create the unordered list inside the third accordion item body
    const list3 = document.createElement("ul");
    list3.className = "filterSection__title__list";

    // Create the list items for filter options
    const listItem8 = document.createElement("li");
    listItem8.className = "filterSection__title__list__item";
    const label4 = document.createElement("label");
    label4.className = "filterSection__title__list__item__name";
    label4.setAttribute("for", "newFilter");
    label4.textContent = "New";
    const input4 = document.createElement("input");
    input4.setAttribute("type", "checkbox");
    input4.id = "newFilter";
    input4.className = "filterSection__title__list__item__input";
    input4.name = "filters";
    listItem8.appendChild(label4);
    listItem8.appendChild(input4);

    const listItem9 = document.createElement("li");
    listItem9.className = "filterSection__title__list__item";
    const label5 = document.createElement("label");
    label5.className = "filterSection__title__list__item__name";
    label5.setAttribute("for", "discountPrice");
    label5.textContent = "Discount";
    const input5 = document.createElement("input");
    input5.setAttribute("type", "checkbox");
    input5.id = "discountPrice";
    input5.className = "filterSection__title__list__item__input";
    input5.name = "filters";
    listItem9.appendChild(label5);
    listItem9.appendChild(input5);

    // Append the list items to the unordered list
    list3.appendChild(listItem8);
    list3.appendChild(listItem9);

    // Append the unordered list to the content inside the third accordion item body
    content3.appendChild(list3);

    // Append the content to the third accordion item body
    body3.appendChild(content3);

    // Append the third accordion item header and body to the third accordion item
    item3.appendChild(header3);
    item3.appendChild(body3);

    accordion.appendChild(item1);
    accordion.appendChild(item2);
    accordion.appendChild(item3);

    filterContainer.appendChild(accordion);




    return filterContainer;
  }
  function filtersContainer() {
    const filterContainer = document.createElement("div");

    // Create "Categories"
    const categories = document.createElement("div");
    categories.id = "filterSection";
    filterContainer.appendChild(categories);

    const categoriesTitle = document.createElement("span");
    categoriesTitle.classList.add("filterSection__title");
    categoriesTitle.textContent = "Categories";
    categories.appendChild(categoriesTitle);

    const ulCategories = document.createElement("ul");
    ulCategories.classList.add("filterSection__title__list");

    categories.appendChild(ulCategories);

    const categoriesList = ["All", "Chairs", "Tables", "Sofas"];
    categoriesList.forEach(function (category) {
      const liCategories = document.createElement("li");
      liCategories.classList.add("filterSection__title__list__item");

      const aCategories = document.createElement("a");
      aCategories.classList.add("filterSection__title__list__item__name");
      aCategories.textContent = category;
      const url = "products.html?category=" + category.toLowerCase();
      aCategories.href = url;

      liCategories.appendChild(aCategories);
      ulCategories.appendChild(liCategories);
    });

    // Create "Sort"
    const sort = document.createElement("div");
    sort.id = "filterSection";
    filterContainer.appendChild(sort);

    const sortTitle = document.createElement("span");
    sortTitle.classList.add("filterSection__title");

    sortTitle.textContent = "Sort";
    sort.appendChild(sortTitle);

    const ulSort = document.createElement("ul");
    ulSort.classList.add("filterSection__title__list");

    const sortData = [
      { id: "popularSort", label: "Popular" },
      { id: "priceLowSort", label: "Price low-high" },
      { id: "priceHighSort", label: "Price high-low" },
    ];

    sortData.forEach(function (option, index) {
      const liSort = document.createElement("li");
      liSort.classList.add("filterSection__title__list__item");

      const labelSort = document.createElement("label");
      labelSort.classList.add("filterSection__title__list__item__name");

      labelSort.setAttribute("for", option.id);
      labelSort.textContent = option.label;

      const inputSort = document.createElement("input");

      if (index == 0) {
        inputSort.setAttribute("checked", "");
      }

      inputSort.setAttribute("type", "radio");
      inputSort.setAttribute("id", option.id);
      inputSort.setAttribute("class", "");
      inputSort.setAttribute("name", "sortList");
      inputSort.classList.add("filterSection__title__list__item__input");

      liSort.appendChild(labelSort);
      liSort.appendChild(inputSort);

      ulSort.appendChild(liSort);
    });

    sort.appendChild(ulSort);

    // Create "Filters"
    const filter = document.createElement("div");
    filter.id = "filterSection";

    filterContainer.appendChild(filter);

    const filterTitle = document.createElement("span");
    filterTitle.classList.add("filterSection__title");
    filterTitle.textContent = "Filters";
    filter.appendChild(filterTitle);

    const ulFilter = document.createElement("ul");
    ulFilter.classList.add("filterSection__title__list");

    const filterData = [
      { id: "newFilter", label: "New" },
      { id: "discountPrice", label: "Discount" },
    ];

    filterData.forEach(function (option) {
      const liFilter = document.createElement("li");
      liFilter.classList.add("filterSection__title__list__item");

      const labelFilter = document.createElement("label");
      labelFilter.classList.add("filterSection__title__list__item__name");
      labelFilter.setAttribute("for", option.id);
      labelFilter.textContent = option.label;

      const inputFilter = document.createElement("input");

      inputFilter.setAttribute("type", "checkbox");
      inputFilter.setAttribute("id", option.id);
      inputFilter.setAttribute("class", "");
      inputFilter.setAttribute("name", "filters");
      inputFilter.classList.add("filterSection__title__list__item__input");

      liFilter.appendChild(labelFilter);
      liFilter.appendChild(inputFilter);

      ulFilter.appendChild(liFilter);
    });

    filter.appendChild(ulFilter);

    return filterContainer;
  }
  //Render products and pagination
  function renderProducts(obj, page) {
    //sort prodacts
    obj = sortPopular(obj);
    obj = sortLowHigh(obj);
    obj = sortHighLow(obj);

    //filters
    obj = filterNew(obj);
    obj = filterDiscount(obj);

    const displayProducts = document.getElementById("displayProducts");
    // Create products items container
    const productsItemsDiv = document.createElement("div");
    productsItemsDiv.id = "productsItems";
    productsItemsDiv.classList.add("products__main__items");
    let currentPage = 1;
    let pageSize;
    if (window.innerWidth <= 992) {
      pageSize = 12;
    } else if (window.innerWidth > 992) {
      pageSize = 15;
    }
    if (typeof page == "number") {
      currentPage = page;
    }
    let lastPage = Math.ceil(obj.length / pageSize);

    if (page == "Next") {
      let curentButton = document.querySelector(".currentPage");
      currentPage = Number(curentButton.textContent);
      if (currentPage * pageSize < obj.length) {
        currentPage++;
      }
    }
    if (page == "Previous") {
      let curentButton = document.querySelector(".currentPage");
      currentPage = Number(curentButton.textContent);
      if (currentPage > 1) {
        currentPage--;
      }
    }

    obj
      .filter((elem, index) => {
        let start = (currentPage - 1) * pageSize;
        let end = currentPage * pageSize;
        if (index >= start && index < end) return true;
      })
      .forEach((product) => {
        const itemClass = "item-products";
        productsItemsDiv.appendChild(item(product, itemClass));
      });
    displayProducts.innerHTML = "";
    displayProducts.appendChild(productsItemsDiv);

    paginationButton(lastPage);
    if (lastPage > 1) {
      paginationClasses(currentPage, lastPage);
    }
  }
  function paginationClasses(currentPage, lastPage) {
    let pagesTake = document.querySelectorAll(".pageNumber");
    pagesTake.forEach((elem) => {
      if (elem.dataset.page == currentPage) {
        elem.classList.add("currentPage");
      }
    });

    //Disabled previous and next buttons
    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");

    currentPage == 1
      ? previousButton.classList.add("disabled")
      : previousButton.classList.remove("disabled");
    currentPage == lastPage
      ? nextButton.classList.add("disabled")
      : nextButton.classList.remove("disabled");
    //Tex content and classes of pagination buttons
    if (lastPage == 2) {
      const fristPage = document.getElementById("fristPage");
      const secondPage = document.getElementById("secondPage");
      if (currentPage == 1) {
        fristPage.textContent = currentPage;
        secondPage.textContent = currentPage + 1;
        fristPage.classList.add("currentPage");
        secondPage.classList.remove("currentPage");
      } else {
        fristPage.textContent = currentPage - 1;
        secondPage.textContent = currentPage;
        fristPage.classList.remove("currentPage");
        secondPage.classList.add("currentPage");
      }
    } else if (lastPage > 2) {
      const fristPage = document.getElementById("fristPage");
      const secondPage = document.getElementById("secondPage");
      const thridPage = document.getElementById("thridPage");
      if (currentPage == 1) {
        fristPage.textContent = currentPage;
        secondPage.textContent = currentPage + 1;
        thridPage.textContent = currentPage + 2;
        fristPage.classList.add("currentPage");
        secondPage.classList.remove("currentPage");
        thridPage.classList.remove("currentPage");
      } else if (currentPage == lastPage) {
        thridPage.textContent = currentPage;
        secondPage.textContent = currentPage - 1;
        fristPage.textContent = currentPage - 2;
        fristPage.classList.remove("currentPage");
        secondPage.classList.remove("currentPage");
        thridPage.classList.add("currentPage");
      } else {
        fristPage.textContent = currentPage - 1;
        secondPage.textContent = currentPage;
        thridPage.textContent = currentPage + 1;
        fristPage.classList.remove("currentPage");
        secondPage.classList.add("currentPage");
        thridPage.classList.remove("currentPage");
      }
    }
  }
  function paginationButton(lastPage) {
    //Pagination
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "Page navigation example");

    const ulButtons = document.createElement("ul");
    ulButtons.id = "pageButtonList";
    ulButtons.classList.add(
      "pagination",
      "justify-content-center",
      "pagination--products"
    );
    if (lastPage > 1) {
      const li1 = document.createElement("li");
      li1.id = "previousButton";
      li1.classList.add("page-item", "disabled");
      const a1 = document.createElement("a");
      a1.id = "previousPage";
      a1.classList.add("page-link", "page-link--products");
      a1.href = "#";
      a1.setAttribute("tabindex", "-1");
      a1.setAttribute("aria-disabled", "true");
      a1.textContent = "Previous";
      li1.appendChild(a1);
      ulButtons.appendChild(li1);

      const li2 = document.createElement("li");
      li2.classList.add("page-item");
      const a2 = document.createElement("a");
      a2.id = "fristPage";
      a2.classList.add("page-link", "page-link--products", "pageNumber");
      a2.href = "#";
      a2.setAttribute("data-page", "1");
      a2.textContent = "1";
      li2.appendChild(a2);
      ulButtons.appendChild(li2);

      const li3 = document.createElement("li");
      li3.classList.add("page-item");
      const a3 = document.createElement("a");
      a3.id = "secondPage";
      a3.classList.add("page-link", "page-link--products", "pageNumber");
      a3.href = "#";
      a3.setAttribute("data-page", "2");
      a3.textContent = "2";
      li3.appendChild(a3);
      ulButtons.appendChild(li3);
      if (lastPage > 2) {
        const li4 = document.createElement("li");
        li4.id = "thrid";
        li4.classList.add("page-item");
        const a4 = document.createElement("a");
        a4.id = "thridPage";
        a4.classList.add("page-link", "page-link--products", "pageNumber");
        a4.href = "#";
        a4.setAttribute("data-page", "3");

        a4.textContent = "3";
        li4.appendChild(a4);
        ulButtons.appendChild(li4);
      }
      const li5 = document.createElement("li");
      li5.id = "nextButton";
      li5.classList.add("page-item");
      const a5 = document.createElement("a");
      a5.id = "nextPage";
      a5.classList.add("page-link", "page-link--products");
      a5.href = "#";
      a5.textContent = "Next";
      li5.appendChild(a5);
      ulButtons.appendChild(li5);
    }
    nav.appendChild(ulButtons);

    productsPagination.innerHTML = "";
    productsPagination.appendChild(nav);
  }
  function searchResult(data, searchValue) {

    let searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";

    const warningMessage = document.getElementById("warningMessage");


    let dataContainer = document.createElement("div");
    dataContainer.classList.add("searchContainer__searchResult__dataContainer");
    if (searchValue == "") {
      warningMessage.textContent = "Search field is empty! Enter product name and press button";
      return searchNoResult();
    }
    else {
      console.log(data.length)
      if (data.length < 1) {
        warningMessage.textContent = "Don't have any product with that name.";
        return searchNoResult();

      } else {
        warningMessage.textContent = ""

        data.forEach(elem =>
          dataContainer.appendChild(item(elem, "item--search")));
      }
      return dataContainer;
    }
  }
  function addLikeClasses() {
    const like = document.getElementById("heartIcon");
    like.classList.toggle("productPage__main__info__header__heartIcon--normal");
    like.classList.toggle(
      "productPage__main__info__header__heartIcon--clicked"
    );
    return like.dataset.id;
  }
  function resposniveSection2() {
    let screenWidthSection2 = window.matchMedia("(max-width: 992px)");
    const section2 = document.getElementById("section2");

    if (screenWidthSection2.matches) {
      section2.innerHTML = "";
      section2.appendChild(view.loadSection2Small());
    } else {
      section2.innerHTML = "";
      section2.appendChild(view.loadSection2());
    }
  }
  function setQuantity(e) {
    let quantity = document.getElementById("quantityBtn").textContent;
    quantity = Number(quantity);
    if (e.target.id == "plusBtn") {
      quantity++;
    }
    else {
      if (quantity > 1) {
        quantity--;
      }
    }
    document.getElementById("quantityBtn").textContent = quantity;
  }

  function hamMenu() {
    const checkBox = document.getElementById("menu-btn");
    if (checkBox.checked === false) {
      displayHamMenu();
    } else {
      closeHamMenu();
    }
  }
  function hamMenuIcons() {
    let screenWidthHamMenu = window.matchMedia("(max-width: 576px)");
    const menuIcons = document.getElementById("hamMenuIcons");
    if (screenWidthHamMenu.matches) {
      menuIcons.innerHTML = "";
      menuIcons.append(loadHamMenuIcons());
    }
    else {
      menuIcons.innerHTML = "";
    }

  }
  function responsivefooterMenu() {
    let screenWidthFooterMenu = window.matchMedia("(max-width: 768px)");
    const footerMenu = document.getElementById("footerMenu");
    if (footerMenu) {
      if (screenWidthFooterMenu.matches) {
        footerMenu.innerHTML = "";
        footerMenu.appendChild(loadfooterMenuSmall());
      } else {
        footerMenu.innerHTML = "";
        footerMenu.appendChild(loadfooterMenuLarge());
      }
    }
  }
  function passwordIcon() {
    document.getElementById("passwordIcon").classList.toggle("fa-eye-slash");
    document.getElementById("passwordIcon").classList.toggle("fa-eye");
    const type = document.getElementById("passwordInput").type;

    type == "password"
      ? (document.getElementById("passwordInput").type = "text")
      : (document.getElementById("passwordInput").type = "password");
  }
  function loadResponsiveFiltersContainer() {
    let screenWidthProductsPage = window.matchMedia("(max-width: 576px)");
    const aside = document.getElementById("productsAside");
    const productsFilters = document.getElementById("productsFilters");

    if (screenWidthProductsPage.matches) {
      productsFilters.innerHTML = "";
      aside.innerHTML = "";
      productsFilters.appendChild(filterContainerSmall())
    } else {
      productsFilters.innerHTML = "";
      aside.innerHTML = "";
      aside.appendChild(filtersContainer());
    }

  }
  function processUsername(testName, username) {
    let message = document.getElementById("usernameWarning");

    if (username === "") {
      message.innerHTML = "Field name is empty";
    } else if (testName) {
      message.innerHTML = "";
    } else {
      message.innerHTML = "The name was not entered correctly!";
    }
  }
  function processEmail(testEmail, email) {
    let message = document.getElementById("emailWarning");
    if (email === "") {
      message.innerHTML =
        "Field email is empty";
    } else if (testEmail) {
      message.innerHTML = "";
    } else {
      message.innerHTML = "The email was not entered correctly!";

    }
  }
  function processPassword(testPassword, password) {
    let message = document.getElementById("passwordWarning");
    if (password === "") {
      message.innerHTML = "Field password is empty";
    } else if (testPassword) {
      message.innerHTML = "";
    } else {
      message.innerHTML = "The password was not entered correctly!";
    }
  }
  function addMessageProduct() {
    document.getElementById("messageProduct").innerHTML = ""

    const messageContent = document.createElement("div");
    messageContent.classList.add("productPage__main__messageBox__content");

    const messageIcon = document.createElement("i");
    messageIcon.classList.add("fa-solid", "fa-circle-check", "productPage__main__messageBox__content__icon");
    messageContent.appendChild(messageIcon)


    const messageText = document.createElement("span");
    messageText.classList.add("productPage__main__messageBox__content__text")
    messageText.textContent = "Product is added to your cart"
    messageContent.appendChild(messageText)

    return messageContent;
  }
  function loadDeliveryPageMain() {
    const pageContent = document.createElement("div");
    pageContent.classList.add("deliveryPage");
    pageContent.innerHTML = `<h1 class="deliveryPage__title">Delivery</h1>`

    const pageText = document.createElement("div");
    pageText.classList.add("deliveryPage__text");
    pageText.innerHTML = `
      <p class="deliveryPage__text__paraf">
        At furniture store, we understand the excitement and anticipation of
        receiving your new furniture. We strive to make the delivery process as
        seamless and convenient as possible, ensuring that your items arrive
        safely and on time. Our dedicated delivery team is committed to
        providing you with exceptional service from the moment you make your
        purchase to the final placement of your furniture in your home.
      </p>
      <ol class="deliveryPage__text__list">
        <li class="deliveryPage__text__list__item">
          <strong>Fast and Reliable Delivery:</strong> We know you're eager to enjoy your new
          furniture, which is why we offer fast and reliable delivery options.
          Once your order is placed, our team will work diligently to schedule a
          delivery time that is convenient for you.
        </li>
        <li class="deliveryPage__text__list__item">
          <strong>Expert Handling:</strong> Our delivery professionals are highly trained and
          experienced in handling furniture of all shapes and sizes. They will
          carefully load, transport, and unload your items, ensuring that they
          arrive in pristine condition. We take every precaution to protect your
          furniture during transit, using specialized packaging and pa
        </li>
        <li class="deliveryPage__text__list__item">
          <strong>White Glove Service: </strong> We take pride in offering a white glove delivery
          service that goes above and beyond your expectations. Our team will
          not only deliver your furniture but also handle the assembly,
          placement, and installation, if required. Sit back and relax while we
          take care of all the heavy lifting.
        </li>
        <li class="deliveryPage__text__list__item">
          <strong>Timely Communication:</strong> We understand the importance of effective
          communication throughout the delivery process. Our team will keep you
          informed every step of the way, from confirming your delivery
          appointment to providing real-time updates on the status of your
          shipment. You can rely on us to be transparent and responsive to any
          inquiries you may have.
        </li>
        <li class="deliveryPage__text__list__item">
          <strong>Flexible Delivery Options:</strong> We offer flexible delivery options to
          accommodate your schedule. Whether you prefer weekday or weekend
          deliveries, morning or evening time slots, we strive to find a
          convenient window that works best for you. We value your time and aim
          to make the delivery process hassle-free.
        </li>
        <li class="deliveryPage__text__list__item">
          <strong>Courteous and Professional Staff:</strong> Our delivery team is committed to
          providing exceptional customer service. They will treat your home with
          the utmost respect, ensuring a smooth and pleasant delivery
          experience. If you have any special requests or concerns, please don't
          hesitate to let us know, and we will do our best to accommodate them.
        </li>
      </ol>
      <p class="deliveryPage__text__paraf">
        Thank you for choosing furniture store for all your furniture needs. We
        look forward to delivering high-quality, stylish furniture that will
        transform your space. If you have any questions or need assistance,
        please feel free to reach out to our friendly customer support team.
      </p>`;

    pageContent.appendChild(pageText)

    return pageContent;
  }
  function loadSupportPageMain() {
    const pageContent = document.createElement("div");
    pageContent.classList.add("supportPage");
    pageContent.innerHTML = `<h1 class="supportPage__title">Customer support</h1>`

    const pageText = document.createElement("div");
    pageText.classList.add("supportPage__text");
    pageText.innerHTML = `
    <p class="supportPage__text__paraf">
    We appreciate your interest in our furniture store and would be
    delighted to assist you. Our dedicated customer support team is here to
    provide you with the best possible service and address any questions or
    concerns you may have.
  </p>

  <p class="supportPage__text__paraf">
    To reach us, simply give us a call at
    <strong>1-800-123-4567</strong> during our business hours, and one of
    our knowledgeable representatives will be ready to assist you.
    Alternatively, you can send us an email at
    <strong>support@furniturestore.com</strong>, and we will promptly
    respond to your inquiry.
  </p>

  <p class="supportPage__text__paraf">
    We understand that finding the perfect furniture pieces for your home is
    important, and we are here to guide you through the process. Whether you
    need help with product recommendations, measurements, or any other
    inquiries, our team is well-equipped to provide you with the information
    you need to make an informed decision.
  </p>

  <p class="supportPage__text__paraf">
    At our furniture store, we take pride in ensuring your satisfaction from
    the moment you start browsing our collection to the delivery and beyond.
    If you encounter any issues with your order, such as damages or missing
    parts, please let us know, and we will work diligently to resolve it for
    you.
  </p>

  <p class="supportPage__text__paraf">
    Your feedback is valuable to us, as it helps us improve our products and
    services. We encourage you to share your thoughts and suggestions with
    us so that we can continue to enhance your shopping experience.
  </p>

  <p class="supportPage__text__paraf">
    Thank you for choosing our furniture store. We look forward to serving
    you and helping you create a beautiful and comfortable living space.
  </p>
  
    `

    pageContent.appendChild(pageText)

    return pageContent;
  }
  return {
    // getDOMString: () => {
    //   return DOMString;
    // },
    loadHomePage: (data) => {
      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");
      const main = document.createElement("div");
      main.classList.add("main");

      main.appendChild(loadSection1());
      main.appendChild(loadSection2());
      main.appendChild(loadSection3(data));

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(main);
      pageContent.appendChild(loadFooter());
      return pageContent;
    },
    loadProductsPage: () => {
      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");
      const main = document.createElement("div");
      main.classList.add("main");
      main.setAttribute("id", "main");

      main.appendChild(loadProductsMain());

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(main);
      pageContent.appendChild(loadFooter());

      return pageContent;
    },
    loadProductPage: (data, array) => {

      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");
      const main = document.createElement("div");
      main.classList.add("main");
      main.setAttribute("id", "main");

      const messageBox = document.createElement("div");
      messageBox.id = "messageProduct"
      messageBox.classList.add("productPage__main__messageBox");
      messageBox.innerHTML = "";

      main.appendChild(messageBox)
      main.appendChild(loadProductMain(data, array));

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(main);
      pageContent.appendChild(loadFooter());

      return pageContent;
    },
    loadLoginPage: () => {
      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(loadLoginMain());
      pageContent.appendChild(loadFooter());

      return pageContent;
    },
    loadSignupPage: () => {
      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(loadSignupMain());
      pageContent.appendChild(loadFooter());

      return pageContent;
    },
    loadFavoritePage: (data) => {
      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(loadFavoriteMain(data));
      pageContent.appendChild(loadFooter());

      return pageContent;
    },
    loadSearchPage: () => {
      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(loadSearchMain());
      pageContent.appendChild(loadFooter());

      return pageContent;
    },
    loadSearchResult: (data, searchValue) => {
      return searchResult(data, searchValue);
    },
    loadAcountPage: () => {

      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(loadAccountMain());
      pageContent.appendChild(loadFooter());

      return pageContent;
    },
    loadAcountAccessPage: () => {

      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(loadAccountAccessMain());
      pageContent.appendChild(loadFooter());

      return pageContent;
    },
    loadCartPage: (data) => {
      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(loadCartPageMain(data));
      pageContent.appendChild(loadFooter());

      return pageContent
    },
    loadDeliveryPage: () => {
      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(loadDeliveryPageMain());
      pageContent.appendChild(loadFooter());

      return pageContent
    },
    loadSupportPage: () => {
      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");

      pageContent.appendChild(loadHeader());
      pageContent.appendChild(loadSupportPageMain());
      pageContent.appendChild(loadFooter());

      return pageContent
    },

    loadSection2,
    loadSection2Small,
    displayHamMenu,
    closeHamMenu,
    loadfooterMenuSmall,
    loadfooterMenuLarge,
    renderProducts,
    filtersContainer,
    filterContainerSmall,
    loadHamMenuIcons,
    addLikeClasses,
    resposniveSection2,
    setQuantity,
    hamMenu,
    hamMenuIcons,
    responsivefooterMenu,
    passwordIcon,
    loadResponsiveFiltersContainer,
    processUsername,
    processEmail,
    processPassword,
    addMessageProduct,


  };
})();