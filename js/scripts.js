$(document).ready(function() {
	var defaultData = [];

	$('#build-up').click(function() {
		var voltage = $('#input-voltage').val();
		var jsonObj = calculateChartData($('#input-voltage').val(), $('#input-current').val(), $('#input-resistence').val());

		for(var i = 0; i < jsonObj.voltage.length; i++) {
			console.log(jsonObj.voltage[i]);
		}

		buildDependencies(setLineChartData(jsonObj.resistence, jsonObj.voltage));	
	});
});

/*
Tmp. calculation implementation
*/
calculateChartData = function(fVoltage, fCurrent, fResistence) {
	var voltage = [];
	var resistence = [];
	var voltageVal = parseFloat(fVoltage);
	var resistenceVal = parseFloat(fResistence);

	for(var i = 0; i < 20; i++) {
		voltage[i] = (Math.random() * 10) * voltageVal;
		resistence[i] = i * resistenceVal;
		console.log(voltage[i] + " --- " + resistence[i]);
	}

	return {
		"voltage": voltage,
		"resistence": resistence
	};
}

setLineChartData = function(fLabels, fChartData) {
	var lineChartData = {
		labels : [3, 4, 6, 8, 10, 12]   /*fLabels*/,
			datasets : [
			{
				label: "My First dataset",
				fillColor : "rgba(220,0,0,0.0)",
				strokeColor : "rgba(220,0,0,1)",
				pointColor : "rgba(0,220,0,1)",
				pointStrokeColor : "#00f",
				pointHighlightFill : "#00f",
				pointHighlightStroke : "rgba(0,0,0,1)",
				data : [0.52, 0.522, 0.524, 0.526, 0.528,  0.53]/*fChartData*/
			}
		]
	};
	return lineChartData;
}

buildDependencies = function(fLineChartData) {
	var ctx = document.getElementById('myCanvas').getContext('2d');
	var chart = new Chart(ctx).Line(fLineChartData, {
		responsive: false
	});	
}

var randomScalingFactor = function() { 
	return Math.round(Math.random()*10)
};

var defineSettings = function(fLabel, fFillColor, fStrokeColor, fPointColor, fPointStrokeColor, fPointHighlightFill, fPointHighlightStroke) {
	return {
		label: fLabel,
		fillColor : fFillColor,
		strokeColor : fStrokeColor,
		pointColor : fPointColor,
		pointStrokeColor : fPointStrokeColor,
		pointHighlightFill : fPointHighlightFill,
		pointHighlightStroke : fPointHighlightStroke,
	};
}


//******D811******
//1 (Icm = 5mA)
//Rcm, Om --- 6.5  6.7 7  7.2  8
//Tempr   --- -60 -30  0  30   60

//2 (T = +25)
//Rcm, Om --- 14  8.4  5.5  4.1  3.2
//Icm, mA --- 1   5    10   15   20

//3
//Alpha (T = -60...+30) ---  7   7.2  7.4  7.6   7.8
//Icm, mA               --- 2.5   5   10    15   20

//4
//Alpha (T = +30...+125) --- 0.052  0.051  0.048  0.046  0.043
//Icm, mA                ---  2.9     5      10    15     20
//******D811******

//******Д814А*****
//
//T = 25
//R Ом   |5.2 2.9  2  1.5  1.1  1.0
//Icm mA | 2   5  10   15  20   25
//
//R Ом   |2.4 2.8 3 3.2 3.3 3.5 3.8
//T	 |-60 -30 0 30  60  90  120 
//
//a      |0.052 0.0522 0.0524 0.0526 0.0528  0.053
//I Ма   |3    4     6     8     10    12
//******Д814А*****

//******D814D******
//1
//Alpha    --- 0.0745  0.075  0.076  0.077
//Icm, мА  ---   3       4      6      8

//2 (T = +25 C)
//Rcm, Om --- 15.0  10.4   7.0   5.0   4.1
//Icm, mA --- 2.5     5     10    15    20   

//3
//Rcm, Om  --- 6.6  7.2   7.8  8.3    9.0
//Temperat --- -60  -30    0    30    60

//******D814D******


//******KC133A*****
//1 (T = -60 C)
//Rcm, Om --- 142 125 100 75   68   50   43
//Icm, mA --- 2.5 2.9 5.0 6.8  7.5  8.7  10

//2 (T = +25 C)
//Rcm, Om --- 129  100  89   75   64   53    50
//Icm, mA --- 2.8  4.6  5.0  6.3  7.5  10.0  10.3 

//3 (T = +125 C)
//Rcm, Om --- 108 100 79   75   64   50   44
//Icm, mA --- 2.7 3.0 5.0  5.6  7.5  8.8  10

//4 (T = -60 ... + 125 C)
//Alpha   --- 0.01  0.00  -0.01  -0.02
//Icm, mA --- 5     10    15     18

//******KC133A*****


//******KC156A*****

//1 (-60 C)
//Rcm, Om --- 60   31   25   19   16
//Icm, mA --- 2.5  5.0  5.6  7.5  10

//2 (+25 C)
//Rcm, Om --- 83   55   50   28   25   19
//Icm, mA --- 2.8  5.0  5.3  7.5  7.8  10

//3 (+125 C)
//Rcm, Om --- 108   100  75   69   50   38   25
//Icm, mA --- 2.6   2.9  4.7  5.0  6.0  7.5  10.0

//4 (T = -60 ... +125 C)
//Alpha --- 0.01  0    -0.008  -0.014
//I, mA --- 5.0   10   15      20

//******KC156A*****


//******KC168A*****

//1 (T = -60 C)
//Rcm, Om  ---  14   12   10   9
//Icm, mA  ---  2.5  5.0  7.5  10

//2 (T = +25 C)
//Rcm, Om  ---  23   13   12   11
//Icm, mA  ---  2.5  5.0  7.5  10

//3 (T = +125 C)
//Rcm, Om  ---  24   19   14   12
//Icm, mA  ---  2.7  5.0  7.5  10

//4 (T = -60 ... +125 C)
//Alpha --- 0.01  0    -0.009
//I, mA --- 5.0   10   15    

//******KC168A*****






