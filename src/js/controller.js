//CONTROLER
export const controller = function (model, view) {
  let setupLisiner = function () {
    let DOM = view.getDOMString();
    window.addEventListener("click", ispis);
  };
  function ispis() {
    console.log("promenjeno");
  }
  //pages
  async function displayHomePage() {
    let DOM = view.getDOMString();
    let url = model.getUrl();

    let main = document.getElementById(DOM.homePage);
    const data = await model.loadData(url.popularProducts);
    main.appendChild(view.loadHomePage(data));
  }
  async function displayProductsPage() {
    let DOM = view.getDOMString();
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

    let main = document.getElementById(DOM.productsPage);
    main.appendChild(view.loadProductsPage(data));
  }
  async function displayProductPage() {
    let DOM = view.getDOMString();
    let url = model.getUrl();
    let likeArray = JSON.parse(localStorage.getItem("likeItems"));

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let id = urlParams.get("id");

    let data = await model.loadData(url.productId + id);
    let main = document.getElementById(DOM.productPage);
    main.appendChild(view.loadProductPage(data, likeArray));

    //Event listener for like button
    document.getElementById("heartIcon").addEventListener("click", addLike);
  }
  function displayLoginPage() {
    let DOM = view.getDOMString();

    let main = document.getElementById(DOM.loginPage);
    main.appendChild(view.loadLoginPage());
  }
  function displaySignupPage() {
    let DOM = view.getDOMString();

    let main = document.getElementById(DOM.signupPage);
    main.appendChild(view.loadSignupPage());

    document.getElementById("submitBtn").addEventListener("click", checkData);
    document
      .getElementById("passwordIcon")
      .addEventListener("click", passwordIcon);
  }
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
    console.log(password);
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
      console.log(Array);
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
      setupLisiner();
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
