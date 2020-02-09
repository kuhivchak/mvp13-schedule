animation();
	function animation() {
		var currentDate = new Date();
		var eightFebruaryDate = new Date("2/9/2020");
		var numberDiff = daysDiff(eightFebruaryDate, currentDate);
		var denominator = (((numberDiff / 7) % 2) < 1);
		var dynamicSubjectElements = denominator ? document.getElementsByClassName("denominator") : document.getElementsByClassName("numerator");
		setBackgroudColor(dynamicSubjectElements, "lightgreen");
		var staticSubjectElements = document.getElementsByClassName("container");
		setBackgroudColor(staticSubjectElements, "lightgreen");
		var staticNumberBlocks = document.getElementsByClassName("static number-block");
		setBackgroudColor(staticNumberBlocks, "lightgreen");
		var dynamicNumberBlocks = getNonEmptyNumberBlocks(dynamicSubjectElements);
		setBackgroudColor(dynamicNumberBlocks, "lightgreen");
		if (studyDay(currentDate)) {
			var todayDay = getCurrentWeekDayInFormat('long').toLowerCase();
			var dayBlockElement = document.getElementsByClassName(todayDay + " day-row");
			setBackgroudColor(dayBlockElement, "lightgreen");
		}
	}

	function daysDiff(date1, date2) {
		dt1 = new Date(date1);
		dt2 = new Date(date2);
		return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
	}

	function getNonEmptyNumberBlocks(dynamicSubjectElements) {
		var dynamicNumberBlocks = document.getElementsByClassName("dynamic number-block");
		var nonEmptyNumberBlocks = [];
		for (var i = 0; i < dynamicSubjectElements.length; i++) {
	   		if (!(dynamicSubjectElements[i].classList.contains("empty"))) {
	   			nonEmptyNumberBlocks.push(dynamicNumberBlocks[i]);
	   		}
	 	 }
	 	 return nonEmptyNumberBlocks;
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