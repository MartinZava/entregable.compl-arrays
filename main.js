
// Constructor para crear objetos, en este caso sintetizadores (instr. musical electronico),
// y funcion para mostrar detalles del objeto
class Sintetizador {
    constructor (marca ,modelo, polifonia, precio){
        this.marca = marca
        this.modelo = modelo
        this.polifonia = polifonia
        this.precio = parseFloat(precio)
    }
    mostrarSinte(){
        return this.marca+ " " +this.modelo+ ", es " +this.polifonia+ " y su valor es de USD" +this.precio
    }
}

// Array y objetos pusheados
const sintetizadores = [];
let sinte1 = new Sintetizador("Korg", "Ms-20", "Monofonico", 550)
let sinte2 = new Sintetizador("Roland", "Juno 106", "Polifonico", 2500)
let sinte3 = new Sintetizador("SEQUENTIAL", "Prophet 5", "Polifonico", 3000)
let sinte4 = new Sintetizador("TE", "OP-1", "Polifonico", 1200)
let sinte5 = new Sintetizador("Moog", "Minimoog", "Monofonica", 5000)

sintetizadores.push(sinte1)
sintetizadores.push(sinte2)
sintetizadores.push(sinte3)
sintetizadores.push(sinte4)
sintetizadores.push(sinte5)


// Peticion al usuario que ingrese el sinte a eleccion o que termine el ciclo con FIN

    let info = prompt("Ingrese el nro de instrumento para saber sus caracteristicas:\n\n1. Ms-20 \n2. Juno 106 \n3. Prophet 5 \n4. OP-1 \n5. Minimoog\n\nTipee Fin para salir.")
    

    do { 
    if(info == "fin" || info == "Fin" || info == "FIN"){
        alert("Gracias por utilizar nuetro servicio!")
        
    }
    else{
        info = prompt("Ingrese el nro de instrumento para saber sus caracteristicas:\n\n1. Ms-20 \n2. Juno 106 \n3. Prophet 5 \n4. OP-1 \n5. Minimoog\n\nTipee Fin para salir.")
        switch (info) {
            case "1":
                alert(sinte1.mostrarSinte())
                break;
            case "2":
                alert(sinte2.mostrarSinte())
                break;
            case "3":
                alert(sinte3.mostrarSinte())
                break;
            case "4":
                alert(sinte4.mostrarSinte())
                break;
            case "5":
                alert(sinte5.mostrarSinte())
                break;
            default:
                alert("No se a seleccionado un instrumento")
                break;
        }
    }
    }while (info != "fin" && info != "Fin" && info != "FIN")
