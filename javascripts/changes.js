var CarLot = (function(firstIife) {
	var $currentPick;
	var activeContainer = document.getElementsByClassName("car_card");
	var $userInput = $("#enterText")[0];
		firstIife.activateEvents = function() {
			for (var a = 0; a < activeContainer.length; a++) {
				activeContainer[a].addEventListener("click", function(e) {
			for (var b = 0; b < activeContainer.length; c++) {
				activeContainer[b].classList.remove("on-click");
				$userInput.value = "";
			}
			console.log(e.currentTarget);
			$currentPick = $(e.currentTarget).children(".description");
			console.log($currentPick);
			$userInput.value = $currentPick.html();

			e.currentTarget.classList.add("on-click");
			$userInput.focus();

			});
		}	
			$userInput.addEventListener("keyup", clearInput);

			function clearInput(e) {
				e.preventDefault();
				if (e.keyCode === 13){
				$userInput.value = "";

				}else { 
				console.log($currentPick);
				$currentPick.html($userInput.value);
	  }
	}
}
	return firstIife;

})(CarLot || {});





