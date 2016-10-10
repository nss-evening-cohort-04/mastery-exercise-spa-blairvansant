var CarLot = (function () {
  var inventory = [];

  return {
      loadInventory: function (callback) {
      var carInventory = ["inventory.json"];	
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      var inventory = JSON.parse(this.responseText);

      fillPage(inventory);
      });
      inventoryLoad.open("GET", "inventory.json");
      inventoryLoad.send();
    }
  };

})();


//BOILERPLATE//
// var CarLot = (function () {
//   var inventory = [];

//   return {
//     loadInventory: function (callback) {
//       var inventoryLoader = new XMLHttpRequest();

//       inventoryLoader.addEventListener("load", function () {

//       });
//     }
//   };

// })(); 