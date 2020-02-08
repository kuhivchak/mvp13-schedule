insertWeekDateBottom(getWeekDate());
insertDateForDays(getWeekDate());

function getWeekDate() {
	var currectDate = new Date();
	var weekDates = [];

	for (var i = 1; i <= 5; i++) {
		var temp = new Date();
		temp.setDate(currectDate.getDate() - currectDate.getDay() + i);
		weekDates.push(temp);
	}
	return weekDates;
}

function insertWeekDateBottom(weekDates) {
	var options = { year: 'numeric', month: 'long', day: 'numeric' };
	document.getElementById('week-date').innerHTML = "(" + weekDates[0].toLocaleDateString('uk-UA', options) + 
    " — " + weekDates[4].toLocaleDateString('uk-UA', options) + ")";
}

function insertDateForDays(weekDates) {
	var options = { month: 'long', day: 'numeric' };
	document.getElementById('monday-date').innerHTML = weekDates[0].toLocaleDateString('uk-UA', options);
	document.getElementById('tuesday-date').innerHTML = weekDates[1].toLocaleDateString('uk-UA', options);
	document.getElementById('wednesday-date').innerHTML = weekDates[2].toLocaleDateString('uk-UA', options);
	document.getElementById('thursday-date').innerHTML = weekDates[3].toLocaleDateString('uk-UA', options);
	document.getElementById('friday-date').innerHTML =  weekDates[4].toLocaleDateString('uk-UA', options);
}

function getCurrentWeekDayInFormat(format) {
	var options = { weekday: format };
	var today = new Date();
	return today.toLocaleDateString('us-UK', options);
}

function studyDay(date) {
	return !((date.getDay() === 6) || (date.getDay() === 0));
}
