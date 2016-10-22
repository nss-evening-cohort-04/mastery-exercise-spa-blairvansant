var CarLot = (function(firstIife) {
	var currentPick = "";
	var activeContainer = document.getElementsByClassName("car_card");
	var userInput = document.getElementById("enterText");

		firstIife.activateEvents = function() {
			for (var a = 0; a < activeContainer.length; a++) {
				activeContainer[a].addEventListener("click", function(b) {
			for (var c = 0; c < activeContainer.length; c++) {
				activeContainer[c].classList.remove("on-click");
				userInput.value = "";
			}

			b.currentTarget.classList.add("on-click");
			currentPick = b.currentTarget;
			userInput.focus();

			});

	
}	

	userInput.addEventListener("keyup", clearInput);

	function clearInput(b) {
		b.preventDefault();
		if (b.keyCode === 13)
		userInput.value = "";
	}



//unnecessary clear btn 
// function clear(){
 
//  	document.getElementById("enterText").value = "";
//  	console.log(clearButton, clicked);
//  }
}
	return firstIife;

})(CarLot || {});





