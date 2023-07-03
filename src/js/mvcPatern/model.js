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
  };

  async function loadData(url) {
    let response = await fetch(url).then(res => res.json());
    return await response;
  }
  function userLogOut() {
    localStorage.removeItem("curentUser");
    localStorage.removeItem("likeItems");

    window.location.href = "index.html";
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
  async function searchFilter(searchValue) {
    let data = await model.loadData(url.allProducts);
    return data.filter(elem => elem.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1);
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
    getUserLocal,
    userLogOut,
    searchFilter
  };
})();
