//alert: Funcion
	//(): parametros de la funcion
	//"": cadenas de texto
	var pesoEnMartes; //CamelCase
	var peso;	
	alert("¿Quieres saber tu peso en martes?");
	peso = prompt("cual es tu peso en KG");
	peso = parseInt(peso);
	pesoEnMartes = (peso/9.81)*3.711;
	alert("tu peso en martes es " + pesoEnMartes + " KG");
	
