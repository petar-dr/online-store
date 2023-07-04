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
  };
  //Load data
  function getLocalCartProducts() {
    return JSON.parse(localStorage.getItem("cartProducts"));
  }
  function getLocalLikeItems() {
    return JSON.parse(localStorage.getItem("likeItems"));
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
    if (cartItems == null) {
      cartItems = [];
    }
    const data = await model.loadData(url.allProducts);
    return data.filter((elem) =>
    cartItems.includes((elem.id).toString())
    )
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

    const result = await fetch(url.signUp, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    }).then(response => response.json());
    if (result.status === "ok") {
      alert("Succes")
      window.location.href = "login.html";
    } else {
      alert(result.error)
    }
  }
  async function logIn(username, password) {
    const result = await fetch(url.logIn, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(response => response.json());
    if (result.status === "ok") {

      let userData = JSON.stringify({ username: result.username, token: result.token });
      localStorage.setItem("curentUser", userData);


      window.location.href = "account.html";
      alert("Succes login")
    } else {
      alert(result.error)
    }
  }
  async function loadData(url) {
    let response = await fetch(url).then(res => res.json());
    return await response;
  }
  function getUserLocal() {
    let user = JSON.parse(localStorage.getItem("curentUser"));
    return user;
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
    let likeItems = model.getLocalLikeItems();
    likeItems = likeItems.filter(elem => elem != itemId)
    localStorage.setItem("likeItems", JSON.stringify(likeItems));
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
    cartProducts
  };
})();