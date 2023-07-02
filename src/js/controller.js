//CONTROLER
export const controller = function (model, view) {
  //EVENT LISTENERS -- START
  function setupProductPageListners() {
    document.getElementById("heartIcon").addEventListener("click", addLike);
    document.getElementById("minusBtn").addEventListener("click", setQuantity);
    document.getElementById("plusBtn").addEventListener("click", setQuantity);
  };
  function setupPageListners() {
    setupHeaderListners();
    setupFooterListners();
  }
  function setupSignUpFormListners() {
    document.getElementById("formSignUp").addEventListener("submit", formSignUp);
    document.getElementById("passwordIcon").addEventListener("click", passwordIcon);
  }
  function setupLogInFormListners() {
    document.getElementById("formLogIn").addEventListener("submit", formLogIn);
    document.getElementById("passwordIcon").addEventListener("click", passwordIcon);
  }
  function setupFavoriteListeners() {
    const iconRemove = document.querySelectorAll("#iconRemove");
    console.log(iconRemove)
    iconRemove.forEach(elem => {
      elem.addEventListener("click", removeFavoriteProduct);
    })

  }
  function removeFavoriteProduct(e) {
    e.preventDefault();
    let likeItems = JSON.parse(localStorage.getItem("likeItems"));
    likeItems = likeItems.filter(elem => elem != e.target.dataset.id)
    localStorage.setItem("likeItems", JSON.stringify(likeItems));

    displayFavoritePage();
  }
  async function formLogIn(e) {
    e.preventDefault();
    let checkFlag = checkData(false, true, true);
    if (checkFlag) {
      const email = document.getElementById("emailInput").value
      const password = document.getElementById("passwordInput").value;
      const result = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({ email, password })
      }).then(response => response.json());
      if (result.status === "ok") {
        localStorage.setItem("token", result.token)
        console.log(result.token)
        window.location.href = "signup.html";
        alert("Succes login")
      } else {
        alert(result.error)
      }
    }
  }
  async function formSignUp(e) {
    e.preventDefault();
    let checkFlag = checkData(true, true, true);
    if (checkFlag) {
      const username = document.getElementById("usernameInput").value;
      const email = document.getElementById("emailInput").value
      const password = document.getElementById("passwordInput").value;
      console.log(JSON.stringify({ username, email, password }))
      const result = await fetch("http://localhost:5000/singup", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      }).then(response => response.json());
      if (result.status === "ok") {
        alert("Succes")
      } else {
        alert(result.error)
      }
    }
  }
  function setupHeaderListners() {
    document.getElementById("hamBtn").addEventListener("click", hamMenu);
    hamMenuIcons();
    let screenWidthHamMenu = window.matchMedia("(max-width: 576px)");
    screenWidthHamMenu.addEventListener("change", hamMenuIcons);


  }
  async function loadDiscountsPage() {
    let DOM = view.getDOMString();

    let main = document.getElementById(DOM.discountPage);
    main.appendChild(view.loadProductsPage());

    setupProductsLiseners();

    let data = await getDataProducts();
    document.getElementById("discountPrice").checked = true
    view.renderProducts(data);

    setupPageListners();

    setupPaginationListners();

  }
  async function loadNewPage() {
    let DOM = view.getDOMString();

    let main = document.getElementById(DOM.newPage);
    main.appendChild(view.loadProductsPage());

    setupProductsLiseners();

    let data = await getDataProducts();
    document.getElementById("newFilter").checked = true
    view.renderProducts(data);

    setupPageListners();

    setupPaginationListners();

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
  function hamMenuIcons() {
    let screenWidthHamMenu = window.matchMedia("(max-width: 576px)");
    const menuIcons = document.getElementById("hamMenuIcons");
    if (screenWidthHamMenu.matches) {
      menuIcons.innerHTML = "";
      menuIcons.append(view.loadHamMenuIcons());
    }
    else {
      menuIcons.innerHTML = "";
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
    main.innerHTML = "";
    main.appendChild(view.loadProductPage(data, likeArray));

    //Event listener for like button
    setupProductPageListners();
    setupPageListners();
  }
  function displayLoginPage() {
    let DOM = view.getDOMString();

    let main = document.getElementById(DOM.loginPage);
    main.appendChild(view.loadLoginPage());

    setupPageListners();
    setupLogInFormListners()
  }
  function displaySignupPage() {
    let DOM = view.getDOMString();

    let main = document.getElementById(DOM.signupPage);
    main.appendChild(view.loadSignupPage());


    setupPageListners();
    setupSignUpFormListners()

  }
  async function displayFavoritePage() {
    let DOM = view.getDOMString();
    let url = model.getUrl();

    let main = document.getElementById(DOM.favorite);
    const data = await model.loadData(url.allProducts);
    main.innerHTML = "";
    main.appendChild(view.loadFavoritePage(data));

    setupPageListners();
    setupFavoriteListeners()
  }
  async function displayAccountPage() {

    // let token = localStorage.getItem("token");
    // console.log(token)

    // const auto = await fetch("http://localhost:5000/autentication", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": 'application/json'
    //   },
    //   body: JSON.stringify({ token })
    // }).then(response => response.json());
    // if (auto.status === "ok") {

    //   alert("Ulogovan si")
    // } else {
    //   alert("ovo je greska" + error)
    // }
  }
  function displaySearchPage(){
    let DOM = view.getDOMString();

    let main = document.getElementById(DOM.search);
    main.appendChild(view.loadSearchPage());

    setupPageListners();
  }
  // PAGES -- END
  function passwordIcon() {
    document.getElementById("passwordIcon").classList.toggle("fa-eye-slash");
    document.getElementById("passwordIcon").classList.toggle("fa-eye");
    const type = document.getElementById("passwordInput").type;

    type == "password"
      ? (document.getElementById("passwordInput").type = "text")
      : (document.getElementById("passwordInput").type = "password");
  }
  function checkData(checkUsername, checkEmail, checkPassword) {

    let checkFlag = true;
    if (checkUsername) {
      // Check name
      let name = document.getElementById("usernameInput").value;
      let checkName = new RegExp(/^[a-zA-Z]{2,15}$/);
      if (name === "") {
        document.getElementById("nameWarning").innerHTML = "Field name is empty";
        checkFlag = false;
      } else if (checkName.test(name)) {
        document.getElementById("nameWarning").innerHTML = "";
      } else {
        document.getElementById("nameWarning").innerHTML =
          "The name was not entered correctly!";
        checkFlag = false;

      }
    }
    if (checkEmail) {
      // Check email
      let email = document.getElementById("emailInput").value;
      let checkEmail = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
      if (email === "") {
        const emailValue = document.getElementById("emailWarning");
        console.log(emailValue);
        document.getElementById("emailWarning").innerHTML =
          "Field email is empty";
        checkFlag = false;

      } else if (checkEmail.test(email)) {
        document.getElementById("emailWarning").innerHTML = "";
      } else {
        document.getElementById("emailWarning").innerHTML =
          "The email was not entered correctly!";
        checkFlag = false;

      }
    }
    if (checkPassword) {
      // Check password
      let password = document.getElementById("passwordInput").value;
      let checkPassword = new RegExp(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]){6,16}/
      );
      if (password === "") {
        document.getElementById("passwordWarning").innerHTML =
          "Field password is empty";
        checkFlag = false;

      } else if (checkPassword.test(password)) {
        document.getElementById("passwordWarning").innerHTML = "";
      } else {
        document.getElementById("passwordWarning").innerHTML =
          "The password was not entered correctly!";
        checkFlag = false;

      }
    }
    return checkFlag;
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

      localStorage.setItem("likeItems", JSON.stringify(likeArray));
    } else {
      likeArray = JSON.parse(localStorage.getItem("likeItems"));
      if (likeArray.indexOf(data) > -1) {
        likeArray.splice(likeArray.indexOf(data), 1);
      } else if (data != null) {
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
    newPage: () => {
      loadNewPage()
    },
    discountsPage: () => {
      loadDiscountsPage();
    },
    favoritePage: () => {
      displayFavoritePage();
    },
    account: () => {
      displayAccountPage();

    },
    search:()=>{
      displaySearchPage();
    }
  };
};
