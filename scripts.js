alert("Bienvenido a mi Pagina Web con JavaScript")

var nombre = ""
var apellido = ""
var anioDeNac = 0

nombre = prompt("Ingrese su nombre")
apellido = prompt("Ingrese su apellido")

var anioDeNac = prompt("Ingrese su anio de nacimiento (formato: YYYY-MM-DD)");



window.onload = function() {
    document.querySelector("#nombre").textContent = nombre;
    document.querySelector("#apellido").textContent = apellido;

    function calcularDias(anioDeNac) {
    
        var fecha = new Date(anioDeNac);
        
        const hoy = new Date();
        
        var diferencia = hoy.getTime() - fecha.getTime();
        
        var diferenciaEnDias = Math.floor(diferencia / (1000 * 3600 * 24));
        
        return diferenciaEnDias;
    }
    

    document.querySelector("#dias").textContent = calcularDias(anioDeNac);
}