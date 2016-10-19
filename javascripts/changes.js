var CarLot = (function(firstIife) {
	var currentPick = "";
	var activeContainer = document.getElementsByClassName("col-md-4 car_card border");
	var userInput = document.getElementById("enterText");

		firstIife.activateEvents = function() {
			for (var i = 0; i < activeContainer.length; i++) {
				activeContainer[i].addEventListener("click", function(a) {
				console.log(a);

				

			a.currentTarget.classList.add.remove("on-click");
			currentPick = a.target;
			userInput.focus();
	    console.log(currentPick);

			});

	
}	




// function clear(){
 
//  	document.getElementById("enterText").value = "";
//  	console.log(clearButton, clicked);
//  }
}


})(CarLot || {});





