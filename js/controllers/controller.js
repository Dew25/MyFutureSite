'use strict';

// -------------- CONTROLLER --------------
//
//  Запускается пользователем из view (нажатием на элемент с собитием onClick())
//
//  Сервис httpGet(param).then(...) предоставляет обещание (promise), которое выполнится, когда
//  придут данные из удаленного источника.
//
function pageCtrl(id) {
    httpGet("text.txt")
  .then(function(result){
    console.log("id= "+id+"dataFromPromise="+result);
//  Если параметр id неопределен, то контроллер вызывает функцию-модель pageGeneral(data)
//  иначе вызывает функцию-модель pageDetail(id,data)
        if (id===undefined) {
            document.getElementById("view").innerHTML=pageGaneral(result);
        }else{
            document.getElementById("view").innerHTML=pageDetail(id,result);
        }
    },
    error => alert(`Rejected: ${error}`)
  );
}