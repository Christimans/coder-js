// Boton para iniciar menu de card

let navegador = document.getElementById("cardmain")

navegador.addEventListener("click", menudecard)




// Funcion de bienvenida Header 

function menudecard() {
    let nombre = document.getElementById("validationnombre");
    let apellido = document.getElementById("validationapellido");
  
    header.innerHTML = `
     <h1>Bienvenido ${nombre.value} ${apellido.value}</h1>
    ` 
}
  
// Funcion de Card Main
 
  let main = document.getElementById("main")
  
  navegador.addEventListener("click", regreso)

  
  function regreso (){
    let volver = `<div id="menu" class="row">
    
     <div class="col-sm-4">
       
       <div class="card h-100" >
         <img src="imagen/contrato.png" class="card-img-top" alt="...">
         <div class="card-body">
           <h4 class="card-title">Contratacion</h4>
           <p class="card-text">Aqui te damo la opcion de elegir la forma en la que quiere que nosotro nos encargemos de tu obra</p>
         </div>
         <div class="card-footer">
           <button onclick="cardUno()"  id="contratar"  class="btn btn-danger" type="click">Contratos</button>
         </div>
       </div>
     </div>
   
     <div class="col-sm-4">
       <div class="card h-100">
         <img src="imagen/presupuesto-maestro-empresas.jpg" class="card-img-top" alt="...">
         <div class="card-body">
           <h4 class="card-title">Presupuesto</h4>
           <p class="card-text">Arma tu propio presupuesto atravez de nuestra web</p>
         </div>
         <div class="card-footer">
           <button onclick="general()" id="cotizar" type="click" class="btn btn-danger">Presupuestar</button>
         </div>
       </div>
     </div>
     <div class="col-sm-4">
       <div class="card h-100">
         <img src="imagen/contacto.png" class="card-img-top" alt="...">
         <div class="card-body">
           <h4 class="card-title">Contactos</h4>
           <p class="card-text">Contactate con nosotros si tenes dudas</p>
         </div>
         <div class="card-footer">
           <button onclick="contact()" id="nosotros" type="button" class="btn btn-dark">Contactanos</button>
         </div>
       </div>
     </div>
   </div>`
   main.innerHTML = volver
   }

// Funcion para la primera card de main llamada "CONTRATACION"

function cardUno() {
    
    let datos = `<h2> Elige el tipo de contratacion que quieres con nosotros </h2>
      <div class="row">
    <div class="col-sm-6">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">Con llave en mano</h4>
          <p class="card-text">Este contrato te ofrecera manejo de obra total, es decir:</p>
          <p class="card-text">- Incluye contratacion de material</p>
          <p class="card-text">- Incluye contenedores</p>
          <p class="card-text">- Incluye baño quimico (opcional)</p>
          <p class="card-text">- Incluye direccion tecnica</p>
          <button onclick="eleccion()" type="button" class="btn btn-outline-light">Contratar</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">Solo mano de obra</h4>
          <p class="card-text">Este contrato solo te brindara la mano de obra</p>
          <p class="card-text">- No incluye compra de materiales, ni fletes</p>
          <p class="card-text">- No incluye contratacion de contenedores</p>
          <p class="card-text">- No incluye contratacion de baño quimico</p>
          <button onclick="eleccion()" type="button" class="btn btn-outline-light">Contratar</button>
        </div>
      </div>
    </div>
  </div>
  <button onclick="regreso()"  type="button" class="btn btn-outline-light"> Volver a menu</button>`
    main.innerHTML = datos;
}

// Funcion para las opciones de la primera card "CONTRATACION"

// card uno "CON LLAVE EN MANO"

let llavemano = document.getElementById('llavemano')
let manoobra = document.getElementById('manoobra')


function eleccion (llavemano, manoobra) {
    let elecciones

     if (elecciones === llavemano){
    let contratacionuno = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </symbol>
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
  </svg>
    <div class="alert alert-success d-flex align-items-center row" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div class="row-sm-12">
        <h5> Gracias por contar con nosotros!!</h5>
        <h6> Eligio Llave en mano</h6>
        </div>
      </div>
      <button onclick="regreso()"  type="click" class="btn btn-outline-light">Aceptar </button>
      <button onclick="cardUno()"  type="click" class="btn btn-outline-light">Elegir otra opcion</button>`

    main.innerHTML = contratacionuno 
     }else if (elecciones === manoobra){
        let contrataciondos = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
        <div class="alert alert-success d-flex align-items-center row" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div class="row-sm-12">
            <h5> Gracias por contar con nosotros!!</h5>
            <h6> Eligio Mano de obra </h6>
            </div>
          </div>
          <button onclick="regreso()"  type="click" class="btn btn-outline-light">Aceptar </button>
          <button onclick="cardUno()"  type="click" class="btn btn-outline-light">Elegir otra opcion</button>`
          main.innerHTML = contrataciondos
     }
      
}

// Esta funcion manejara la segunda tarjeta llamada presupuesto en la que contiene dos opciones: pileta y casa
  
function general () {
  
    let opcion = `<h2> Elige que quieres cotizar </h2>
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Pileta</h4>
        <p class="card-text">Aqui elige tu dimesiones de la pileta a cotizar</p>
        <button onclick="pileta()" id="agua" type="button" class="btn btn-outline-light">Cotizar</button>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Casa</h4>
        <p class="card-text">Aqui elige tu espacio a cotizar</p>
        <button onclick="casa()" id="espacios" type="button" class="btn btn-outline-light">Cotizar</button>
      </div>
    </div>
  </div>
  </div> 
  <button onclick="regreso()"  type="button" class="btn btn-outline-light"> Volver a menu</button>`
  
  main.innerHTML = opcion
  
  }

// Funcion para la card de "PILETA"

  function pileta() {
  
    let datospileta = `<h2>LLena los datos que desea tu pileta</h2>
      <div class="mb-3">
      <label for="dimension1" class="form-label">Largo de la pileta</label>
      <input type="number" class="form-control" id="dimension1" placeholder="Escribe el largo">
    </div>
    <div class="mb-3">
      <label for="dimension2" class="form-label">Ancho de la pileta</label>
      <input type="number" class="form-control" id="dimension2" placeholder="Escribe el ancho">
    </div>
    <div class="mb-3">
    <label for="profundidad" class="form-label">Profundidad de la pileta</label>
    <input type="number" class="form-control" id="profundidad" placeholder="Escribe la profundidad">
  </div>
  <button id="resultadosmedidas" type="submit" class="btn btn-outline-light">Enviar</button>`;
  
    main.innerHTML = datospileta;

    let resultadosmedidas = document.getElementById("resultadosmedidas")
    if (resultadosmedidas){
        resultadosmedidas.addEventListener("click", dimensionpileta)
    }
    function dimensionpileta (){
        const MEDIDAS = []
  
        let profundidad = document.getElementById("profundidad");
        let dimension1 = document.getElementById("dimension1");
        let dimension2 = document.getElementById("dimension2");
        
        
        
        let m3 = profundidad.value * dimension1.value * dimension2.value  ;
        
        let insumo = 50000;
        
        let resultado = m3 * 30000 + insumo;
        MEDIDAS.push(resultado);
        
        let agua = m3 * 1000;
        MEDIDAS.push(agua);
        
        let dato = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
        <div class="alert alert-success d-flex align-items-center row" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div class="row-sm-12">
            <h5> Gracias por contar con nosotros!!</h5>
            <h6> Tu dimensiones son ${dimension1.value} de largo X ${dimension2.value} de ancho X ${profundidad.value} de profundidad</h6> 
            <h6> Tu pileta  tendra un caudal de ${MEDIDAS[1]} litros aproximadamente</h6>
            </div>
          </div>
          <button onclick="regreso()"  type="button" class="btn btn-outline-light">Aceptar</button>
          <button onclick="pileta()"  type="button" class="btn btn-outline-light">Volver a editar</button>`;
        console.log(dato) 
        
        main.innerHTML = dato
        }
    
  }

// Funcion para la card "CASA"

let espacie = [
    { lugar: "Habitacion", precio: 350000 },
    { lugar: "Baño", precio: 500000 },
    { lugar: "Cocina", precio: 400000 },
    { lugar: "Living", precio: 250000 },
    { lugar: "Quincho", precio: 1000000 },
    { lugar: "Cochera", precio: 200000 },
    { lugar: "Sala de juego", precio: 150000 },
  ];
  
  const habit = espacie.map((dato) => dato.precio);
  
  const hogar = espacie.map((resto) => resto.lugar);
  
  
  
  function casa() {
    let datocasa = ` <h2>Elige la opcion a cotizar</h2>
      <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Monoambiente</h4>
            <p class="card-text">El monoambiente solo contiene: - una habitacion - un baño - cocina</p>
            <button onclick="regreso()" type="button" class="btn btn-outline-light">Enviar</button>
          </div>
        </div>
      </div>
     
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
            <h4 class="card-title">Arma tu espacios</h4>
          <div class="mb-3">
            <label for="bedroom" class="form-label">Elige la cantidad de ${hogar[0]}</label>
            <input type="number" class="form-control" id="bedroom" placeholder="">
          </div>
      
          <div class="mb-3">
            <label for="bath" class="form-label">Elige la cantidad de ${hogar[1]}</label>
            <input type="number" class="form-control" id="bath" placeholder="">
          </div>
          <div class="mb-3">
            <label for="kitchen" class="form-label">Elige la cantidad de ${hogar[2]}</label>
            <input type="number" class="form-control" id="kitchen" placeholder="">
          </div>
          <div class="mb-3">
            <label for="livingroom" class="form-label">Elige la cantidad de ${hogar[3]}</label>
            <input type="number" class="form-control" id="livingroom" placeholder="">
          </div>
          <div class="mb-3">
            <label for="barbecue" class="form-label">Elige la cantidad de ${hogar[4]}</label>
            <input type="number" class="form-control" id="barbecue" placeholder="">
          </div>
          <div class="mb-3">
            <label for="garage" class="form-label">Elige la cantidad de ${hogar[5]}</label>
            <input type="number" class="form-control" id="garage" placeholder="">
          </div>
          <div class="mb-3">
            <label for="gameroom" class="form-label">Elige la cantidad de ${hogar[6]}</label>
            <input type="number" class="form-control" id="gameroom" placeholder="">
          </div>
      
          <button onclick="dimensioncasa()" type="button" class="btn btn-outline-light">Enviar</button>
        </div>
      </div>
    </div>
  </div>
  <button onclick="regreso()"  type="button" class="btn btn-outline-light">Volver al menu</button>
      `;
    main.innerHTML = datocasa
  }
  
  // funcion de calculos
  
function dimensioncasa (){
        let bedroom = document.getElementById("bedroom");
        let bath = document.getElementById("bath");
        let kitchen = document.getElementById("kitchen");
        let livingroom = document.getElementById("livingroom");
        let barbecue = document.getElementById("barbecue");
        let garage = document.getElementById("garage");
        let gameroom = document.getElementById("gameroom");
    

      
      const sector = [];
  
          let habitacion = bedroom.value;
          sector.push(habitacion);
    
          let baños = bath.value;
          sector.push(baños);
    
          let cocina = kitchen.value;
          sector.push(cocina);
    
          let living = livingroom.value;
          sector.push(living);
    
          let quincho = barbecue.value;
          sector.push(quincho);
    
          let cochera = garage.value;
          sector.push(cochera);
    
          let saladejuego = gameroom.value;
          sector.push(saladejuego);
    
          let cH = parseFloat(habitacion * habit[0]);
    
          let cB = baños * habit[1];
    
          let cC = cocina * habit[2];
    
          let cL = living * habit[3];
    
          let cQ = quincho * habit[4];
    
          let cCH = cochera * habit[5];
    
          let cS = saladejuego * habit[6];
    
          let total = cB + cH + cC + cCH + cL + cS + cQ;
          sector.push(total);
          console.log(total)
  
        let datos = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
        <div class="alert alert-success d-flex align-items-center row" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div class="row-sm-12">
            <h5> Gracias por contar con nosotros!!</h5>
            <h6> Tu Casa contiene:  ${sector[0]} habitaciones  ${sector[1]} baños ${sector[2]} cocina ${sector[3]} living  ${sector[4]} quincho  ${sector[5]} cochera  ${sector[6]} sala de juego.</h6>
            </div>
          </div>
          <button onclick="regreso()"  type="button" class="btn btn-outline-light">Aceptar</button>
          <button onclick="dimensioncasa()"  type="button" class="btn btn-outline-light">Volver a editar</button>`;
        
        main.innerHTML = datos

}

  // fin de la funcion

// Funcion para la card "CONTACTANOS"

function contact () {
    let contactos = `<h2> CONTACTANOS </h2>
    <div class="row">
  <div class="">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">REDES SOCIALES</h5>
        <div class="d-grid gap-2 col-4 mx-auto">
         <a href="https://www.gmail.com/" class="btn btn-warning" role="button" data-bs-toggle="button">Gmail</a>
         <a href="https://api.whatsapp.com/send?phone=" class="btn btn-success" role="button" data-bs-toggle="button">Whatsapp</a>
         <a href="https://www.instagram.com/" class="btn btn-danger" role="button" data-bs-toggle="button">Instagram</a>
         <a href="https://www.facebook.com/" class="btn btn-primary" role="button" data-bs-toggle="button">Facebook</a>
        </div>
        
      </div>
    </div>
  </div>
  </div>
  <button onclick="regreso()"  type="button" class="btn btn-outline-light">Volver al menu</button>`
    main.innerHTML = contactos
  }




