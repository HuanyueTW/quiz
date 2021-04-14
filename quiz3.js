var dataUrl = "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613"; 
var data = $.getJSON(dataUrl); 
data.done( function( msg ) { 
	for (var i =0; i<750; i++){
		console.log(data["responseJSON"]["result"]["results"][i]["﻿A_Name_Ch"]);
		$("body").append("<h2>" + data["responseJSON"]["result"]["results"][i]["﻿A_Name_Ch"] + "</h2>")
		$("body").append("<h3>" + data["responseJSON"]["result"]["results"][i]["A_Behavior"] + "</h3>")
		$("body").append("<img src=" + data["responseJSON"]["result"]["results"][i]["A_Pic02_URL"] + "\>")
	}
}); 
data.fail( function( msg ) { 
});