'use strict';

function pageCtrl(id) {
	var data=responseData("text.txt","GET","");
	console.log("data="+data);
	document.getElementById("view").innerHTML=pageDetail(id,data);//показываем таблицу с данными
}