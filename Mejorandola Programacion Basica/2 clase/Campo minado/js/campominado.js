function Explosion ()
{
	alert("BOOOOOOOOM!");
	document.write("<h1>Perdiste Caiste en Campo Minado! :(</h1>");
}

function Ganaste () 
{
	alert("Has Ganado!");
	document.write("<h1>Ganaste! :)</h1>");
}


var campo = [ [ 0 , 1 , 0 ] ,
			  [ 0 , 1 , 1 ] ,
			  [ 1 , 1 , 1 ] ];

var opciones = [<h1>"Cesped"</h1>, "Bomba"];

var x, y;

alert("Estas en un Campo Minado\n" +
	  "Elige una Posicion entre 0 y 2 para X y para Y");
x = prompt("Escoge una posicion en X!");
y = prompt("Escoge una posicion en Y!");

var posicion = campo[x][y];

document.write(opciones[posicion]);



//if (campo[1][1] == 0) 
//{
//	Explosion();
//}
//else
//{
//	Ganaste();
//};