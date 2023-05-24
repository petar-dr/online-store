//CONTROLER
export const controller = function (model, view) {
  let setupLisiner = function () {
    let DOM = view.getDOMString();
    document.getElementById(DOM.delivery).addEventListener("click", displayDelivery);
    document.getElementById(DOM.service).addEventListener("click", displayService)

  };
  //header function
  function displayDelivery(){
    view.loadDelivery();
  }
  function displayService(){
    view.loadService();
  }
  async function displayHomePage() {
    let DOM = view.getDOMString();
    let main = document.getElementById(DOM.homePage);
    const data = await model.takeData();
    main.appendChild(view.loadHomePage(data));
  }

  return {
    init: function () {
      displayHomePage();
      // setupLisiner();
    },
  };
};
