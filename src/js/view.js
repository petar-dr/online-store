//VIEW
export const view = (function () {
  const DOMString = {
    header: "header",
    main: "main",
    footer:"footer"
  };
 

  return {
    getDOMString: function(){
      return DOMString;
    }
  };
})();
