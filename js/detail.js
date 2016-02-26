'use strict';
var index=2;
var select=document.getElementById('sel');
var text=document.getElementById('add').value;

function addOpt(){
	var select=document.getElementById('sel');
var text=document.getElementById('add');
	select.options[select.options.length]=new Option(text.value,select.options.length);
	text.value="";
}
function delOpt() {
	var select=document.getElementById('sel');
	var text=document.getElementById('add').value;
	select.options[select.selectedIndex]=null;
}