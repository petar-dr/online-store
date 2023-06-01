//MODEL
export const model = (function () {

  const url = {
    allProducts: "http://localhost:5000/products",
    popularProducts: "http://localhost:5000/products/popular",
    productId: "http://localhost:5000/products/:id",
  };
  
  async function loadData(url) {
    let response = await fetch(url).then(res=>res.json());
    return await response;
  }
  return {
    getUrl: ()=>{
      return url;
    },
    loadData: (url)=>{
     return loadData(url);
    }
  };
})();