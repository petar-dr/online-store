//CONTROLER
export const controller = function (model, view) {
  let setupLisiner = function () {
    let DOM = view.getDOMString();
    document
      .getElementById(DOM.delivery)
      .addEventListener("click", displayDelivery);
    document
      .getElementById(DOM.service)
      .addEventListener("click", displayService);
  };
  //header function
  function displayDelivery() {
    view.loadDelivery();
  }
  function displayService() {
    view.loadService();
  }
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

    let main = document.getElementById(DOM.productsPage);
    const data = await model.loadData(url.allProducts);
    main.appendChild(view.loadProductsPage(data));
  }

  return {
    init: () => {
      displayHomePage();
      // setupLisiner();
    },
    products: ()=>{
      displayProductsPage();
    }
  };
};
