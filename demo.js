const open = window.XMLHttpRequest.prototype.open;
console.log("inside the function-------");
function openReplacement() {
  console.log("inside the function");
  this.addEventListener("load", function () {
    if (
      [
        "/cart/add.js",
        "/cart/update.js",
        "/cart/change.js",
        "/cart/clear.js",
      ].includes(this._url)
    ) {
      calculateShipping(this.response);
    }
  });
  return open.apply(this, arguments);
}
console.log("inside the function((((((((");
window.XMLHttpRequest.prototype.open = openReplacement;
console.log("inside the function&&&&&");
function calculateShipping(cartJson) {
  console.log("calculate new shipping");
  console.log(JSON.parse(cartJson))
}
