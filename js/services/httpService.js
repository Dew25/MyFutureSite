'use strict';

//Запрос на внешний ресурс с предоставлением обещания (promise)
// этот код выполняте роль сервиса, который загружает сторонний ресурс
// с адресом url
function httpGet(url) {
	// возвращает обещание, где resolve содержит полученные данные,
	// а rehect содержит ошибку, если денные не получены.
  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (xhr.status == 200) {
      	//помещаем в resolve распарсенный объект из полученных json данных
        resolve(JSON.parse(xhr.responseText));
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}