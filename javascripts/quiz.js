function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var container = document.getElementById("container");
  var counter = 0;
  var carOutput = "";

  	for (var i = 0; i < inventory.cars.length; i++) {
  	var carOutput = inventory.cars[i];
  		carOutput += "<div id='container'>";
  		carOutput += "<div class='col-md-4'>";
  		carOutput += "<div class='row'>";
  		carOutput += "<div>" + car.year + " " + car.make + " " + car.model + "</div>";
  		carOutput += "<div>" + car.description + "</div>";
  		carOutput += "<div>" + car.price + "</div>";
  	}
  		container.innerHTML = carOutput;
  // Now that the DOM is loaded, establish all the event listeners needed
 //   CarLot.activateEvents();
 //   	var CarLot = (function () {
 //   	var inventory = [];

 //  };

 //  return 

	// })(CarLot || {});
}

// for (; counter < 5 ; counter++) {
// 		var peopleObjects = `<header>${people[counter].name}:`;
// 			peopleObjects += `${people[counter].title}</header>`;
// 			peopleObjects += `<img src="${people[counter].image}">`;
// 			peopleObjects += `<footer>lifespan: ${people[counter].lifespan.birth} to `;
// 			peopleObjects += `${people[counter].lifespan.death}</footer>`;
// 			peopleObjects += `<section>${people[counter].bio}</section>`;
//   			outputEl.innerHTML += `<div class="people__container" id="people--${counter}">${peopleObjects}</div>`;
// 	};

// 	var bioSection;
// 	for (var i = 0; i < peopleContainer.length; i++) {
// 	    peopleContainer[i].addEventListener("click", function (event) {
// 	    bioSection = this.childNodes[3];
// 	    bioSection.parentElement.classList.toggle("border");
    
// 	    userInput.style.background = "lightgreen";
//         if(userInput.value === "Add to selected bio"){
//           userInput.value = "";
//        	} else if (userInput.value === ""){
//        		userInput.style.background = "white";
//        		userInput.value = "Add to selected bio";
//        	};

//        	userInput.focus();
//        	userInput.addEventListener("keyup", function (event){
//        		event.preventDefault();
//        		bioSection.innerHTML = userInput.value;
//        	});
//       }); 
// 	} 


































// // Load the inventory and send a callback function to be
// // invoked after the process is complete
// CarLot.loadInventory();



// Behavior

// Create an array of cars in the inventory.json file (see example structure below). Put at least three cars in the array.
// When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
// Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of container. Hint: You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.
// Put a standard Bootstrap navbar element at the top of your page.
// Put a text input field in the navigation bar.
// Make sure you display all properties of the car in the DOM. Basic styling is up to you.
// Make sure that each car card element has a CSS class which adds a black border around it.
// When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
// Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
// When you start typing into the navbar's text input, the description, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.
// Technical Requirements

// Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.
// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).
// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.
// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name of your choice (see behavior requirement 5 above).


