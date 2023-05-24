//MODEL
export const model = (function () {
  const urlPopular = "http://localhost:5000/products/popular";
  async function takeData() {
    let response = await fetch(urlPopular).then(res=>res.json());
    return await response;
  }
  return {
    takeData,
  };
})();
