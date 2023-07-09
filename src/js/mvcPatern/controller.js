//CONTROLER
export const controller = function (model, view) {

  //EVENT LISTENERS -- START
  function setupCartPageListners() {
    const iconRemove = document.querySelectorAll("#iconRemove");
    iconRemove.forEach(elem => {
      elem.addEventListener("click", removeCartProduct);
    })
    const cartMinusBtn = document.querySelectorAll("#cartMinusBtn");
    cartMinusBtn.forEach(elem => {
      elem.addEventListener("click", cartQuantity);
    })
    const cartPlusBtn = document.querySelectorAll("#cartPlusBtn");
    cartPlusBtn.forEach(elem => {
      elem.addEventListener("click", cartQuantity);
    })
  }
  function setupHomePageListners() {
    let screenWidthSection2 = window.matchMedia("(max-width: 992px)");
    screenWidthSection2.addEventListener("change", view.resposniveSection2);

  }
  function setupAccountAccessPageListners() {
    document.getElementById("logOut").addEventListener("click", model.userLogOut);

  }

  function setupSearchPageListners() {
    document.getElementById("searchForm").addEventListener("submit", searchProducts);

  }
  function setupProductPageListners() {
    document.getElementById("heartIcon").addEventListener("click", addLike);
    document.getElementById("minusBtn").addEventListener("click", view.setQuantity);
    document.getElementById("plusBtn").addEventListener("click", view.setQuantity);
    document.getElementById("addToCart").addEventListener("click", addToCart);
  };
  function setupPageListners() {
    setupHeaderListners();
    setupFooterListners();
  }
  function setupHeaderListners() {
    document.getElementById("hamBtn").addEventListener("click", view.hamMenu);
    view.hamMenuIcons();
    let screenWidthHamMenu = window.matchMedia("(max-width: 576px)");
    screenWidthHamMenu.addEventListener("change", view.hamMenuIcons);
  }
  function setupFooterListners() {
    view.responsivefooterMenu();
    let screenWidthFooterMenu = window.matchMedia("(max-width: 768px)");
    screenWidthFooterMenu.addEventListener("change", view.responsivefooterMenu);
  }
  function setupSignUpFormListners() {
    document.getElementById("formSignUp").addEventListener("submit", formSignUp);
    document.getElementById("passwordIcon").addEventListener("click", view.passwordIcon);
  }
  function setupLogInFormListners() {
    document.getElementById("formLogIn").addEventListener("submit", formLogIn);
    document.getElementById("passwordIcon").addEventListener("click", view.passwordIcon);
  }
  function setupFavoriteListeners() {
    const iconRemove = document.querySelectorAll("#iconRemove");
    iconRemove.forEach(elem => {
      elem.addEventListener("click", removeFavoriteProduct);
    })
    const addBtn = document.querySelectorAll("#addBtn");
    addBtn.forEach(elem => {
      elem.addEventListener("click", addToCartFromWishList);
    })

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
  function removeCartProduct(e) {
    model.removeCartItem(e.target.dataset.id);
    displayCartPage();
  }
  function cartQuantity(e) {
    model.setCartQuantity(e.target.dataset.id, e.target.id);

    displayCartPage();
  }
  function addToCartFromWishList(e) {

    model.fromWishToCart(e.target.dataset.id);

    model.setDataBase();
    displayFavoritePage();
  }
  function addToCart(e) {
    let productQuantity = Number(document.getElementById("quantityBtn").textContent);
    let productId = e.target.dataset.id;
    model.setCartProducts(productId, productQuantity)
    document.getElementById("messageProduct").appendChild(view.addMessageProduct())
    window.scrollTo(0, 0);
  }
  async function filterChange() {
    let data = await model.getDataProducts();

    data = model.sortPopular(data);
    data = model.sortLowHigh(data);
    data = model.sortHighLow(data);
    data = model.filterNew(data);
    data = model.filterDiscount(data);

    view.renderProducts(data, 1);
    setupPaginationListners();

  }
  function responsiveFiltersContainer() {
    view.loadResponsiveFiltersContainer();
    setupFilterLiseners();
  }
  function removeFavoriteProduct(e) {
    e.preventDefault();
    model.removeItem(e.target.dataset.id)

    model.setDataBase();
    displayFavoritePage();
  }
  async function searchProducts(e) {
    e.preventDefault();
    let searchValue = document.getElementById("searchValue").value;
    let searchResult = document.getElementById("searchResult");

    let data = await model.searchFilter(searchValue)
    searchResult.appendChild(view.loadSearchResult(data, searchValue));
  }
  async function formLogIn(e) {
    e.preventDefault();
    let checkFlag = checkData(true, false, true);
    if (checkFlag) {
      const username = document.getElementById("usernameInput").value
      const password = document.getElementById("passwordInput").value;
      model.logInUser(username, password);

    }
  }
  async function formSignUp(e) {
    e.preventDefault();
    let checkFlag = checkData(true, true, true);
    if (checkFlag) {
      const username = document.getElementById("usernameInput").value;
      const email = document.getElementById("emailInput").value
      const password = document.getElementById("passwordInput").value;

      model.signUpUser(username, email, password);
    }
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
    let data = await model.getDataProducts();

    view.renderProducts(data, clickPage);

    setupPaginationListners();
  }

  function checkData(checkUsername, checkEmail, checkPassword) {

    let checkFlag = false;
    if (checkUsername) {
      // Check username
      let username = document.getElementById("usernameInput").value;
      let testName = model.testUsername(username)
      view.processUsername(testName, username);
      checkFlag = testName;
    }
    if (checkEmail) {
      // Check email
      let email = document.getElementById("emailInput").value;
      let testEmail = model.testEmail(email);
      view.processEmail(testEmail, email);
      checkFlag = testEmail;

    }
    if (checkPassword) {
      // Check password
      let password = document.getElementById("passwordInput").value;
      let testPassword = model.testPassword(password);
      view.processPassword(testPassword, password);
      checkFlag = testPassword;

    }
    return checkFlag;
  }
  function addLike(e) {
    view.addLikeClasses(e.target.dataset.like);
    model.setLocalStorageLike(e.target.dataset.id);
    model.setDataBase();
  }


  // LOAD PAGES -- START
  async function displayHomePage() {

    let url = model.getUrl();

    let main = document.getElementById("home_page");
    const data = await model.loadData(url.popularProducts);
    main.appendChild(view.loadHomePage(data));

    view.resposniveSection2();
    setupHomePageListners()
    setupPageListners();
  }
  async function loadNewPage() {


    let main = document.getElementById("new_page");
    main.appendChild(view.loadProductsPage());

    setupProductsLiseners();

    let data = await model.getDataProducts();
    document.getElementById("newFilter").checked = true
    view.renderProducts(data);

    setupPageListners();

    setupPaginationListners();

  }
  async function loadDiscountsPage() {


    let main = document.getElementById("discount_page");
    main.appendChild(view.loadProductsPage());

    setupProductsLiseners();

    let data = await model.getDataProducts();
    document.getElementById("discountPrice").checked = true
    view.renderProducts(data);

    setupPageListners();

    setupPaginationListners();

  }
  async function displayProductsPage() {


    let main = document.getElementById("products_page");
    main.appendChild(view.loadProductsPage());
    setupProductsLiseners();

    let data = await model.getDataProducts();
    view.renderProducts(data);

    setupPageListners();
    setupPaginationListners();
  }

  async function displayProductPage() {

    let url = model.getUrl();
    let likeArray = model.getLocalLikeItems();

    model.setLocalStorageLike();


    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let id = urlParams.get("id");

    let data = await model.loadData(url.productId + id);
    let main = document.getElementById("product_page");
    main.innerHTML = "";

    main.appendChild(view.loadProductPage(data, likeArray));

    setupProductPageListners();
    setupPageListners();
  }
  function displayLoginPage() {
    let main = document.getElementById("login_page");
    main.appendChild(view.loadLoginPage());

    setupPageListners();
    setupLogInFormListners();
  }
  function displaySignupPage() {
    let main = document.getElementById("signup_page");
    main.appendChild(view.loadSignupPage());


    setupPageListners();
    setupSignUpFormListners();

  }
  async function displayFavoritePage() {
    let main = document.getElementById("favorite_page");

    let wishListItems = await model.wishListItems()
    main.innerHTML = "";
    main.appendChild(view.loadFavoritePage(wishListItems));

    setupPageListners();
    setupFavoriteListeners()
  }
  async function displayAccountPage() {
    let main = document.getElementById("account_page");

    let userLocalData = model.getUserLocal();
    if (userLocalData) {
      let user = await model.getUser(userLocalData.user.username, userLocalData.token)
      if (user) {
        if (user.wishList != null && user.wishList.length > 0) {
          console.log(" od baze " + user.wishList)
          model.loadWishList(user.wishList);
        }
        main.innerHTML = "";
        main.appendChild(view.loadAcountAccessPage(user))
        setupAccountAccessPageListners()
      } else {
        main.appendChild(view.loadAcountPage());
      }
    }
    else {
      main.appendChild(view.loadAcountPage());
    }
    setupPageListners();
  }
  function displaySearchPage() {
    let main = document.getElementById("search_page",);
    main.appendChild(view.loadSearchPage());

    setupPageListners();
    setupSearchPageListners();
  }
  async function displayCartPage() {
    let main = document.getElementById("cart_page");
    let cartProducts = await model.cartProducts()

    main.innerHTML = "";

    main.appendChild(view.loadCartPage(cartProducts));

    setupPageListners();
    setupCartPageListners();
  }
  function deliveryPage() {
    let main = document.getElementById("delivery_page");
    main.appendChild(view.loadDeliveryPage());
    setupPageListners();

  } function supportPage() {
    let main = document.getElementById("support_page");
    main.appendChild(view.loadSupportPage());
    setupPageListners();

  }
  function privacyPolicyPage(){
    let main = document.getElementById("policy_page");
    main.appendChild(view.loadPrivacyPolicyPage());
    setupPageListners();
  }
  function termOfUsePage(){
    let main = document.getElementById("termofuse_page");
    main.appendChild(view.loadTermOfUsePagePage());
    setupPageListners();
  }
  //LOAD PAGES -- END

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
    search: () => {
      displaySearchPage();
    },
    cart: () => {
      displayCartPage();
    },
    delivery: () => {
      deliveryPage()
    },
    support: () => {
      supportPage();
    },
    policy:()=>{
      privacyPolicyPage();
    },
    termofuse:()=>{
      termOfUsePage();
    }

  };
};
