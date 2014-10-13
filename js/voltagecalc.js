//***********************************Расчет напряжения стабилизации****************************************************
//Возвращает диапазон
getRange = function(left, right) {
	var range = {
		left: left,
		center: (right + left) / 2,
		right: right,
		shift: (right + left) / 2 - left
	};

	return range;
}

//Берем среднее значение
getAverageValue = function() {
	if(arguments.length == 0) 
		return null;

	var sum = 0;
	for(var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	
	return sum/arguments.length;
}

//*****************Расчет y-ов и x-ов***********************
getY1 = function(Uav) {
	return Uav;
}

getY2 = function(alpha, Uav, Trange, Tpace) {
	var y2 = Uav;
	for(var i = Trange.left; i <= Trange.right; i += Tpace) {
		y2 += (y2 * alpha * Tpace / 100);
	}
	return y2;
}

getY3 = function(Uav, Imin, Imax, Rav) {
	//Math.pow(10, -3) - т.к. мА
	return Uav + (Imax - Imin) * Math.pow(10, -3) * Rav;   
}

getY4 = function(deltaI, deltaT, Uav) {
	return deltaT + deltaI + Uav;
}

getX1 = function(T, Trange) {
	return (T - Trange.center) / Trange.shift;
}

getX2 = function(I, Irange) {
	return (I - Irange.center) / Irange.shift;
}
//*****************Расчет y-ов***********************

calculateVoltage = function(Umin, Umax, Imin, Imax, Rmin, Rmax, Tmin, Tmax, alpha, T, I) {
	//средние значения
	var Uav = getAverageValue(Umin, Umax);
	var Iav = getAverageValue(Imin, Imax);
	var Rav = getAverageValue(Rmin, Rmax);

	//диапазоны
	var Irange = getRange(Imin, Imax);
	var Trange = getRange(Tmin, Tmax);

	var y1 = getY1(Uav); 
	var y2 = getY2(alpha, Imin, Imax, Rav);
	var y3 = getY3(Uav, Imin, Imax, Rav);
	var y4 = getY4(y2 - Uav, y3 - Uav, Uav);

	var b0 = 1/4 * (y1 + y2 + y3 + y4);
	var b1 = 1/4 * (-y1 + y2 - y3 + y4);
	var b2 = 1/4 * (-y1 - y2 + y3 + y4);
	var b12 = 1/4 * (y1 - y2 - y3 + y4);

	var x1 = getX1(T, Trange);
	var x2 = getX2(I, Irange);



	var Ust = b0 + b1 * x1 + b2 * x2 + b12 * x1 * x2;
	alert("Real answer --- " + Ust);
	var delta = (Math.random() * ((Umax - Umin)/2)).toFixed(4);
	alert(delta);
	var index = Math.random();
	
	if(index > 0.5)
		Ust += delta;
	else
		Ust -= delta;

	return Ust;
} 


//*********************************************************************************************************************

$(function() {
	fillStabilitronSelector();
	
	var $stabilitronSelector = $('#stabilitron-selector');
	var index = seekByName($stabilitronSelector.val());
	
	//Выбор стабилитрона
	$stabilitronSelector.change(function() {
		index = seekByName($(this).val());
	});

	$('#calculate-uct').click(function() {
		var T = parseFloat($('#TemperatureVal').val());
		var I = parseFloat($('#CurrentVal').val());
		alert("Uст. = " + calculateVoltage(stabilitrons[index].Umin, stabilitrons[index].Umax, stabilitrons[index].Imin, 
										   stabilitrons[index].Imax, stabilitrons[index].Rmin, stabilitrons[index].Rmax, 
										   stabilitrons[index].Tmin, stabilitrons[index].Tmax, stabilitrons[index].alpha, 
										   T, I) + " В.");

	});
});