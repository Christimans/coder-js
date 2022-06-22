let nombre = prompt ("¿Cual es tu nombre?")
alert ("Bienvenido " + nombre)
if(nombre = "Bienvenido"){
    menu()

}else{
    alert ("no se eligio ninguna opcion")
}

function menu(){
    let servicios = prompt ("Elige una opcion: \n 1. Contratacion \n 2. Presupuesto \n 3.Contacto \n 4. Salir")

    switch (servicios){
        case "1" :
            contratacion()
            menu()
            break
        case "2" :
            presupuesto()
            menu()
            break
        case "3" :
            alert(
                "Contactanos al: 03534-1568235 \n  Email: empresa@gmail.com" 
            )
            menu()
            break
        case "4":
            alert("Gracias por usar nuestro servicios")
            break
        default:
            alert("Opcion no valida")
            menu()
            break
    }
}

function contratacion(){
    let opcion = prompt("Opciones: \n 1. llave en mano \n 2. Solo mano de obra")
    switch(opcion){
        case "1":
            alert ("Esta opcion incluye todo los servicios")
            menu()
            break
        case "2":
            alert ("Esta opcion solo incluye mano de obra. Él resto de los servicios puede ser opcional")
            menu()
            break;
        default:
            alert("saa")
            menu()
            break
}
}

function presupuesto() {
    
    let servicio = prompt("Opciones: \n 1. Basico \n 2. Semicompleto \n 3. Completo")
    
    let sbasico = 5000
    
    if(servicio == "Basico"){
        
        alert("Esta opcion solo incluye manejo de obra")
        
        let sb = confirm ("desea aceptar")
        //sb = servicio basico
       
        if(sb = true){
             alert("Su Monto por este servicio es: " + sbasico)
        }else{
            presupuesto()
        }
       
    }else if (servicio == "Semicompleto"){

        

        alert("Esta opcion contiene: \n 1.contratacion de baño quimico \n 2.contratacion de conteiner \n mas el manejo de obra")
        semicompleto()
        alert("Tu monto por esta cantidad es de: $" + resultado)
        
        let cs = confirm ("Desea aceptar")
        //cs = contrato semicompleto
  
        if(cs = true){      
            alert("Gracias por tu contratacion")
        }else{
            presupuesto()
        }

    }else if (servicio == "Completo"){
        
        alert("Esta opcion es llave en mano nosotros nos encargamos de la contrataciones")
        
        let sc = confirm ("Desea confirmar")
        //sc = servicio completo
        
        if(sc = true){
            alert("Se le informara atravez de un presuspuesto todo lo solicitado")
        }else{
            presupuesto()
        }
        
    }else{
        alert("No a elegido ninguna opcion")
 }
}

function semicompleto(){
    let cantidad = parseInt(prompt("Elige la cantidad"))
    let baño = 2000
    let conteiner = 3500
    let ganancias = 1.5

    for (let i = 1 ; i <= cantidad; i++) {
      resultado = ((baño + conteiner) * ganancias ) * cantidad
    }
    return resultado 
}