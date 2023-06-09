//MODEL
export const model = (function () {

  const url = {
    allProducts: "http://localhost:5000/products",
    chairs: "http://localhost:5000/products/chairs",
    tables: "http://localhost:5000/products/tables",
    sofas: "http://localhost:5000/products/sofas",
    popularProducts: "http://localhost:5000/products/popular",
    productId: "http://localhost:5000/product/",
    getUser: "http://localhost:5000/user/",
    signUp: "http://localhost:5000/singup",
    logIn: "http://localhost:5000/login",
    setWishList: "http://localhost:5000/setwishlist"
  };
  //Load data
  function getLocalCartProducts() {
    return JSON.parse(localStorage.getItem("cartProducts"));
  }
  function getLocalLikeItems() {
    return JSON.parse(localStorage.getItem("likeItems"));
  }
  function getUserLocal() {
    let user = JSON.parse(localStorage.getItem("curentUser"));
    return user;
  }

  async function wishListItems() {
    let likeArray = getLocalLikeItems();
    if (likeArray == null) {
      likeArray = [];
    }
    const data = await model.loadData(url.allProducts);
    return data.filter((elem) =>
      likeArray.includes((elem.id).toString())
    )
  }
  async function cartProducts() {

    let cartItems = getLocalCartProducts();
    if (cartItems == null || cartItems.length < 1) {
      return [];
    }
    return cartItems;

  }
  async function getDataProducts() {

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
  async function signUp(username, email, password) {

    const res = await fetch(url.signUp, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    }).then(response => response.json());
    console.log(res)
    if (res.status == 200) {
      alert(res.message)
      window.location.href = "login.html";

    } else {
      alert(res.error)
    }
  }
  async function logIn(username, password) {
    const res = await fetch(url.logIn, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(response => response.json());
    if (res.status === 200) {
      console.log(res)
      let userData = JSON.stringify({ user: res.user, token: res.token });
      localStorage.setItem("curentUser", userData);
      alert(res.message)
      window.location.href = "account.html";

    } else {
      alert(res.error)
    }
  }
  async function loadData(url) {
    let response = await fetch(url).then(res => res.json());
    return await response;
  }

  async function getUserData(username, token) {

    let urlFetch = url.getUser + username;
    const result = await fetch(urlFetch, {
      method: "GET",
      headers: {
        "Content-Type": 'application/json',
        ["x-access-token"]: token,
      },
    }).then(response => response.json())
    return result;
  }
  function userLogOut() {
    localStorage.removeItem("curentUser");
    localStorage.removeItem("likeItems");
    localStorage.removeItem("cartProducts");

    window.location.href = "index.html";
  }
  async function searchFilter(searchValue) {
    let data = await model.loadData(url.allProducts);
    return data.filter(elem => elem.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1);
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
  function removeItem(itemId) {
    let likeItems = getLocalLikeItems();
    likeItems = likeItems.filter(elem => elem != itemId)
    localStorage.setItem("likeItems", JSON.stringify(likeItems));
  }
  function removeCartItem(itemId) {

    let cartProducts = getLocalCartProducts();
    cartProducts = cartProducts.filter(elem => elem.id != itemId);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
  function testUsername(username) {
    let checkName = new RegExp(/^[a-zA-Z]{3,15}$/);
    return checkName.test(username)
  }
  function testEmail(email) {
    let checkEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return checkEmail.test(email);
  }
  function testPassword(password) {
    let checkPassword = new RegExp(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]){6,16}/
    );
    return checkPassword.test(password);
  }
  async function setCartProducts(productId, productQuantity) {

    let cartArray = [];

    let products = await loadData(url.allProducts)
    let product = products.find(e => e.id == productId)

    product.quantity = productQuantity;


    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (cartProducts && cartProducts.length > 0) {
      if (cartProducts.find(elem => elem.id == product.id)) {
        cartProducts.forEach((elem) => {
          if (product.id == elem.id) {

            elem.quantity = product.quantity;

          }
        })
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      }
      else {
        cartProducts.push(product)
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      }
    } else {
      cartArray.push(product)
      localStorage.setItem("cartProducts", JSON.stringify(cartArray))
    }

  }
  function setCartQuantity(productID, btnId) {
    productID = Number(productID)
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

    let productIndex = cartProducts.findIndex(elem => elem.id == productID)
    if (btnId == "cartPlusBtn") {
      cartProducts[productIndex].quantity++;
    } else {
      if (cartProducts[productIndex].quantity > 1) {
        cartProducts[productIndex].quantity--;

      }
    }
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
  async function fromWishToCart(productId) {
    productId = Number(productId);
    removeItem(productId);
    setCartProducts(productId, 1);
  }
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
  function setDataBase() {
    const curentUser = JSON.parse(localStorage.getItem("curentUser"));
    const likeList = getLocalLikeItems();

    if (curentUser) {
      const userId = curentUser.user._id;
      const token = curentUser.token.trim();
      setWishListData(userId, likeList, token);
    }
  }
  async function setWishListData(userId, likeList, token) {
    const res = await fetch(url.setWishList, {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json',
        ["x-access-token"]: token,
      },
      body: JSON.stringify({ userId, likeList })
    }).then(response => response.json());
    if (res.status == 200) {
      
    }
  }
  function loadWishList(wishListBase) {
    localStorage.setItem("likeItems", JSON.stringify(wishListBase));
  }
  return {
    getUrl: () => {
      return url;
    },
    loadData: (url) => {
      return loadData(url);
    },
    getUser: (username, token) => {
      return getUserData(username, token);
    },
    signUpUser: (username, email, password) => {
      return signUp(username, email, password);
    },
    logInUser: (username, password) => {
      return logIn(username, password)
    },
    setCartProducts,
    getUserLocal,
    userLogOut,
    searchFilter,
    setLocalStorageLike,
    getDataProducts,
    getLocalLikeItems,
    removeItem,
    testUsername,
    testEmail,
    testPassword,
    getLocalCartProducts,
    wishListItems,
    cartProducts,
    removeCartItem,
    setCartQuantity,
    fromWishToCart,
    sortPopular,
    sortLowHigh,
    sortHighLow,
    filterNew,
    filterDiscount,
    setDataBase,
    loadWishList,

  };
})();
