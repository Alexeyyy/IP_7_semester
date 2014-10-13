//Предварительно заполняет selector стабилитронов
fillStabilitronSelector = function() {
	var $stabilitronSelector = $('#stabilitron-selector');
	for(var i = 0; i < stabilitrons.length; i++) {
		$stabilitronSelector.append('<option>' + stabilitrons[i].name + '</option>');		
	}
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
