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
    

    let espacio = prompt("Opcion \n 1. Pileta \n 2. Casa") 

    const MEDIDAS = []

    if (espacio == "1"){

            let altura = parseFloat(prompt("Que profundida?"))
    
            let largo = parseFloat(prompt("Que largo?"))
    
            let ancho = parseFloat(prompt("Que ancho?"))
    
            let m3 = altura * largo * ancho
            
            let insumo = 50000
            
            let resultado = m3 * 30000 + insumo
            MEDIDAS.push(resultado)

            let agua = m3 * 1000
            MEDIDAS.push(agua)
  
            console.log(MEDIDAS)
            alert("$" + resultado)
            alert("Tu pileta tiene una capacidad de : " + agua + " litros")
            
    
        }else if (espacio == "2"){
            
            let casa = prompt("elige el modelo \n 1. monoambiente \n 2. Indica cuanto ambiente quieres")
            
            if (casa == "1"){
                
                alert("El monoambiente solo contiene una habitacion, un baño y cocina")


            }else if(casa == "2"){

                const sector =  []

                const espacio = [
                    {lugar: "Habitacion", precio: 35000},
                    {lugar: "Baño", precio: 50000},
                    {lugar: "Cocina", precio: 40000},
                    {lugar: "Living", precio: 25000},
                    {lugar: "Quincho", precio: 100000},
                    {lugar: "Cochera", precio: 20000},
                    {lugar: "Sala de juego", precio: 15000},
                ]

                const habit = espacio.map (dato => dato.precio);

                const hogar = espacio.map (resto => resto.lugar)
        

                function calculos (){
                    
                let habitacion = parseInt(prompt(`Indique cuantas  ${hogar[0]}: `))

                let baños = parseInt(prompt(`Indique cuantas  ${hogar[1]}: `))
               
                let cocina = parseInt(prompt(`Indique cuantas  ${hogar[2]}: `))
               
                let living = parseInt(prompt(`Indique cuantas  ${hogar[3]}: `))
               
                let quincho = parseInt(prompt(`Indique cuantas  ${hogar[4]}: `))
               
                let cochera = parseInt(prompt(`Indique cuantas  ${hogar[5]}: `))
              
                let saladejuego = parseInt(prompt(`Indique cuantas  ${hogar[6]}: `))
                
                // let resto = prompt("Indica que otros espacio quiere ")
                

                let cH = habitacion * habit[0]
                
                let cB = baños * habit[1]

                let cC = cocina * habit[2]

                let cL = living * habit[3]
               
                let cQ = quincho * habit[4]
                
                let cCH = cochera * habit[5]
               
                let cS = saladejuego * habit[6]
               


                let total = cB + cH + cC + cCH + cL + cS + cQ
                sector.push(total)
                }
       
                



                console.log(sector)
                calculos()

                alert(`Usted indico $${sector} `)

                let cp = confirm ("Desea aceptar")
                //cs = casa personalizada
          
                if(cp = true){      
                    alert("Gracias, a la brevedad nos estaremos comunicando con ustedes")
                }else{
                    alert("No se a confirmado la indicaciones")      
            }

        }else{
            alert("No completo los espacio requerido")
        }
       
    }else{
        alert("No eligio ninguna opcion")
    }
    
}

