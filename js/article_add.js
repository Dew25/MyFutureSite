"use strict";

//вставляем дату в input
var d = new Date();
document.getElementById('date-now').value=d.getDate()+'.'+d.getMonth()+1+'.'+d.getFullYear();
// Проба поиска элементов
var divs=document.getElementsByTagName('div');
document.getElementById('count').innerHTML="В документе "+divs.length+" тегов \"div\"";
var n=0;
for (var i = 0; i < divs.length; i++) {
	if(divs[i].hasAttribute('class')) n++;
}
document.getElementById('countAttr').innerHTML="Из них имеют класс "+n;

//массив значений
var gender=new Array("мужчина","женщина","другой");
//создаем элемент и в цикле добавляем опции
var sel=document.getElementById('gender');
for (var i = 0; i <= gender.length; i++) {
	 if(0==i)sel.options[i]=new Option('','',true,false);
	sel.options[i]=new Option(gender[i-1],i-1,false,false);
}

//Проверка элементов формы на правильность заполнения
function valid(){
	//alert('hello');
	
	var valid = true;
	var title = document.getElementById("title");
	var article = document.getElementById("article");
	var author = document.getElementById("author");
	var dt = document.getElementById("date-now");
	var errorArticle=document.getElementById("error-article");
	var errorTitle=document.getElementById("error-title");
	var errorAuthor=document.getElementById("error-author");
	if(title.value ==""){
		title.className+=" invalid";
		errorTitle.className="error-on";
		valid=false;
	}else{
		title.className="form-control";
		errorTitle.className="error";
	}
	if(article.value ==""){
		article.className+=" invalid";
		errorArticle.className="error-on";
		valid=false;
	}else{
		article.className="form-control";
		errorArticle.className="error";
	}
	if(author.value ==""){
		author.className+=" invalid";
		errorAuthor.className="error-on";
		valid=false;
	}else{
		author.className="form-control";
		errorAuthor.className="error";
	}
	if(dt.value ==""){
		dt.className+=" invalid";
		valid=false;
	}else{
		dt.className="form-control";
	}

	//alert(valid?"Вы ввели все значения":"Вы неправильно ввели значения!");
	
	return valid;
}