function createField () {
	var numbRow = 10;
	var numbCell = 10;
	var table = document.createElement('table');
	table.id = "tableOne";
	table.border="1";
	for (var i = 0; i < numbRow; i++) {
		var row = table.insertRow(i);
		for (var j = 0; j < numbCell; j++) {
			var cell = row.insertCell(j);
			cell.width="30";
			cell.height= "30";
		}
	}
	 document.body.appendChild(table);
}
 
