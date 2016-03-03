'use strict';

(function (){
	var xhr = new XMLHttpRequest();//Объект для обращения к внешним ресурсам
	xhr.onload = function() {
		//xhr.responseText - ответ на запрос содержится здесь
	    console.log(xhr.responseText);
	    var data=JSON.parse(xhr.responseText);//записуем содержимое файла в data
	    document.getElementById("view").innerHTML=pageGaneral(data);//показываем таблицу с данными
	};
	xhr.open("GET", "text.txt", true);//метод, ресурс, асинхронная/синхронная связь
	xhr.send(); //посылаем запрос к указанному ресурсу
})();