//CONTROLER
export const controller = function (model, view) {
  let setupLisiner = function () {
    let DOM = view.getDOMString();
  };
  async function loadHomePage() {
    let DOM = view.getDOMString();
    let main = document.getElementById(DOM.main);
    let section1 = view.section1();
    let section2 = view.section2();
    const data = await model.takeData();
    let section3 = await view.section3(data);
 
    main.innerHTML = section1 + section2 ;
    main.appendChild(section3)
  }

  return {
    init: function () {
      loadHomePage();
    },
  };
};
