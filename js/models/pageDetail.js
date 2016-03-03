'use strict';

function pageDetail(id, data) {
	var strTable="<table class='table1'>";
		strTable+="<tr class='trTable'>";
    	strTable+="<th class='tdId'>ID";
    	strTable+="</th><th class='tdName'> Имя";
    	strTable+="</th><th class='tdFamily'> Фамилия ";
    	strTable+="</th><th class='tdAge'>Возраст";
    	strTable+="<tr class='trTable' >";
    for (var i = 0; i < data.person.length; i++) {
    	if(data.person[i].id==id){
	    	strTable+="<td class='tdId'>id:"+data.person[i].id;
	    	strTable+="</td><td class='tdName'>"+data.person[i].name;
	    	strTable+="</td><td class='tdFamily'>"+data.person[i].family;
	    	strTable+="</td><td class='tdFamily'>"+data.person[i].age;
    	}
    }
    strTable+="</td><tr><tr><td colspan=3></td><td class='trTable' onclick=pageCtrl()>Go to back</td></tr></table>";
    return strTable;
}