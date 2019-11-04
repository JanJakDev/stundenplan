var box = document.getElementById("pass");

box.addEventListener("keyup", function(event){
	if (event.keyCode === 13) {
		event.preventDefault();
		
		var input = document.getElementById("pass").value;
		if(input == "Stundenplan#"){
			window.open("Stundenplan.html");
			window.close();
		}
	}
});