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
  const footerMenuData = [
    {
      title: "Costumer service",
      content: ["Contact", "Delivery", "FAQ"],
    },
    {
      title: "Information",
      content: ["Term of use", "Privacy policy"],
    },
    {
      title: "Stay in touch",
      content: ["Facebook", "Instagram", "Pinterest", "Linkedin"],
    },
    {
      title: "Inspiration",
      content: ["Ideas", "Story"],
    },
    {
      title: "About us",
      content: ["Our Store", "Production"],
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
        li.textContent = contentItem;
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
    const customerServiceItems = ["Contact", "Delivery", "FAQ"];
    for (let i = 0; i < customerServiceItems.length; i++) {
      let customerServiceItem = customerServiceItems[i];
      const listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      customerServiceList.appendChild(listItem);

      const link = document.createElement("a");
      link.href = "#";
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

    // Create inspiration div
    const inspirationDiv = document.createElement("div");
    inspirationDiv.id = "inspiration";
    inspirationDiv.classList.add("middle__box");
    footerMenuLarge.appendChild(inspirationDiv);

    // Create inspiration title
    const inspirationTitle = document.createElement("span");
    inspirationTitle.classList.add("middle__box__title");
    inspirationTitle.textContent = "Inspiration";
    inspirationDiv.appendChild(inspirationTitle);

    // Create inspiration list
    const inspirationList = document.createElement("ul");
    inspirationList.id = "inspiration__list";
    inspirationList.classList.add("middle__box__list");
    inspirationDiv.appendChild(inspirationList);

    // Create inspiration list items
    const inspirationItems = ["Ideas", "Story"];
    for (let i = 0; i < inspirationItems.length; i++) {
      let inspirationItem = inspirationItems[i];
      const listItem = document.createElement("li");
      listItem.classList.add("middle__box__list__item");
      inspirationList.appendChild(listItem);

      const link = document.createElement("a");
      link.href = "#";
      link.textContent = inspirationItem;
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

  function item(obj, itemClass2) {
    //div item
    const item = document.createElement("div");
    item.classList.add("item", itemClass2);
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
    aService.setAttribute("href", "service.html");
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
    iconService.innerHTML += "Customer service";

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
    const searchIcon = document.createElement("span");
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

  function loadFooter() {
    // Create footer element
    const footer = document.createElement("footer");
    footer.id = "footer";

    // Create top section
    const topSection = document.createElement("div");
    topSection.classList.add("top");
    footer.appendChild(topSection);

    // Create top__box div
    const topBox = document.createElement("div");
    topBox.classList.add("top__box");
    topSection.appendChild(topBox);

    // Create top__box__text div
    const topBoxText = document.createElement("div");
    topBoxText.classList.add("top__box__text");
    topBox.appendChild(topBoxText);

    // Create newsletter title
    const newsletterTitle = document.createElement("h3");
    newsletterTitle.textContent = "Newsletter registration";
    topBoxText.appendChild(newsletterTitle);

    // Create newsletter description
    const newsletterDescription = document.createElement("p");
    newsletterDescription.textContent =
      "Subscribe to our free newsletter and get the first information about new products, interesting people and events.";
    topBoxText.appendChild(newsletterDescription);

    // Create top__box__input div
    const topBoxInput = document.createElement("div");
    topBoxInput.classList.add("top__box__input");
    topBox.appendChild(topBoxInput);

    // Create form element
    const form = document.createElement("form");
    form.action = "post";
    topBoxInput.appendChild(form);

    // Create top__box__input__buttons div
    const inputButtons = document.createElement("div");
    inputButtons.classList.add("top__box__input__buttons");
    form.appendChild(inputButtons);

    // Create email input field
    const emailInput = document.createElement("input");
    emailInput.classList.add("top__box__input__buttons__email");
    emailInput.type = "email";
    emailInput.placeholder = "Enter your email";
    inputButtons.appendChild(emailInput);

    // Create submit button
    const submitButton = document.createElement("input");
    submitButton.classList.add("top__box__input__buttons__submit");
    submitButton.type = "submit";
    submitButton.value = "Send";
    inputButtons.appendChild(submitButton);

    // Create middle section
    const middleSection = document.createElement("div");
    middleSection.id = "footerMenu";
    middleSection.classList.add("middle");
    footer.appendChild(middleSection);

    // Create bottom section
    const bottomSection = document.createElement("div");
    bottomSection.classList.add("bottom");
    footer.appendChild(bottomSection);

    // Create visa card image
    const visaImage = document.createElement("img");
    visaImage.src = "../img/footer/visa.png";
    visaImage.alt = "Visa card img";
    bottomSection.appendChild(visaImage);

    // Create mastercard image
    const mastercardImage = document.createElement("img");
    mastercardImage.src = "../img/footer/mastercard.png";
    mastercardImage.alt = "Mastercard img";
    bottomSection.appendChild(mastercardImage);
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
      captionTitle.textContent = "New product";
      captionDiv.appendChild(captionTitle);

      const captionSubtitle = document.createElement("h2");
      captionSubtitle.textContent = "Chair with style";
      captionDiv.appendChild(captionSubtitle);

      const captionContent = document.createElement("p");
      captionContent.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates nam quibusdam quas alias libero sapiente, laboriosam sunt ipsam esse in aut dolorem nemo id accusamus  dolorum officiis? Consequatur, harum.";
      captionDiv.appendChild(captionContent);

      const captionLink = document.createElement("a");
      captionLink.href = "#";
      captionLink.classList.add("my__caption__a", "my__caption__a--white");
      captionLink.innerHTML = "Buy now <span>&#8594;</span>";
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
  // products page
  function loadProductsMain(obj) {
    // Create products container
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("products");

    // Create aside
    const aside = document.createElement("aside");
    aside.classList.add("products__aside");
    productsDiv.appendChild(aside);

    // Create "Products" heading
    const heading = document.createElement("h3");
    heading.textContent = "Products";
    aside.appendChild(heading);

    // Create ul element
    const ul = document.createElement("ul");
    aside.appendChild(ul);

    // Create list items
    const categories = ["All", "Chairs", "Tables", "Sofas"];
    categories.forEach(function (category) {
      let a = document.createElement("a");
      a.textContent = category;
      let url = "products.html?category=" + category.toLowerCase();
      a.href = url;
      const li = document.createElement("li");
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Create products items container
    const productsItemsDiv = document.createElement("div");
    productsItemsDiv.id = "productsItems";
    productsItemsDiv.classList.add("products__items");
    obj.forEach((elem) => {
      const itemClass = "item-products";
      productsItemsDiv.appendChild(item(elem, itemClass));
    });
    productsDiv.appendChild(productsItemsDiv);

    return productsDiv;
  }
  // product page
  function loadProductMain(obj, array) {
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
    availableTextSpan.textContent = "Available ";

    const availableIcon = document.createElement("i");
    availableIcon.classList.add(
      "fa-solid",
      "fa-circle-check",
      "productPage__main__info__header__available__icon"
    );

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
    // const productPrice = document.createElement("p");
    // productPrice.classList.add("productPage__main__info__price");
    // productPrice.textContent = obj.price + "$";
    // infoDiv.appendChild(productPrice);

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
    minusButton.classList.add(
      "productPage__main__info__cartButtons__quantity__minus"
    );
    minusButton.textContent = "-";
    quantityDiv.appendChild(minusButton);

    const amountButton = document.createElement("button");
    amountButton.classList.add(
      "productPage__main__info__cartButtons__quantity__number"
    );
    amountButton.textContent = "1";
    quantityDiv.appendChild(amountButton);

    const plusButton = document.createElement("button");
    plusButton.classList.add(
      "productPage__main__info__cartButtons__quantity__plus"
    );
    plusButton.textContent = "+";
    quantityDiv.appendChild(plusButton);

    // Create addToCart button
    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add(
      "productPage__main__info__cartButtons__addToCart"
    );
    addToCartButton.textContent = "Add to cart";
    cartButtonsDiv.appendChild(addToCartButton);

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
    dimensionsAccordionBodyDiv.innerHTML = ` <p>height: <span>${obj.dimensions.height}</span></p> 
      <p>width: <span>${obj.dimensions.width}</span></p>
      <p>length: <span>${obj.dimensions.length}</span></p>`;
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
    loadSection2,
    loadSection2Small,
    displayHamMenu,
    closeHamMenu,
    loadfooterMenuSmall,
    loadfooterMenuLarge,
  };
})();
