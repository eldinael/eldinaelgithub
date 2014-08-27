maximo = (10 , 20 , 30);

document.write(maximo,);

function mostrar (pos)
{
	document.write(pos.coords.latitude + "," + pos.coords.longitude);
}
navigator.geolocation.getCurrentPosition( mostrar );
