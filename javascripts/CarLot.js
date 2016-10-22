var CarLot = (function () {
  var inventory = [];
  
  return {
      loadInventory: function () {
      var carInventory = ["inventory.json"];	
      var inventoryLoader = new XMLHttpRequest(); 

// When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
      inventoryLoader.addEventListener("load", function () {
      var inventory = JSON.parse(this.responseText);

      fillPage(inventory);
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  };

})();


