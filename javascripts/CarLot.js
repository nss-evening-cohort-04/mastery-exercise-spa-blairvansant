var CarLot = (function () {
  var inventory = [];
  
  return {
      loadInventory: function () {
      var carInventory = ["inventory.json"];	
      var inventoryLoader = new XMLHttpRequest(); 

      inventoryLoader.addEventListener("load", function () {
      var inventory = JSON.parse(this.responseText);

      fillPage(inventory);
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  };

})();


