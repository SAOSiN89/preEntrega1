// Creo la clase celulares con un constructor
class Celular{
    constructor(modelo,precio,stock, descuento){
        this.modelo = modelo;
        this.precio = Number(precio);
        this.stock = Number(stock);
        this.descuento = Number(descuento);
    }
}

// crea un array para agregar los modelos de celulares 
const celulares = []
celulares.push(new Celular("iphone", 110000, 5, 10));
celulares.push(new Celular("xiaomi", 81000, 6, 20));
celulares.push(new Celular("samsung",  122000, 7, 30));
celulares.push(new Celular("motorola", 53000, 10, 30));


function precioConDescuento(precio,descuento) {
    //funcion para calcular el descuento
    return precio - ((precio * descuento) / 100)
}

// Una funcion llave para buscar el equipo
function buscarCel(cel, equipo){
    return cel.find(c => c.modelo === equipo.toLowerCase());
}


// While para crear un bucle infinito hasta que el usuario ingrese ESC
for(let i = 0; i < 3; i++ ){
    let busqueda = buscarCel(celulares, prompt("Ingresa el modelo de celular que desea"))
    if (busqueda != undefined ){
        alert("Tenemos en stock "+ busqueda.stock + " Celulares de la marca " +  busqueda.modelo +
             " con un precio de : $" + precioConDescuento(busqueda.precio, busqueda.descuento));
        busqueda = prompt("Ingrese otro modelo o 'ESC' para salir.");
    }else{
        alert("No contamos o no existe ese modelo, vuelva a intentarlo")
        alert("Le quedan " + (2-i) + " Intentos")
               
    }  
}


