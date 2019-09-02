insertText();
function insertText () {
	var currectDate = new Date();
	var startDate = new Date();
	var endDate = new Date();

	startDate.setDate(currectDate.getDate() - currectDate.getDay() + 1);
	endDate.setDate(currectDate.getDate() - currectDate.getDay() + 5);

    document.getElementById('week-data').innerHTML = "Розклад на поточний тиждень (" + startDate.toLocaleDateString() + " - " + endDate.toLocaleDateString() + ")";
}