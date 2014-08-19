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

if (campo[1][1] == 0) 
{
	Explosion();
}
else
{
	Ganaste();
};