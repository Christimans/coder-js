let Bienvenido = document.getElementById("bienvenido")

let nombre = prompt ("¿Cual es tu nombre?")
Bienvenido.innerText = `Bienvenido ${nombre}`
if(nombre = "Bienvenido"){


}else{
    alert ("no se eligio ninguna opcion")
}
console.log(Bienvenido.innerText)

let navegador = document.getElementById("menu")
contratacion()
presupuesto()

let presu = document.getElementById("presu")



let navPrincipal = `<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne ">
    Contratacion
  </button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <strong >${contrata} </strong> 
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwo">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo ">
    Presupuesto
  </button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <strong>${dato}</strong>
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingThree">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Contacto
  </button>
</h2>
<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <strong><p>Contactanos al +54 3547 9642</p>
    <p>email: aswefewq@hotmail.com</p></strong> 
  </div>
</div>
</div> `

navegador.innerHTML = navPrincipal 

console.log(navegador.innerHTML)





function contratacion(){
    let opcion = prompt("Opciones: \n 1. llave en mano \n 2. Solo mano de obra")

    if (opcion == "1"){
        contrata = "ELIGIO LLAVE EN MANO: Esta opcion incluye todo los servicios"
    }else if (opcion == "2") {
        contrata = "ELIGIO SOLO MANO DE OBRA: Esta opcion solo incluye mano de obra. Él resto de los servicios puede ser opcional"
    }else {
        contrata = "no selecionaste ninguna"
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
            
            dato = `Tu pileta tiene un monto de $${MEDIDAS[0]} y tendra un caudal de ${MEDIDAS[1]} litros`
            
            console.log(MEDIDAS)
    
        }else if (espacio == "2"){
            
            let casa = prompt("elige el modelo \n 1. monoambiente \n 2. Indica cuanto ambiente quieres")
            
            if (casa == "1"){
                
                dato = "El monoambiente solo contiene una habitacion, un baño y cocina"

            }else if(casa == "2"){

                const sector =  []

                const espacio = [
                    {lugar: "Habitacion", precio: 350000},
                    {lugar: "Baño", precio: 500000},
                    {lugar: "Cocina", precio: 400000},
                    {lugar: "Living", precio: 250000},
                    {lugar: "Quincho", precio: 1000000},
                    {lugar: "Cochera", precio: 200000},
                    {lugar: "Sala de juego", precio: 150000},
                ]

                const habit = espacio.map (dato => dato.precio);

                const hogar = espacio.map (resto => resto.lugar)
        

                function calculos (){
                    
                let habitacion = parseInt(prompt(`Indique cuantas  ${hogar[0]}: `))
                sector.push(habitacion)

                let baños = parseInt(prompt(`Indique cuantas  ${hogar[1]}: `))
                sector.push(baños)
               
                let cocina = parseInt(prompt(`Indique cuantas  ${hogar[2]}: `))
                sector.push(cocina)
               
                let living = parseInt(prompt(`Indique cuantas  ${hogar[3]}: `))
                sector.push(living)
               
                let quincho = parseInt(prompt(`Indique cuantas  ${hogar[4]}: `))
                sector.push(quincho)
               
                let cochera = parseInt(prompt(`Indique cuantas  ${hogar[5]}: `))
                sector.push(cochera)
              
                let saladejuego = parseInt(prompt(`Indique cuantas  ${hogar[6]}: `))
                sector.push(saladejuego)
                               

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

                alert(`Usted indico $${sector[7]} `)

                dato = `Tu Casa tiene un monto de $${sector[7]} la que contiene:  ${sector[0]} habitaciones  ${sector[1]} baños ${sector[2]} cocina ${sector[3]} living  ${sector[4]} quincho  ${sector[5]} cochera  ${sector[6]} sala de juego. `

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


