'use strict';
//функция создания таблицы с данными data
function pageGaneral (data) {
	var strTable="<table class='table1'>";
		strTable+="<tr class='trTable'>";
    	strTable+="<th class='tdId'>ID";
    	strTable+="</th><th class='tdName'> Имя";
    	strTable+="</th><th class='tdFamily'> Фамилия ";
    	strTable+="</th><th class='tdAge'>Возраст";
    for (var i = 0; i < data.person.length; i++) {
    	strTable+="<tr class='trTable'  onclick=pageCtrl('"+data.person[i].id+"')>";
    	strTable+="<td class='tdId'>"+(i+1)+". ";
    	strTable+="</td><td class='tdName'>"+data.person[i].name;
    	strTable+="</td><td class='tdFamily'>"+data.person[i].family;
    	
    	strTable+="</td><tr>"
    }
    strTable+="</table>";
    return strTable;
}