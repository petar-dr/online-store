//VIEW
export const view = (function () {
  const DOMString = {
    homePage: "home_page",
    header: "header",
    products: "products",
    productsPage: "products_page",
    productPage: "product_page",
    loginPage: "login_page",
    signupPage: "signup_page",
    main: "main",
    footer: "footer",
    delivery: "iconDelivery",
    service: "iconService",
    chairs: "chairs",
    tables: "tables",
    sofas: "sofas",
  };

  function item(obj) {
    //div item
    const item = document.createElement("div");
    item.classList.add("item");
    // div article
    const article = document.createElement("div");
    article.classList.add("item__article");
    item.appendChild(article);
    // heart icon
    // const icon = document.createElement("i");
    // icon.setAttribute("id","itemLikeIcon")
    // icon.classList.add("fa-solid", "fa-heart", "item__article__heart");
    // article.appendChild(icon);
    //a tag
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
      oldPrice.innerHTML = `${obj.price}.00 $ `;

      priceBox.appendChild(oldPrice);

      let newPrice = obj.price - Math.floor(obj.price / obj.discount);

      const price = document.createElement("span");
      price.classList.add("item__article__tag__box__text__priceBox__price");
      price.innerHTML = ` ${newPrice}.00 $`;
      priceBox.appendChild(price);
    }
    //price without discount
    else {
      const price = document.createElement("span");
      price.classList.add("item__article__tag__box__text__priceBox__price");
      price.innerHTML = ` ${obj.price}.00 $`;
      priceBox.appendChild(price);
    }

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
  // header and footer
  function loadHeader() {
    // create header element
    var header = document.createElement("header");
    header.id = "header";
    header.classList.add("header", "container-fluid");

    // Create header__top element
    var headerTop = document.createElement("div");
    headerTop.classList.add("header__top");
    header.appendChild(headerTop);

    // Create header__top__text element
    var headerTopText = document.createElement("snap");
    headerTopText.classList.add("header__top__text");
    headerTopText.textContent = "Welcome to furniture store.";
    headerTop.appendChild(headerTopText);

    // Create header__main element
    var headerMain = document.createElement("div");
    headerMain.classList.add("header__main");
    header.appendChild(headerMain);

    // Create header__main__left element
    var headerMainLeft = document.createElement("div");
    headerMainLeft.classList.add("header__main__left", "col-lg-4", "col-xl-4");
    headerMain.appendChild(headerMainLeft);
    //Create a tag for Delivery
    const aDelivery = document.createElement("a");
    aDelivery.setAttribute("href", "delivery.html");
    headerMainLeft.appendChild(aDelivery);

    // Create iconDelivery element
    var iconDelivery = document.createElement("span");
    iconDelivery.id = "iconDelivery";
    iconDelivery.classList.add(
      "header__main__left__first",
      "p--tb",
      "text--medium"
    );
    aDelivery.appendChild(iconDelivery);

    // Create iconDelivery icon element
    var iconDeliveryIcon = document.createElement("i");
    iconDeliveryIcon.classList.add("icon--left", "fa-solid", "fa-truck");
    iconDelivery.appendChild(iconDeliveryIcon);
    iconDelivery.innerHTML += "Delivery";

    //Create a tag for Service
    const aService = document.createElement("a");
    aService.setAttribute("href", "service.html");
    headerMainLeft.appendChild(aService);

    // Create iconService element
    var iconService = document.createElement("span");
    iconService.id = "iconService";
    iconService.classList.add(
      "header__main__left__second",
      "p--tb",
      "text--medium",
      "ml--20px"
    );
    aService.appendChild(iconService);

    // Create iconService icon element
    var iconServiceIcon = document.createElement("i");
    iconServiceIcon.classList.add("icon--left", "fa-solid", "fa-phone");
    iconService.appendChild(iconServiceIcon);
    iconService.innerHTML += "Customer service";

    // Create header__main__middle element
    var headerMainMiddle = document.createElement("div");
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
    var middleLink = document.createElement("a");
    middleLink.href = "index.html";
    headerMainMiddle.appendChild(middleLink);

    // Create middleLink heading element
    var middleLinkHeading = document.createElement("h1");
    middleLinkHeading.textContent = "furniture store";
    middleLink.appendChild(middleLinkHeading);

    // Create header__main__right element
    var headerMainRight = document.createElement("div");
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
    var searchIcon = document.createElement("span");
    searchIcon.classList.add(
      "header__main__right__search",
      "p--tb",
      "ml--20px",
      "text--medium"
    );
    headerMainRight.appendChild(searchIcon);

    // Create search icon element
    var searchIconElement = document.createElement("i");
    searchIconElement.classList.add("fa-solid", "fa-magnifying-glass");
    searchIcon.appendChild(searchIconElement);

    // Create account icon
    const accountIcon = document.createElement("a");
    accountIcon.setAttribute("href", "signup.html");
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
    var favoriteIconElement = document.createElement("i");
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
    var cartIconElement = document.createElement("i");
    cartIconElement.classList.add("fa-solid", "fa-bag-shopping");
    cartIcon.appendChild(cartIconElement);

    // Create menu button
    var menuBtnInput = document.createElement("input");
    menuBtnInput.type = "checkbox";
    menuBtnInput.id = "menu-btn";
    menuBtnInput.classList.add("btnH");
    headerMainRight.appendChild(menuBtnInput);

    // Create menu button label
    var menuBtnLabel = document.createElement("label");
    menuBtnLabel.htmlFor = "menu-btn";
    headerMainRight.appendChild(menuBtnLabel);

    // Create ham-button element
    var hamButton = document.createElement("div");
    hamButton.classList.add("ham", "header__main__right__ham");
    menuBtnLabel.appendChild(hamButton);

    // Create line1 element
    var line1 = document.createElement("div");
    line1.classList.add("line1", "line");
    hamButton.appendChild(line1);

    // Create line2 element
    var line2 = document.createElement("div");
    line2.classList.add("line2", "line");
    hamButton.appendChild(line2);

    // Create line3 element
    var line3 = document.createElement("div");
    line3.classList.add("line3", "line");
    hamButton.appendChild(line3);

    // Create navbar element
    var navbar = document.createElement("div");
    navbar.classList.add(
      "header__nav",
      "navbar",
      "navbar-expand-lg",
      "navbar-light"
    );
    header.appendChild(navbar);

    // Create header__nav__box element
    var navBox = document.createElement("div");
    navBox.classList.add("header__nav__box", "container-fluid");
    navbar.appendChild(navBox);

    // Create header__nav__box__list element
    var navList = document.createElement("ul");
    navList.classList.add(
      "header__nav__box__list",
      "navbar-nav",
      "me-auto",
      "mb-lg-0"
    );
    navBox.appendChild(navList);

    // Create list items
    let navItems = [
      { id: "new", text: "New" },
      { id: "campains", text: "Campains" },
      { id: "products", text: "Products", href: "products.html" },
      { id: "ideas", text: "Ideas" },
      { id: "story", text: "Story" },
      { id: "discounts", text: "Discounts" },
      { id: "search", text: "Search" },
    ];

    for (var i = 0; i < navItems.length; i++) {
      var navItem = navItems[i];
      var listItem = document.createElement("li");
      listItem.classList.add("nav--item");
      navList.appendChild(listItem);

      var link = document.createElement("a");
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
  function loadFooter() {
    // Create footer element
    var footer = document.createElement("footer");
    footer.id = "footer";

    // Create top section
    var topSection = document.createElement("div");
    topSection.classList.add("top");
    footer.appendChild(topSection);

    // Create top__box div
    var topBox = document.createElement("div");
    topBox.classList.add("top__box");
    topSection.appendChild(topBox);

    // Create top__box__text div
    var topBoxText = document.createElement("div");
    topBoxText.classList.add("top__box__text");
    topBox.appendChild(topBoxText);

    // Create newsletter title
    var newsletterTitle = document.createElement("h3");
    newsletterTitle.textContent = "Newsletter registration";
    topBoxText.appendChild(newsletterTitle);

    // Create newsletter description
    var newsletterDescription = document.createElement("p");
    newsletterDescription.textContent =
      "Subscribe to our free newsletter and get the first information about new products, interesting people and events.";
    topBoxText.appendChild(newsletterDescription);

    // Create top__box__input div
    var topBoxInput = document.createElement("div");
    topBoxInput.classList.add("top__box__input");
    topBox.appendChild(topBoxInput);

    // Create form element
    var form = document.createElement("form");
    form.action = "post";
    topBoxInput.appendChild(form);

    // Create top__box__input__buttons div
    var inputButtons = document.createElement("div");
    inputButtons.classList.add("top__box__input__buttons");
    form.appendChild(inputButtons);

    // Create email input field
    var emailInput = document.createElement("input");
    emailInput.classList.add("top__box__input__buttons__email");
    emailInput.type = "email";
    emailInput.placeholder = "Enter your email";
    inputButtons.appendChild(emailInput);

    // Create submit button
    var submitButton = document.createElement("input");
    submitButton.classList.add("top__box__input__buttons__submit");
    submitButton.type = "submit";
    submitButton.value = "Send";
    inputButtons.appendChild(submitButton);

    // Create middle section
    var middleSection = document.createElement("div");
    middleSection.classList.add("middle");
    footer.appendChild(middleSection);

    // Create customerService div
    var customerServiceDiv = document.createElement("div");
    customerServiceDiv.id = "customerService";
    customerServiceDiv.classList.add("middle__box");
    middleSection.appendChild(customerServiceDiv);

    // Create customerService title
    var customerServiceTitle = document.createElement("span");
    customerServiceTitle.classList.add("middle__box__title");
    customerServiceTitle.textContent = "Customer service";
    customerServiceDiv.appendChild(customerServiceTitle);

    // Create customerService list
    var customerServiceList = document.createElement("ul");
    customerServiceList.classList.add("middle__box__list");
    customerServiceDiv.appendChild(customerServiceList);

    // Create customerService list items
    var customerServiceItems = ["Contact", "Delivery", "FAQ"];
    for (var i = 0; i < customerServiceItems.length; i++) {
      var customerServiceItem = customerServiceItems[i];
      var listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      customerServiceList.appendChild(listItem);

      var link = document.createElement("a");
      link.href = "#";
      link.textContent = customerServiceItem;
      listItem.appendChild(link);
    }

    // Create information div
    var informationDiv = document.createElement("div");
    informationDiv.id = "information";
    informationDiv.classList.add("middle__box");
    middleSection.appendChild(informationDiv);

    // Create information title
    var informationTitle = document.createElement("span");
    informationTitle.classList.add("middle__box__title");
    informationTitle.textContent = "Information";
    informationDiv.appendChild(informationTitle);

    // Create information list
    var informationList = document.createElement("ul");
    informationList.classList.add("middle__box__list");
    informationDiv.appendChild(informationList);

    // Create information list items
    var informationItems = ["Terms of use", "Privacy policy"];
    for (var i = 0; i < informationItems.length; i++) {
      var informationItem = informationItems[i];
      var listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      informationList.appendChild(listItem);

      var link = document.createElement("a");
      link.href = "#";
      link.textContent = informationItem;
      listItem.appendChild(link);
    }

    // Create stayInTouch div
    var stayInTouchDiv = document.createElement("div");
    stayInTouchDiv.id = "stayInTouch";
    stayInTouchDiv.classList.add("middle__box");
    middleSection.appendChild(stayInTouchDiv);

    // Create stayInTouch title
    var stayInTouchTitle = document.createElement("span");
    stayInTouchTitle.classList.add("middle__box__title");
    stayInTouchTitle.textContent = "Stay in touch";
    stayInTouchDiv.appendChild(stayInTouchTitle);

    // Create stayInTouch list
    var stayInTouchList = document.createElement("ul");
    stayInTouchList.id = "stayInTouch__list";
    stayInTouchList.classList.add("middle__box__list");
    stayInTouchDiv.appendChild(stayInTouchList);

    // Create stayInTouch list items
    var stayInTouchItems = ["Facebook", "Instagram", "Pinterest", "LinkedIn"];
    for (var i = 0; i < stayInTouchItems.length; i++) {
      var stayInTouchItem = stayInTouchItems[i];
      var listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      stayInTouchList.appendChild(listItem);

      var link = document.createElement("a");
      link.href = "#";
      link.textContent = stayInTouchItem;
      listItem.appendChild(link);
    }

    // Create inspiration div
    var inspirationDiv = document.createElement("div");
    inspirationDiv.id = "inspiration";
    inspirationDiv.classList.add("middle__box");
    middleSection.appendChild(inspirationDiv);

    // Create inspiration title
    var inspirationTitle = document.createElement("span");
    inspirationTitle.classList.add("middle__box__title");
    inspirationTitle.textContent = "Inspiration";
    inspirationDiv.appendChild(inspirationTitle);

    // Create inspiration list
    var inspirationList = document.createElement("ul");
    inspirationList.id = "inspiration__list";
    inspirationList.classList.add("middle__box__list");
    inspirationDiv.appendChild(inspirationList);

    // Create inspiration list items
    var inspirationItems = ["Ideas", "Story"];
    for (var i = 0; i < inspirationItems.length; i++) {
      var inspirationItem = inspirationItems[i];
      var listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      inspirationList.appendChild(listItem);

      var link = document.createElement("a");
      link.href = "#";
      link.textContent = inspirationItem;
      listItem.appendChild(link);
    }
    // Create aboutUs div
    var aboutUsDiv = document.createElement("div");
    aboutUsDiv.id = "aboutUs";
    aboutUsDiv.classList.add("middle__box");
    middleSection.appendChild(aboutUsDiv);

    // Create aboutUs title
    var aboutUsTitle = document.createElement("span");
    aboutUsTitle.classList.add("middle__box__title");
    aboutUsTitle.textContent = "About us";
    aboutUsDiv.appendChild(aboutUsTitle);

    // Create aboutUs list
    var aboutUsList = document.createElement("ul");
    aboutUsList.id = "aboutUs__list";
    aboutUsList.classList.add("middle__box__list");
    aboutUsDiv.appendChild(aboutUsList);

    // Create aboutUs list items
    var aboutUsItems = ["Our Store", "Production"];
    for (var i = 0; i < aboutUsItems.length; i++) {
      var aboutUsItem = aboutUsItems[i];
      var listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      aboutUsList.appendChild(listItem);

      var link = document.createElement("a");
      link.href = "#";
      link.textContent = aboutUsItem;
      listItem.appendChild(link);
    }

    // Create bottom section
    var bottomSection = document.createElement("div");
    bottomSection.classList.add("bottom");
    footer.appendChild(bottomSection);

    // Create visa card image
    var visaImage = document.createElement("img");
    visaImage.src = "../img/footer/visa.png";
    visaImage.alt = "Visa card img";
    bottomSection.appendChild(visaImage);

    // Create mastercard image
    var mastercardImage = document.createElement("img");
    mastercardImage.src = "../img/footer/mastercard.png";
    mastercardImage.alt = "Mastercard img";
    bottomSection.appendChild(mastercardImage);
    return footer;
  }
  // home page - sections
  function loadSection1() {
    // Create section1 container
    var section1Div = document.createElement("div");
    section1Div.classList.add("section1");

    // Create carousel container
    var carouselDiv = document.createElement("div");
    carouselDiv.id = "carouselExampleIndicators";
    carouselDiv.classList.add("section1__carousel", "carousel", "slide");
    carouselDiv.setAttribute("data-bs-ride", "carousel");
    section1Div.appendChild(carouselDiv);

    // Create carousel indicators container
    var indicatorsDiv = document.createElement("div");
    indicatorsDiv.classList.add(
      "section1__carousel__indicatots",
      "carousel-indicators"
    );
    carouselDiv.appendChild(indicatorsDiv);

    // Create carousel indicator buttons
    for (var i = 0; i < 3; i++) {
      var button = document.createElement("button");
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
    var innerDiv = document.createElement("div");
    innerDiv.classList.add("carousel-inner");
    carouselDiv.appendChild(innerDiv);

    // Create carousel items
    var carouselItems = [
      {
        imageSrc: "../img/Carousel/carouselImg1.jpg",
        imageAlt: "carouselImg1",
        captionClass: "my__caption my__caption--black",
        captionTitle: "Pretty and comfortable",
        captionSubtitle: "Explore new collection",
        captionContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates nam quibusdam quas alias libero sapiente, laboriosam sunt ipsam esse in aut dolorem nemo id accusamus dolorum officiis? Consequatur, harum.",
        captionLinkClass: "my__caption__a my__caption__a--black",
      },
      {
        imageSrc: "../img/Carousel/carouselImg2.jpg",
        imageAlt: "carouselImg2",
        captionClass: "my__caption my__caption--white",
        captionTitle: "Simplicity",
        captionSubtitle: "Chair for everyone",
        captionContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates nam quibusdam quas alias libero sapiente, laboriosam sunt ipsam esse in aut dolorem nemo id accusamus dolorum officiis? Consequatur, harum.",
        captionLinkClass: "my__caption__a my__caption__a--white",
      },
      {
        imageSrc: "../img/Carousel/carouselImg3.jpg",
        imageAlt: "carouselImg3",
        captionClass: "my__caption my__caption--white",
        captionTitle: "New product",
        captionSubtitle: "Chair with style",
        captionContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates nam quibusdam quas alias libero sapiente, laboriosam sunt ipsam esse in aut dolorem nemo id accusamus dolorum officiis? Consequatur, harum.",
        captionLinkClass: "my__caption__a my__caption__a--white",
      },
    ];

    for (var j = 0; j < carouselItems.length; j++) {
      var carouselItem = carouselItems[j];

      // Create carousel item
      var itemDiv = document.createElement("div");
      itemDiv.classList.add("carousel-item", "carousel--item--section1");
      if (j === 0) {
        itemDiv.classList.add("active");
      }
      innerDiv.appendChild(itemDiv);

      // Create picture element
      var pictureElem = document.createElement("picture");
      itemDiv.appendChild(pictureElem);

      // Create source elements for responsive images
      var imageSources = [
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

      for (var k = 0; k < imageSources.length; k++) {
        var sourceElem = document.createElement("source");
        sourceElem.media = imageSources[k].media;
        sourceElem.srcset = imageSources[k].srcset;
        pictureElem.appendChild(sourceElem);
      }

      // Create image element
      var imgElem = document.createElement("img");
      imgElem.src = carouselItem.imageSrc;
      imgElem.alt = carouselItem.imageAlt;
      imgElem.classList.add("d-block", "w-100");
      pictureElem.appendChild(imgElem);

      // Create carousel item caption
      var captionDiv = document.createElement("div");
      captionDiv.classList.add("my__caption", "my__caption--white");
      itemDiv.appendChild(captionDiv);

      // Create caption elements
      var captionTitle = document.createElement("h6");
      captionTitle.textContent = "New product";
      captionDiv.appendChild(captionTitle);

      var captionSubtitle = document.createElement("h2");
      captionSubtitle.textContent = "Chair with style";
      captionDiv.appendChild(captionSubtitle);

      var captionContent = document.createElement("p");
      captionContent.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates nam quibusdam quas alias libero sapiente, laboriosam sunt ipsam esse in aut dolorem nemo id accusamus  dolorum officiis? Consequatur, harum.";
      captionDiv.appendChild(captionContent);

      var captionLink = document.createElement("a");
      captionLink.href = "#";
      captionLink.classList.add("my__caption__a", "my__caption__a--white");
      captionLink.innerHTML = "Buy now <span>&#8594;</span>";
      captionDiv.appendChild(captionLink);
    }

    return section1Div;
  }
  function loadSection2() {
    // Create section2 container
    var section2Div = document.createElement("div");
    section2Div.classList.add("section2");

    // Create cards
    var cards = [
      {
        imageSrc: "../img/section2/chair.jpg",
        imageAlt: "Card image cap",
        title: "Chairs",
        aUrl: "products.html?category=chairs",
        content:
          "",
      },
      {
        imageSrc: "../img/section2/table.jpg",
        imageAlt: "Card image cap",
        title: "Tables",
        aUrl: "products.html?category=tables",
        content:
          "",
      },
      {
        imageSrc: "../img/section2/sofa.jpg",
        imageAlt: "Card image cap",
        title: "Sofas",
        aUrl: "products.html?category=sofas",
        content:
          "",
      },
    ];

    cards.forEach(function (card) {
      // Create card link
      var cardLink = document.createElement("a");
      cardLink.href = card.aUrl;
      cardLink.classList.add("card", "text-center");
      section2Div.appendChild(cardLink);

      // Create card image container
      var divImg = document.createElement("div");
      divImg.classList.add("card__divImg");
      cardLink.appendChild(divImg);

      // Create card image
      var cardImg = document.createElement("img");
      cardImg.classList.add("card-img-top");
      cardImg.src = card.imageSrc;
      cardImg.alt = card.imageAlt;
      divImg.appendChild(cardImg);

      // Create card text container
      var cardText = document.createElement("div");
      cardText.classList.add("card__text");
      cardLink.appendChild(cardText);

      // Create card title
      var cardTitle = document.createElement("h2");
      cardTitle.classList.add("card__text__title");
      cardTitle.textContent = card.title;
      cardText.appendChild(cardTitle);

      // Create card content
      var cardContent = document.createElement("p");
      cardContent.classList.add("card-text");
      cardContent.textContent = card.content;
      cardText.appendChild(cardContent);

      // Create "See more" button
      var seeMoreBtn = document.createElement("button");
      seeMoreBtn.classList.add("card__text__btn");
      seeMoreBtn.textContent = "See more";
      cardText.appendChild(seeMoreBtn);
    });

    return section2Div;
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
  // products page
  function loadProductsMain(obj) {
    // Create products container
    var productsDiv = document.createElement("div");
    productsDiv.classList.add("products");

    // Create aside
    var aside = document.createElement("aside");
    aside.classList.add("products__aside");
    productsDiv.appendChild(aside);

    // Create "Products" heading
    var heading = document.createElement("h3");
    heading.textContent = "Products";
    aside.appendChild(heading);

    // Create ul element
    var ul = document.createElement("ul");
    aside.appendChild(ul);

    // Create list items
    var categories = ["All", "Chairs", "Tables", "Sofas"];
    categories.forEach(function (category) {
      let a = document.createElement("a");
      a.textContent = category;
      let url = "products.html?category=" + category.toLowerCase();
      a.href = url;
      var li = document.createElement("li");
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Create products items container
    var productsItemsDiv = document.createElement("div");
    productsItemsDiv.id = "productsItems";
    productsItemsDiv.classList.add("products__items");
    obj.forEach((elem) => {
      productsItemsDiv.appendChild(item(elem));
    });
    productsDiv.appendChild(productsItemsDiv);

    return productsDiv;
  }
  // product page
  function loadProductMain(obj, array) {
    // Create main container
    var mainDiv = document.createElement("main");
    mainDiv.classList.add("productPage__main");

    // Create images container
    var imagesDiv = document.createElement("div");
    imagesDiv.classList.add("productPage__main__images");
    mainDiv.appendChild(imagesDiv);

    // Create carousel container
    var carouselDiv = document.createElement("div");
    carouselDiv.id = "carouselProductPage";
    carouselDiv.classList.add("carousel", "carousel-dark");
    carouselDiv.setAttribute("data-bs-interval", "false");
    imagesDiv.appendChild(carouselDiv);

    // Create carousel inner container
    var carouselInnerDiv = document.createElement("div");
    carouselInnerDiv.classList.add("carousel-inner");
    carouselDiv.appendChild(carouselInnerDiv);

    // Create carousel items
    var images = [obj.img.img1, obj.img.img2, obj.img.img3];
    images.forEach(function (image, index) {
      var carouselItemDiv = document.createElement("div");
      carouselItemDiv.classList.add("carousel-item", "carousel--item--poducts");
      if (index === 0) {
        carouselItemDiv.classList.add("active");
      }

      var img = document.createElement("img");
      img.src = image;
      img.classList.add("d-block", "w-100");
      img.alt = "...";

      carouselItemDiv.appendChild(img);
      carouselInnerDiv.appendChild(carouselItemDiv);
    });

    // Create carousel controls
    var prevButton = createCarouselControlButton(
      "carousel-control-prev",
      "carousel-control-prev--product",
      "carouselProductPage",
      "prev",
      "carousel-control-prev-icon",
      "Previous"
    );
    carouselDiv.appendChild(prevButton);

    var nextButton = createCarouselControlButton(
      "carousel-control-next",
      "carousel-control-next--product",
      "carouselProductPage",
      "next",
      "carousel-control-next-icon",
      "Next"
    );
    carouselDiv.appendChild(nextButton);

    // Create info section container
    var infoDiv = document.createElement("div");
    infoDiv.classList.add("productPage__main__info");
    mainDiv.appendChild(infoDiv);

    // Create info header
    var infoHeaderDiv = document.createElement("div");
    infoHeaderDiv.classList.add("productPage__main__info__header");
    infoDiv.appendChild(infoHeaderDiv);

    // Create availability section
    var availableDiv = document.createElement("div");
    availableDiv.classList.add("productPage__main__info__header__available");
    infoHeaderDiv.appendChild(availableDiv);

    var availableTextSpan = document.createElement("span");
    availableTextSpan.classList.add(
      "productPage__main__info__header__available__text"
    );
    availableTextSpan.textContent = "Available ";

    var availableIcon = document.createElement("i");
    availableIcon.classList.add(
      "fa-solid",
      "fa-circle-check",
      "productPage__main__info__header__available__icon"
    );

    availableTextSpan.appendChild(availableIcon);
    availableDiv.appendChild(availableTextSpan);

    // Create heart icon
    var heartIcon = document.createElement("i");
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
    var productName = document.createElement("h2");
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
      oldPrice.innerHTML = `  ${obj.price}.00 $ `;

      priceBox.appendChild(oldPrice);

      let newPrice = obj.price - Math.floor(obj.price / obj.discount);

      const price = document.createElement("span");
      price.classList.add("productPage__main__info__priceBox__price");
      price.innerHTML = ` ${newPrice}.00 $`;
      priceBox.appendChild(price);
    }
    //price without discount
    else {
      const price = document.createElement("span");
      price.classList.add("productPage__main__info__priceBox__price");
      price.innerHTML = ` ${obj.price}.00 $`;
      priceBox.appendChild(price);
    }
    // var productPrice = document.createElement("p");
    // productPrice.classList.add("productPage__main__info__price");
    // productPrice.textContent = obj.price + "$";
    // infoDiv.appendChild(productPrice);

    // Create product code
    var productCode = document.createElement("p");
    productCode.classList.add("productPage__main__info__code");
    productCode.innerHTML = `Code: <span>${obj.code}</span>`;
    infoDiv.appendChild(productCode);

    // Create cart buttons container
    var cartButtonsDiv = document.createElement("div");
    cartButtonsDiv.classList.add("productPage__main__info__cartButtons");
    infoDiv.appendChild(cartButtonsDiv);

    // Create quantity buttons
    var quantityDiv = document.createElement("div");
    quantityDiv.classList.add("productPage__main__info__cartButtons__quantity");
    cartButtonsDiv.appendChild(quantityDiv);

    var minusButton = document.createElement("button");
    minusButton.classList.add(
      "productPage__main__info__cartButtons__quantity__minus"
    );
    minusButton.textContent = "-";
    quantityDiv.appendChild(minusButton);

    var amountButton = document.createElement("button");
    amountButton.classList.add(
      "productPage__main__info__cartButtons__quantity__number"
    );
    amountButton.textContent = "1";
    quantityDiv.appendChild(amountButton);

    var plusButton = document.createElement("button");
    plusButton.classList.add(
      "productPage__main__info__cartButtons__quantity__plus"
    );
    plusButton.textContent = "+";
    quantityDiv.appendChild(plusButton);

    // Create addToCart button
    var addToCartButton = document.createElement("button");
    addToCartButton.classList.add(
      "productPage__main__info__cartButtons__addToCart"
    );
    addToCartButton.textContent = "Add to cart";
    cartButtonsDiv.appendChild(addToCartButton);

    // Create accordion
    var accordionDiv = document.createElement("div");
    accordionDiv.classList.add(
      "accordion",
      "accordion-flush",
      "productPage__main__info__accordionProductPage"
    );
    accordionDiv.id = "accordionProductPage";
    infoDiv.appendChild(accordionDiv);

    // Create description accordion item
    var descriptionAccordionItemDiv = document.createElement("div");
    descriptionAccordionItemDiv.classList.add(
      "accordion-item",
      "accordion-item--text"
    );
    accordionDiv.appendChild(descriptionAccordionItemDiv);

    var descriptionAccordionHeaderDiv = document.createElement("h2");
    descriptionAccordionHeaderDiv.classList.add("accordion-header");
    descriptionAccordionItemDiv.appendChild(descriptionAccordionHeaderDiv);

    var descriptionAccordionButton = createAccordionButton(
      "Description",
      "collapseOne",
      "headingOne",
      true
    );
    descriptionAccordionHeaderDiv.appendChild(descriptionAccordionButton);

    var descriptionAccordionCollapseDiv = document.createElement("div");
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

    var descriptionAccordionBodyDiv = document.createElement("div");
    descriptionAccordionBodyDiv.classList.add("accordion-body");
    descriptionAccordionBodyDiv.innerHTML = obj.desc;
    descriptionAccordionCollapseDiv.appendChild(descriptionAccordionBodyDiv);

    // Create dimensions accordion item
    var dimensionsAccordionItemDiv = document.createElement("div");
    dimensionsAccordionItemDiv.classList.add(
      "accordion-item",
      "accordion-item--text"
    );
    accordionDiv.appendChild(dimensionsAccordionItemDiv);

    var dimensionsAccordionHeaderDiv = document.createElement("h2");
    dimensionsAccordionHeaderDiv.classList.add("accordion-header");
    dimensionsAccordionItemDiv.appendChild(dimensionsAccordionHeaderDiv);

    var dimensionsAccordionButton = createAccordionButton(
      "Dimensions",
      "collapseTwo",
      "headingTwo",
      false
    );
    dimensionsAccordionButton.classList.add("collapsed");
    dimensionsAccordionHeaderDiv.appendChild(dimensionsAccordionButton);

    var dimensionsAccordionCollapseDiv = document.createElement("div");
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

    var dimensionsAccordionBodyDiv = document.createElement("div");
    dimensionsAccordionBodyDiv.classList.add("accordion-body");
    dimensionsAccordionBodyDiv.innerHTML = ` <p>height: <span>${obj.dimensions.height}</span></p> 
      <p>width: <span>${obj.dimensions.width}</span></p>
      <p>length: <span>${obj.dimensions.length}</span></p>`;
    dimensionsAccordionCollapseDiv.appendChild(dimensionsAccordionBodyDiv);

    // Create share section
    var shareDiv = document.createElement("div");
    shareDiv.classList.add("thridAccordion");
    infoDiv.appendChild(shareDiv);

    var shareTitle = document.createElement("p");
    shareTitle.classList.add("thridAccordion__title");
    shareTitle.textContent = "Share";
    shareDiv.appendChild(shareTitle);

    var shareIconsDiv = document.createElement("div");
    shareIconsDiv.classList.add("thridAccordion__icons");
    shareDiv.appendChild(shareIconsDiv);

    var socialMediaLinks = [
      { href: "https://www.facebook.com/", iconClass: "fa-facebook" },
      { href: "https://www.instagram.com/", iconClass: "fa-instagram" },
      { href: "https://twitter.com/", iconClass: "fa-twitter" },
      { href: "https://www.pinterest.com/", iconClass: "fa-pinterest" },
    ];

    socialMediaLinks.forEach(function (link) {
      var iconLink = document.createElement("a");
      iconLink.href = link.href;

      var icon = document.createElement("i");
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
      var button = document.createElement("button");
      button.classList.add(className, className2);
      button.type = "button";
      button.setAttribute("data-bs-target", "#" + target);
      button.setAttribute("data-bs-slide", slide);

      var iconSpan = document.createElement("span");
      iconSpan.classList.add(iconClass);
      iconSpan.setAttribute("aria-hidden", "true");

      var labelSpan = document.createElement("span");
      labelSpan.classList.add("visually-hidden");
      labelSpan.textContent = ariaLabel;

      button.appendChild(iconSpan);
      button.appendChild(labelSpan);

      return button;
    }

    // Helper function to create accordion button
    function createAccordionButton(title, collapseId, headingId, expanded) {
      var button = document.createElement("button");
      button.classList.add("accordion-button", "accordion-button--title");
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

    // Create loginBox title
    const titleH3 = document.createElement("h3");
    titleH3.classList.add("loginPageMain__loginBox__title");
    titleH3.textContent = "Log in";
    loginBoxDiv.appendChild(titleH3);

    // Create email input field
    const emailDiv = document.createElement("div");
    emailDiv.classList.add("loginPageMain__loginBox__email");
    loginBoxDiv.appendChild(emailDiv);

    const emailInput = document.createElement("input");
    emailInput.id = "emailInput";
    emailInput.type = "email";
    emailInput.classList.add("loginPageMain__loginBox__email__input");
    emailInput.placeholder = "youremail@email.com";
    emailDiv.appendChild(emailInput);

    const emailWarningP = document.createElement("p");
    emailWarningP.id = "emailWarning";
    emailWarningP.classList.add("loginPageMain__loginBox__email__warning");
    emailWarningP.textContent = "enter email";
    emailDiv.appendChild(emailWarningP);

    // Create password input field
    const passwordDiv = document.createElement("div");
    passwordDiv.classList.add("loginPageMain__loginBox__password");
    loginBoxDiv.appendChild(passwordDiv);

    //Create password icon
    const passwordIcon = document.createElement("i");
    passwordIcon.id = "passwordIcon";
    passwordIcon.classList.add("fa-solid", "fa-eye-slash");
    passwordDiv.appendChild(passwordIcon);

    const passwordInput = document.createElement("input");
    passwordInput.id = "passwordInput";
    passwordInput.type = "password";
    passwordInput.classList.add("loginPageMain__loginBox__password__input");
    passwordInput.placeholder = "password";
    passwordDiv.appendChild(passwordInput);

    const passwordWarningP = document.createElement("p");
    passwordWarningP.id = "passwordWarning";
    passwordWarningP.classList.add(
      "loginPageMain__loginBox__password__warning"
    );
    passwordWarningP.textContent = "enter password";
    passwordDiv.appendChild(passwordWarningP);

    // Create login button
    const loginButton = document.createElement("button");
    loginButton.id = "submitBtnLogin";
    loginButton.classList.add("loginPageMain__loginBox__submit");
    loginButton.textContent = "Log in";
    loginBoxDiv.appendChild(loginButton);

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

    // Create signupBox title
    const titleH3 = document.createElement("h3");
    titleH3.classList.add("signupPageMain__signupBox__title");
    titleH3.textContent = "Sign up";
    signupBoxDiv.appendChild(titleH3);

    // Create name input field
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("signupPageMain__signupBox__name");
    signupBoxDiv.appendChild(nameDiv);

    const nameInput = document.createElement("input");
    nameInput.id = "nameInput";
    nameInput.type = "text";
    nameInput.classList.add("signupPageMain__signupBox__name__input");
    nameInput.placeholder = "name";
    nameDiv.appendChild(nameInput);

    const nameWarningP = document.createElement("p");
    nameWarningP.id = "nameWarning";
    nameWarningP.classList.add("signupPageMain__signupBox__name__warning");
    nameDiv.appendChild(nameWarningP);

    // Create email input field
    const emailDiv = document.createElement("div");
    emailDiv.classList.add("signupPageMain__signupBox__email");
    signupBoxDiv.appendChild(emailDiv);

    const emailInput = document.createElement("input");
    emailInput.id = "emailInput";
    emailInput.type = "email";
    emailInput.classList.add("signupPageMain__signupBox__email__input");
    emailInput.placeholder = "youremail@email.com";
    emailDiv.appendChild(emailInput);

    const emailWarningP = document.createElement("p");
    emailWarningP.id = "emailWarning";
    emailWarningP.classList.add("signupPageMain__signupBox__email__warning");
    emailDiv.appendChild(emailWarningP);

    // Create password input field
    const passwordDiv = document.createElement("div");
    passwordDiv.classList.add("signupPageMain__signupBox__password");
    signupBoxDiv.appendChild(passwordDiv);

    //Create password icon
    const passwordIcon = document.createElement("i");
    passwordIcon.id = "passwordIcon";
    passwordIcon.classList.add("fa-solid", "fa-eye-slash");
    passwordDiv.appendChild(passwordIcon);

    const passwordInput = document.createElement("input");
    passwordInput.id = "passwordInput";
    passwordInput.type = "password";
    passwordInput.classList.add("signupPageMain__signupBox__password__input");
    passwordInput.placeholder = "password";
    passwordDiv.appendChild(passwordInput);

    const passwordWarningP = document.createElement("p");
    passwordWarningP.id = "passwordWarning";
    passwordWarningP.classList.add(
      "signupPageMain__signupBox__password__warning"
    );
    passwordDiv.appendChild(passwordWarningP);

    // Create signup button
    const signupButton = document.createElement("button");
    signupButton.id = "submitBtn";
    signupButton.classList.add("signupPageMain__signupBox__submit");
    signupButton.textContent = "Sign up";
    signupBoxDiv.appendChild(signupButton);

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

  return {
    getDOMString: () => {
      return DOMString;
    },

    loadDelivery: () => {
      return loadDelivery();
    },
    loadService: () => {
      return loadService();
    },
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
    loadProductsPage: (data) => {
      const pageContent = document.createElement("div");
      pageContent.setAttribute("id", "pageContent");
      const main = document.createElement("div");
      main.classList.add("main");
      main.setAttribute("id", "main");

      main.appendChild(loadProductsMain(data));

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
  };
})();
