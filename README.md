# coder-js

Hola soy Christian Perez

Mi Javascript se basa en un cotizador de obra va en pase a mi proyecto web y a mi laburo 

0° Realize un menu donde el cliente pueda elegir distintas opciones 

1° Primero esta la contratacion donde el cliente puede elegir si quiere que nosotro manejemos la obra o que se algo 50/50

2° Segundo esta la opcion presupuesto que en ella tiene dos opciones donde puede elegir un lugar ya determinado y si no puede elegir los espacios a gusto

3° Tercero una breve infomacion de nuestra empresa para poder comunicarse

4° y por ultimo para poder cerrar el ciclo una salida del menu

En contratacion son dos opciones con una breve explicacion de cada una 

En presupuesto tiene dos parte
1° es pileta la cual te va haciendo una serie de pregunta sobre la medida que desea la pileta 
luego la misma te devuelve un precio y luego una cantidad de agua que llevaria la pileta

2° es casa tambien tiene dos opciones en la primera te da una un breve infomacion de lo que te ofrece 
y segundo ya es una serie de pregunta la cual te va ayudando a elegir la cantidad de espacio dandote al final un precio estimado a lo que te puede salir 

Para los menu uso un switch atravez de una funcion llamada menu

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

Para contratacion solo uso un switch con unos alert dando una breve explicacion

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

Para presupuesto en pileta hago una serie de preguntas prompt y parsefloat para que los valores puedea ser numero decimales
y luego hago un array para que me guarde los valores de las ecuaciones 

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

En casa primero te doy una opcion de predeterminado con un breve explicacion y luego en la otra opcion
para armar tu propio espacio realizada por una serie de prengunta. Aqui genere un map con todo los espacio para indetificar 
cada uno de ello y dale un valor para que luego les pueda tira un resultado al cliente

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

