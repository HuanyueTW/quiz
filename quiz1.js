
 function addButton() { 
	var btn = document.createElement("BUTTON"); 
	btn.innerHTML = "Change this document"; 
	document.body.appendChild(btn); 
	btn.setAttribute("id","change")
	
	document.getElementById("change").addEventListener("click", function() { 
		var header = document.getElementById("title"); 
		header.innerHTML = "CSIE@CGU"; 
 
		var para = document.getElementById("text"); 
		para.innerHTML = "怎麼那麼棒！！.";  
	}); 
 } 