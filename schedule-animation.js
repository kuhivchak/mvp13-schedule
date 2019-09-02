animation();
	function animation() {
		var currentDate = new Date();
		var firstSeptemberDate = new Date("9/1/2019");
		var numberDiff = daysDiff(firstSeptemberDate, currentDate);
		var numerator = ((numberDiff - currentDate.getDay()) < 2) || (((numberDiff - currentDate.getDay()) % 2) === 0);
		var dynamicElements;

		if (numerator) {
			dynamicElements = document.getElementsByClassName("numerator");
		} else {
			dynamicElements = document.getElementsByClassName("denominator");
		
		}

		setBackgroudColor(dynamicElements, "lightgreen");
		var staticElements = document.getElementsByClassName("container");
		setBackgroudColor(staticElements, "lightgreen");
	}

	function daysDiff(date1, date2) {
		dt1 = new Date(date1);
		dt2 = new Date(date2);
		return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
	}

	function setBackgroudColor(elementByClass, color) {
	  	var i;
	  	for (i = 0; i < elementByClass.length; i++) {
	   		elementByClass[i].style.backgroundColor = color;
	 	 }
	}