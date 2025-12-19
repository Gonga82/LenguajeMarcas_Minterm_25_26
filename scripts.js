
// Script 1: Mostra y oculta las imágenes de los bocadillo y del menú del día
document.addEventListener("DOMContentLoaded", function() {
    // Botón 1
    // Selecciona el botón con id "mostrar-imagenes-1" y la tabla con id "tabla-imagenes-1"
    const boton1 = document.getElementById("mostrar-imagenes-1");
    const tabla1 = document.getElementById("tabla-imagenes-1");
    // Añade la acción que hacer clic en el botón muestre las imágenes y las ocuñlte al volver a hacer clic
    boton1.addEventListener("click", function() {
        if (tabla1.style.display === "none") {
            tabla1.style.display = "table";
            boton1.textContent = "Ocultar imágenes desayuno";
        } else {
            tabla1.style.display = "none";
            boton1.textContent = "Mostrar imágenes desayuno";
        }
    });

    // Botón 2
    const boton2 = document.getElementById("mostrar-imagenes-2");
    const tabla2 = document.getElementById("tabla-imagenes-2");

    boton2.addEventListener("click", function() {
        if (tabla2.style.display === "none") {
            tabla2.style.display = "table";
            boton2.textContent = "Ocultar imágenes menú del día";
        } else {
            tabla2.style.display = "none";
            boton2.textContent = "Mostrar imágenes menú del día";
        }
    });
});

// Script 2: Los títulos H2 cambian de tamaño y color al pasar el ratón
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los H2
    const titulos = document.querySelectorAll("h2");
    titulos.forEach(function(titulo) {
        // Guarda el tamaño y color original
        const tamañoOriginal = window.getComputedStyle(titulo).fontSize;
        const colorOriginal = window.getComputedStyle(titulo).color;
        // Al pasar el ratón hace crecer el tamaño y cambia el color
        titulo.addEventListener("mouseover", function() {
            titulo.style.fontSize = "calc(" + tamañoOriginal + " * 2)"; 
            titulo.style.color = "#AA3939";
        });
        // Al quitar el ratón vuelve al tamaño y color original
        titulo.addEventListener("mouseout", function() {
            titulo.style.fontSize = tamañoOriginal; 
            titulo.style.color = colorOriginal;    
        });
    });
});
