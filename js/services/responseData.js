'use strict';

function responseData(myFoo,url, method,requestData) {

	var xhr = new XMLHttpRequest();//Объект для обращения к внешним ресурсам
	var self=this;
	xhr.open(method, url, true);//метод, ресурс, асинхронная/синхронная связь
	xhr.send(requestData); //посылаем запрос к указанному ресурсу
	 xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
		if(xhr.status != 200){
			throw("Сервер вернул ошибку: "+xhr.status);
		}else{
			//xhr.responseText - ответ на запрос содержится здесь
		    console.log("responseText="+xhr.responseText);
		 	myFoo(JSON.parse(xhr.responseText));//записуем содержимое файла в data
		}
	}
}