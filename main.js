		var mouseX = 0;
		var mouseY = 0;
		var popupCounter = 0;

		document.addEventListener("mousemove", function(e) {
			mouseX = e.clientX;
			mouseY = e.clientY;
			document.getElementById("coordinates").innerHTML = "<br />X: " + e.clientX + "px<br />Y: " + e.clientY + "px";
		});

		$(document).mouseleave(function () {
			if (mouseY < 100) {
				if (popupCounter < 1) {
					alert("Please do not close the tab!");
				}
				popupCounter ++;
			}
		});
