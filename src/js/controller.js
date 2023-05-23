//CONTROLER
export const controller = (function (model, view) {
    let setupLisiner = function () {
      let DOM = view.getDOMString();
     
    };
    function loadHomePage(){
       let DOM = view.getDOMString()
       const main = document.getElementById(DOM.main);
       const section1 = view.section1();
       const section2 = view.section2();
       main.innerHTML = section1 + section2;
    }
    
    return {
      init: function () {
        loadHomePage();
      },
    };
  });
  