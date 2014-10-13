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

//***********************************Интерполяция и получение значений*************************************************
interpolateValues = function(stabilitron) {
	$('#dependencies-container').html('');

	for(k = 0; k < stabilitron.dependencies.length; k++) {
		//Результирующий массив, содержащий json-объекты для каждого интервала
		var result = [];

		for(var i = 0; i < stabilitron.dependencies[k].valuesX.length - 1; i++) {
			//следуюшая и текущая точки должны гарнатированно существовать (искл. null)
			if(stabilitron.dependencies[k].valuesY[i] 
				&& stabilitron.dependencies[k].valuesY[i + 1] 
				|| stabilitron.dependencies[k].valuesY[i] == 0
				|| stabilitron.dependencies[k].valuesY[i + 1] == 0) {
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
		if(x2 == max_x)1
		{
			interpolateValues.valuesX[i + 1] = x2;
			interpolateValues.valuesY[i + 1] = a * x2 + b;
		}
	}
	
	return interpolateValues;
}

//Формирует таблицу по данным значениям
formTable = function(data, operand_1, operand_2, condition) {
	var $container = $('#dependencies-container');
	var newTable = "";
	newTable = newTable.concat('<h3>Таблица зависимости ' + operand_1 
								+ ' от ' + operand_2 
								+ (condition == "" ? "" : ' (Доп. условие: ' + condition + ')') 
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