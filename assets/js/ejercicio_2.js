
// Pido la edad del usuario
let edad = parseInt(prompt("¿Cuál es tu edad?:"));

// Verificar si el usuario es mayor de edad
if(edad >= 18){
    //obtener datos del usuario
    let nombre = prompt("Ingresa tu nombre:");
    let apellido = prompt("Ingresa tu apellido:");
    let carrera = prompt("Ingresa tu carrera:");

    //obtener notas de HTML
    let htmlNota1 = parseFloat(prompt("Ingresa tu nota 1 [HTML]:"));
    let htmlNota2 = parseFloat(prompt("Ingresa tu nota 2 [HTML]:"));
    let htmlNota3 = parseFloat(prompt("Ingresa tu nota 3 [HTML]:"));

    //obtener notas de CSS
    let cssNota1 = parseFloat(prompt("Ingresa tu nota 1 [CSS]:"));
    let cssNota2 = parseFloat(prompt("Ingresa tu nota 2 [CSS]:"));
    let cssNota3 = parseFloat(prompt("Ingresa tu nota 3 [CSS]:"));
    
    //obtener notas de JS (solo 2 notas, queda pendiente la 3ra)
    let jsNota1 = parseFloat(prompt("Ingresa tu nota 1 [JavaScript]:"));
    let jsNota2 = parseFloat(prompt("Ingresa tu nota 2 [JavaScript]:"));
 
    //mostrar los datos personales en la pagina index.html
    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("apellido").innerHTML = apellido;
    document.getElementById("carrera").innerHTML = carrera;
   
    //mostrar notas de HTML personales en la pagina index.html
    document.getElementById("htmlNota1").innerHTML = htmlNota1;
    document.getElementById("htmlNota2").innerHTML = htmlNota2;
    document.getElementById("htmlNota3").innerHTML = htmlNota3;

    //mostrar notas de CSS personales en la pagina index.html
    document.getElementById("cssNota1").innerHTML = cssNota1;
    document.getElementById("cssNota2").innerHTML = cssNota2;
    document.getElementById("cssNota3").innerHTML = cssNota3;
    
    //mostrar notas de JS personales en la pagina index.html
    document.getElementById("jsNota1").innerHTML = jsNota1;
    document.getElementById("jsNota2").innerHTML = jsNota2;

    //promedio HTML
    let aprobacionHtml = parseFloat((htmlNota1 + htmlNota2 + htmlNota3)/3);

    //promedio CSS
    let aprobacionCss = parseFloat((cssNota1 + cssNota2 + cssNota3)/3);

    //aprobacion JS
    let jsNota3 = parseFloat(12 - jsNota1 - jsNota2);

    //mostrar nota final de JS
    document.getElementById("notaJsRestante").innerHTML = jsNota3;

    //mostrar promedios
    document.getElementById("aprobacionHtml").innerHTML = aprobacionHtml;
    document.getElementById("aprobacionCss").innerHTML = aprobacionCss;

} else {
    alert("No puedes ingresar a la página: CHAO")
}

