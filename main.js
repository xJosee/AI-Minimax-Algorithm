// Creamos un array vacio
var ElementosClick = new Array();
// Capturamos el click y lo pasamos a una funcion
document.onclick = captura_click;
	
function captura_click(e) {
    e.target.innerHTML = "X";
	console.log(e.target);	
}