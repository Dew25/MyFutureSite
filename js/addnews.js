'use strict';

// var d = new Date();
// document.getElementById("date").innerHTML = Date();
var d=new Date();
document.getElementById("date").value= d.getDate();
function valid(){
	//alert('hello');
	var valid = true;
	var title = document.getElementById("title");
	var content = document.getElementById("content");
	var author = document.getElementById("author");
	var dt = document.getElementById("dt");
	if(title.value ==""){
		title.className+=" invalid";
		valid=false;
	}else{
		title.className="form-control";
	}
	if(content.value ==""){
		content.className+=" invalid";
		valid=false;
	}else{
		content.className="form-control";
	}
	if(author.value ==""){
		author.className+=" invalid";
		valid=false;
	}else{
		author.className="form-control";
	}
	if(dt.value ==""){
		dt.className+=" invalid";
		valid=false;
	}else{
		dt.className="form-control";
	}

	alert(valid?"Вы ввели все значения":"Вы неправильно ввели значения!");
	
	return valid;
}
