animation();
	function animation() {
		var currentDate = new Date();
		var eightFebruaryDate = new Date("2/9/2020");
		var numberDiff = daysDiff(eightFebruaryDate, currentDate);
		var denominator = (((numberDiff / 7) % 2) < 1);
		var dynamicElements = denominator ? document.getElementsByClassName("denominator") : document.getElementsByClassName("numerator");
		setBackgroudColor(dynamicElements, "lightgreen");
		var staticElements = document.getElementsByClassName("container");
		setBackgroudColor(staticElements, "lightgreen");
		if (studyDay(currentDate)) {
			var dayElement = document.getElementsByClassName(getCurrentWeekDayInFormat('long').toLowerCase());
			setBackgroudColor(dayElement, "lightgreen");
		}
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

	function showHeart() {
		var heartElement = document.getElementById('heart');
  	    if (heartElement.style.visibility == 'visible') {
    		heartElement.style.visibility = 'hidden';
  		} else {
    		heartElement.style.visibility = 'visible';
  		}
	}