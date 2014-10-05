//Константы
var stabilitrons = [
	{
		name: "D811",
		dependencies: [
			{
				oY: "Rст., Ом",
				oX: "T, C",
				description: "График зависимости Rcт. от T.",
				valuesY: [6.5, 6.7, 6.9, 7.2, 8.0],
				valuesX: [-60, -30, 0, 30, 60],
				condition: "Iст. = 5мА",
				pace: 5
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 14.0, 8.4, 5.5, 4.1, 3.2, null],
				valuesX: [0, 1, 5, 10, 15, 20, 25],
				condition: "T = +25 C",
				pace: 1	
			},
			{
				oY: "α, %/C",
				oX: "Iст., мА",
				description: "График зависимости α от Iст.",				
				valuesY: [null, 7.0, 7.2, 7.4, 7.6, 7.8, null],
				valuesX: [0, 2.5, 5, 10, 15, 20, 25],
				condition: "T = -60 ... +30 C",
				pace: 1		
			},
			{
				oY: "α, %/C",
				oX: "Iст., мА",
				description: "График зависимости α от I.",			
				valuesY: [null, 0.054, 0.051, 0.048, 0.045, 0.042, null],
				valuesX: [0, 2.9, 5, 10, 15, 20, 25],
				condition: "T = +30 ... +125 C",
				pace: 1			
			}
		],
	},
	{
		name: "D814A",
		dependencies: [
			{
				oY: "α, %/C",
				oX: "Iст., мА",
				description: "График зависимости α от Iст.",				
				valuesY: [null, 0.052, 0.0522, 0.0524, 0.0526, 0.0528, 0.053, null],
				valuesX: [0, 3, 4, 6, 8, 10, 12, 14],
				condition: "T = -60 ... +30 C",	
				pace: 1	
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",
				valuesY: [null, 5.2, 2.9, 2.0, 1.5, 1.1, 1.0, null],
				valuesX: [0, 2, 5, 10, 15, 20, 25, 30],
				condition: "T = +25",
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "T, C",
				description: "График зависимости Rcт. от T.",				
				valuesY: [ 2.1, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9],
				valuesX: [-60, -30, 0, 30, 60, 90, 120],
				condition: "",
				pace: 5	
			}
		],
	},
	{
		name: "D814D",
		dependencies: [
			{
				oY: "α, %/C",
				oX: "Iст., мА",
				description: "График зависимости α от Iст.",
				valuesY: [null, 0.0745, 0.075, 0.076, 0.077, null],
				valuesX: [0, 3, 4, 6, 8, 10],
				condition: "",
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 15.0, 10.4, 7.0, 5.0, 4.1, null],
				valuesX: [0, 2.5, 5, 10, 15, 20, 25],
				condition: "T = +25",
				pace: 1	
			},
			{
				oY: "Rcm, Om",
				oX: "T, C",
				description: "График зависимости Rcm. от T.",				
				valuesY: [6.6, 7.2, 7.8, 8.3, 9.0],
				valuesX: [-60, -30, 0, 30, 60],
				condition: "",
				pace: 5		
			}
		],
	},
	{
		name: "KC133A",
		dependencies: [
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",
				valuesY: [null, 144, 94, 60, 43, null],
				valuesX: [0, 2.5, 5.0, 7.5, 10, 12.5],
				condition: "T = -60 C",
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 129, 85, 64, 56, null],
				valuesX: [0, 2.8, 5.0, 7.5, 10.0, 12.5],
				condition: "T = +25 C",
				pace: 1	
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт от Iст.",				
				valuesY: [null, 115, 79, 59, 44, null],
				valuesX: [0, 2.7, 5.0, 7.5, 10, 12.5],
				condition: "T = +125 C",
				pace: 1		
			},
			{
				oY: "α, %/C",
				oX: "Iст., мА",
				description: "График зависимости α от Iст.",			
				valuesY: [0.01, 0.00, -0.01, -0.02],
				valuesX: [5, 10, 15, 18],
				condition: "T = -60 ... + 125 C",
				pace: 1			
			}
		],
	},
	{
		name: "KC156A",
		dependencies: [
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",
				valuesY: [null, 60, 35, 19, 16, null],
				valuesX: [0, 2.5, 5.0, 7.5, 10, 12.5],
				condition: "T = -60 C",
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 83, 50, 28, 22, null],
				valuesX: [0, 2.8, 5.0, 7.5, 10, 12.5],
				condition: "T = +25 C",
				pace: 1	
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 108, 69, 38, 25, null],
				valuesX: [0, 2.6, 5.0, 7.5, 10.0, 12.5],
				condition: "T = +125 C",
				pace: 1		
			},
			{
				oY: "α, %/C",
				oX: "Iст., мА",
				description: "График зависимости α от I.",			
				valuesY: [0.01, 0, -0.01, -0.014],
				valuesX: [5.0, 10.0, 15.0, 20.0],
				condition: "T = -60 ... + 125 C",
				pace: 1			
			}
		],
	},
	{
		name: "KC168A",
		dependencies: [
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",
				valuesY: [null, 14, 12, 10, 9, null],
				valuesX: [0, 2.5, 5.0, 7.5, 10, 12.5],
				condition: "T = -60 C",
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 23, 16, 13, 11, null],
				valuesX: [0, 2.5, 5.0, 7.5, 10, 12.5],
				condition: "T = +25 C",	
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 24, 19, 14, 12, null],
				valuesX: [0, 2.7, 5.0, 7.5, 10, 12.5],
				condition: "T = +125 C",		
				pace: 1
			},
			{
				oY: "α, %/C",
				oX: "Iст., мА",
				description: "График зависимости α от I.",			
				valuesY: [0.01, 0, -0.009],
				valuesX: [5.0, 10, 15],
				condition: "T = -60 ... + 125 C",
				pace: 1			
			}
		],
	}
];

//*************************************************Построение графиков*************************************************
//Рисует графики на странице
buildCharts = function(stabilitron) {
	var $chartSection = $('#charts');
	$chartSection.html('');

	for(var i = 0; i < stabilitron.dependencies.length; i++) {
		if(i % 2 == 0)
			$chartSection.append('<div class="chart-area"><div class="oY">' 
									+ stabilitron.dependencies[i].oY + '</div><canvas id="canvas-' 
									+ i + '" width="585px" height="585px"></canvas><div class="oX">' 
									+ stabilitron.dependencies[i].oX + '</div><h3>График зависимости 1</h3></div>');
		else 
			$chartSection.append('<div class="chart-area right-margin-zero"><div class="oY">' 
									+ stabilitron.dependencies[i].oY + '</div><canvas id="canvas-' 
									+ i + '" width="585px" height="585px"></canvas><div class="oX">' 
									+ stabilitron.dependencies[i].oX + '</div><h3>График зависимости 1</h3></div>');
		
		var ctx = document.getElementById('canvas-' + i).getContext('2d');
		$('#canvas-' + i).siblings('h3').html(stabilitron.dependencies[i].description + 
											  ((stabilitron.dependencies[i].condition == "" || stabilitron.dependencies[i].condition == null) 
											  	? "" 
											  	: " (Доп. условие: " + stabilitron.dependencies[i].condition + ")"));
		
		var chart = new Chart(ctx).Line(setLineChartData(stabilitron.dependencies[i].valuesX, stabilitron.dependencies[i].valuesY), {
			responsive: false
		});
	}
}

//Предварительно заполняет selector стабилитронов
fillStabilitronSelector = function() {
	var $stabilitronSelector = $('#stabilitron-selector');
	for(var i = 0; i < stabilitrons.length; i++) {
		$stabilitronSelector.append('<option>' + stabilitrons[i].name + '</option>');		
	}
}

//Установка данных для построения
setLineChartData = function(fLabels, fChartData) {
	var lineChartData = {
		labels : fLabels,
			datasets : [
			{
				label: "My First dataset",
				fillColor : "rgba(220,0,0,0.0)",
				strokeColor : "rgba(220,0,0,1)",
				pointColor : "rgba(0,220,0,1)",
				pointStrokeColor : "#00f",
				pointHighlightFill : "#00f",
				pointHighlightStroke : "rgba(0,0,0,1)",
				data : fChartData
			}
		]
	};
	return lineChartData;
}

//Поиск стабилитрона по его имени
seekByName = function(selectedName) {
	for(var i = 0; i < stabilitrons.length; i++) {
		if(selectedName == stabilitrons[i].name) {
			return i;
		}
	}
	return -1;
}

//***********************************Интерполяция и получение значений*************************************************

interpolateValues = function(stabilitron) {
	$('#dependencies-container').html('');

	for(k = 0; k < stabilitron.dependencies.length; k++) {
		//Результирующий массив, содержащий json-объекты для каждого интервала
		var result = [];

		for(var i = 0; i < stabilitron.dependencies[k].valuesX.length - 1; i++) {
			//следуюшая и текущая точки должны гарнатированно существовать (искл. null)
			if(stabilitron.dependencies[k].valuesY[i] && stabilitron.dependencies[k].valuesY[i + 1]) {
				result.push(commitLineEquation(stabilitron.dependencies[k].valuesX[i], 
											   stabilitron.dependencies[k].valuesY[i], 
											   stabilitron.dependencies[k].valuesX[i + 1], 
											   stabilitron.dependencies[k].valuesY[i + 1],
											   stabilitron.dependencies[k].pace, 
											   stabilitron.dependencies[k].valuesX[stabilitron.dependencies[k].valuesX.length - 1]));
			}
		}

		formTable(result, stabilitron.dependencies[k].oY, stabilitron.dependencies[k].oX, stabilitron.dependencies[k].condition);
	}
}

//Получаем значения, согласно уравнению прямой (y = ax + b)
commitLineEquation = function(x1, y1, x2, y2, pace, max_x) {
	var a = (y2 - y1) / (x2 - x1);
	var b = y1 - a * x1;

	var interpolateValues = {
			valuesX: [],
			valuesY: []
		}
	;
	
	for(var x = x1, i = 0; x < x2; x += pace, i++) {
		interpolateValues.valuesX[i] = x;
		interpolateValues.valuesY[i] = a * x + b;
		if(x2 == max_x)
		{
			interpolateValues.valuesX[i + 1] = x2;
			interpolateValues.valuesY[i + 1] = a * x2 + b;
		}
	}
	
	return interpolateValues;
}

formTable = function(data, operand_1, operand_2, condition) {
	var $container = $('#dependencies-container');
	var newTable = "";
	newTable = newTable.concat('<h3>Таблица зависимости ' + operand_1 
								+ ' от ' + operand_2 
								+ (condition == "" ? "" : ' (Доп. условие:' + condition + ')') 
								+'</h3>');
	newTable = newTable.concat('<table border="1">');

	newTable = newTable.concat('<tr>');
	newTable = newTable.concat('<th>' + operand_2 + '</th>');
	for(var i = 0; i < data.length; i++) {
		for(var j = 0; j < data[i].valuesX.length; j++) {
			newTable = newTable.concat('<td>' + data[i].valuesX[j] + '</td>');
		}
	}
	newTable = newTable.concat('</tr>');

	newTable = newTable.concat('<tr>');
	newTable = newTable.concat('<th>' + operand_1 + '</th>');
	for(var i = 0; i < data.length; i++) {
		for(var j = 0; j < data[i].valuesX.length; j++) {
			newTable = newTable.concat('<td>' + data[i].valuesY[j].toFixed(4) + '</td>');
		}
	}
	newTable = newTable.concat('</tr>');

	newTable = newTable.concat('</table>');
	$container.append(newTable);
} 
//*********************************************************************************************************************

$(function() {
	$('#charts').html('');
	$('#dependencies-container').html('');
	fillStabilitronSelector();

	//Первоначальное построение
	var initialBuildIndex = seekByName($('#stabilitron-selector').val());
	if(initialBuildIndex != -1) {
		buildCharts(stabilitrons[initialBuildIndex]);
		//Построить таблицы интерполяции
		interpolateValues(stabilitrons[initialBuildIndex]);
	}

	//Построение выбранного стабилитрона
	$('#stabilitron-selector').change(function() {
		var index = seekByName($(this).val());
		buildCharts(stabilitrons[index]);
		interpolateValues(stabilitrons[index]);
	});
});
