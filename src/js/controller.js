//CONTROLER
export const controller = function (model, view) {
  //EVENT LISTENERS -- START
  function setupPageListners() {
    setupHeaderListners();
    setupFooterListners();
  }

  function setupHeaderListners() {
    document.getElementById("hamBtn").addEventListener("click", hamMenu);
    document.getElementById("newPage").addEventListener("click", loadNewPage);
    document.getElementById("discounts").addEventListener("click", loadDiscountsPage);

  }
  function loadDiscountsPage() {
    displayProductsPage();
    document.getElementById("discountPrice").checked = true;
  }
  function loadNewPage() {
    displayProductsPage();
    document.getElementById("newFilter").checked = true;

  }
  function setupFooterListners() {
    responsivefooterMenu();
    let screenWidthFooterMenu = window.matchMedia("(max-width: 768px)");
    screenWidthFooterMenu.addEventListener("change", responsivefooterMenu);
  }
  function setupPaginationListners() {
    const pageButtonList = document.getElementById("pageButtonList");
    pageButtonList.addEventListener("click", changePage);
  }
  function setupProductsLiseners() {
    responsiveFiltersContainer();
    let screenWidthProductsPage = window.matchMedia("(max-width: 576px)");
    screenWidthProductsPage.addEventListener(
      "change",
      responsiveFiltersContainer
    );
    setupFilterLiseners();
  }
  function setupFilterLiseners() {
    const inputsProducts = document.querySelectorAll(
      ".filterSection__title__list__item__input"
    );
    inputsProducts.forEach((elem) =>
      elem.addEventListener("change", filterChange)
    );
  }
  //EVENT LISTENERS -- END

  // function
  async function filterChange() {
    let data = await getDataProducts();

    view.renderProducts(data, 1);

    setupPaginationListners();

  }
  function responsiveFiltersContainer() {
    let screenWidthProductsPage = window.matchMedia("(max-width: 576px)");
    const aside = document.getElementById("productsAside");
    const productsFilters = document.getElementById("productsFilters");

    if (screenWidthProductsPage.matches) {
      productsFilters.innerHTML = "";
      aside.innerHTML = "";
      productsFilters.appendChild(view.filterContainerSmall())
    } else {
      productsFilters.innerHTML = "";
      aside.innerHTML = "";
      aside.appendChild(view.filtersContainer());
    }
    setupFilterLiseners();
  }
  async function changePage(e) {
    let clickPage = e.target.textContent;
    if (
      clickPage !== "Next" &&
      clickPage !== "Previous" &&
      typeof clickPage !== undefined
    ) {
      clickPage = Number(clickPage);
    }
    let data = await getDataProducts();

    view.renderProducts(data, clickPage);

    setupPaginationListners();
  }
  function responsivefooterMenu() {
    let screenWidthFooterMenu = window.matchMedia("(max-width: 768px)");
    const footerMenu = document.getElementById("footerMenu");

    if (screenWidthFooterMenu.matches) {
      footerMenu.innerHTML = "";
      footerMenu.appendChild(view.loadfooterMenuSmall());
    } else {
      footerMenu.innerHTML = "";
      footerMenu.appendChild(view.loadfooterMenuLarge());
    }
  }
  function hamMenu() {
    const checkBox = document.getElementById("menu-btn");
    if (checkBox.checked === false) {
      view.displayHamMenu();
    } else {
      view.closeHamMenu();
    }
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
  async function getDataProducts() {
    let url = model.getUrl();

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let category = urlParams.get("category");

    let data;
    switch (category) {
      case "chairs":
        data = await model.loadData(url.chairs);
        break;
      case "tables":
        data = await model.loadData(url.tables);
        break;
      case "sofas":
        data = await model.loadData(url.sofas);
        break;
      default:
        data = await model.loadData(url.allProducts);
    }

    return data;
  }
  // PAGES -- START
  async function displayHomePage() {
    let DOM = view.getDOMString();
    let url = model.getUrl();

    let main = document.getElementById(DOM.homePage);
    const data = await model.loadData(url.popularProducts);
    main.appendChild(view.loadHomePage(data));

    resposniveSection2();
    let screenWidthSection2 = window.matchMedia("(max-width: 992px)");
    screenWidthSection2.addEventListener("change", resposniveSection2);

    setupPageListners();
  }

  async function displayProductsPage() {
    let DOM = view.getDOMString();

    let main = document.getElementById(DOM.productsPage);
    main.appendChild(view.loadProductsPage());

    setupProductsLiseners();

    let data = await getDataProducts();
    view.renderProducts(data);

    setupPageListners();

    setupPaginationListners();
  }

  async function displayProductPage() {
    let DOM = view.getDOMString();
    let url = model.getUrl();
    let likeArray = JSON.parse(localStorage.getItem("likeItems"));
    setLocalStorageLike();


    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let id = urlParams.get("id");

    let data = await model.loadData(url.productId + id);
    let main = document.getElementById(DOM.productPage);
    main.appendChild(view.loadProductPage(data, likeArray));

    //Event listener for like button
    document.getElementById("heartIcon").addEventListener("click", addLike);
    setupPageListners();
  }
  function displayLoginPage() {
    let DOM = view.getDOMString();

    let main = document.getElementById(DOM.loginPage);
    main.appendChild(view.loadLoginPage());

    document
      .getElementById("submitBtnLogin")
      .addEventListener("click", checkData);
    document
      .getElementById("passwordIcon")
      .addEventListener("click", passwordIcon);

    setupPageListners();
  }
  function displaySignupPage() {
    let DOM = view.getDOMString();

    let main = document.getElementById(DOM.signupPage);
    main.appendChild(view.loadSignupPage());

    document.getElementById("submitBtn").addEventListener("click", checkData);
    document
      .getElementById("passwordIcon")
      .addEventListener("click", passwordIcon);

    setupPageListners();
  }
  // PAGES -- END
  function passwordIcon() {
    document.getElementById("passwordIcon").classList.toggle("fa-eye-slash");
    document.getElementById("passwordIcon").classList.toggle("fa-eye");
    const type = document.getElementById("passwordInput").type;
    console.log(type);
    type == "password"
      ? (document.getElementById("passwordInput").type = "text")
      : (document.getElementById("passwordInput").type = "password");
  }
  function checkData() {
    // Check name
    let name = document.getElementById("nameInput").value;
    let checkName = new RegExp(/^[a-zA-Z]{2,15}$/);
    if (name === "") {
      document.getElementById("nameWarning").innerHTML = "Field name is empty";
    } else if (checkName.test(name)) {
      document.getElementById("nameWarning").innerHTML = "";
    } else {
      document.getElementById("nameWarning").innerHTML =
        "The name was not entered correctly!";
    }
    // Check email
    let email = document.getElementById("emailInput").value;
    let checkEmail = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (email === "") {
      document.getElementById("emailWarning").innerHTML =
        "Field email is empty";
    } else if (checkEmail.test(email)) {
      document.getElementById("emailWarning").innerHTML = "";
    } else {
      document.getElementById("emailWarning").innerHTML =
        "The email was not entered correctly!";
    }
    // Check password
    let password = document.getElementById("passwordInput").value;
    let checkPassword = new RegExp(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]){6,16}/
    );
    if (password === "") {
      document.getElementById("passwordWarning").innerHTML =
        "Field password is empty";
    } else if (checkPassword.test(password)) {
      document.getElementById("passwordWarning").innerHTML = "";
    } else {
      document.getElementById("passwordWarning").innerHTML =
        "The password was not entered correctly!";
    }
  }
  // like icon
  function addLike() {
    const like = document.getElementById("heartIcon");
    like.classList.toggle("productPage__main__info__header__heartIcon--normal");
    like.classList.toggle(
      "productPage__main__info__header__heartIcon--clicked"
    );
    setLocalStorageLike(like.dataset.id);
  }
  function setLocalStorageLike(data) {
    let likeArray = [];
    if (localStorage.getItem("likeItems") == null) {
      likeArray.push(data);

      localStorage.setItem("likeItems", JSON.stringify(likeArray));
    } else {
      likeArray = JSON.parse(localStorage.getItem("likeItems"));
      if (likeArray.indexOf(data) > -1) {
        likeArray.splice(likeArray.indexOf(data), 1);
      } else {
        likeArray.push(data);
      }
      localStorage.setItem("likeItems", JSON.stringify(likeArray));
    }
  }

  return {
    init: () => {
      displayHomePage();
    },
    products: () => {
      displayProductsPage();
    },
    product: () => {
      displayProductPage();
    },
    login: () => {
      displayLoginPage();
    },
    signup: () => {
      displaySignupPage();
    },
  };
};
