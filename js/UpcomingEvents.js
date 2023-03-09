const containerCards = document.getElementById(`contenedor-cards`)
const currentDate = dataCards.currentDate
let buscador = document.getElementById("buscador")

  
  function traerTarjeta(data) {
    let tarjeta = "";
  
    for (const event of data) {
        if (event.date <= currentDate) {
  
            tarjeta +=`<div class="card">
            <img
              src="${event.image}"
              class="card-img-top imagen-card"
              alt="museum"
            >
            <div class="card-body">
              <h3>${event.name}</h3>
              <p class="card-text">
               ${event.description}
        
              </p>
              <a href="./Details.html?id=${event._id}" class="btn btn-secondary">More Info</a>
              </div>
            </div>`
        }
    }
    return tarjeta;
  }
  
  // let tarjetaElement = traerTarjeta(dataCards.events);
  // containerCards.innerHTML = tarjetaElement;

  
//crear un array de categoria

const utilInfoData = dataCards.events.map((categoryData) => categoryData.category)


//quita los duplicados de array de categorias
const categorias = utilInfoData.filter(
  (item, index) => utilInfoData.indexOf(item) == index
);

const contenedorLabel = document.getElementById("contenedorLabel");

function agregaCheck(arrayCategorias){
  let inputCategoria = "";

  for (let categoria of arrayCategorias) {
         inputCategoria += ` 
           <input type="checkbox"  name="${categoria}" id="${categoria}" value="${categoria}">
         <label for="category">${categoria}</label>
  `;
}
return inputCategoria
}

let elementoCheckbox = agregaCheck(categorias)
contenedorLabel.innerHTML = elementoCheckbox


// filtro para el checkbox

let masData =[]



contenedorLabel.addEventListener('change', (e)=>{

 if (e.target.checked) {
  masData.push(e.target.value)
 }
  else{
   let indice= masData.indexOf(e.target.value)
    console.log(indice);
    if (indice !== -1){
      masData.splice(indice, 1)

    }
   }

   searchCards()
  //  const masInfoData = dataCards.events.filter((categoryData) =>masData.includes(categoryData.category))
  //  console.log(masData);
  //  console.log(masInfoData);
  //  containerCards.innerHTML = traerTarjeta(masInfoData);

})



//FILTRO ELEMENTOS PARA EL BUSCADOR 

let escuchador=""
let eventosFiltrados=[]
buscador.addEventListener('keyup', (e) =>{
       escuchador=e.target.value.toLowerCase()
       searchCards()

})


//cruze de datos

function searchCards(){
  eventosFiltrados = totalData.filter((event) => event.name.toLowerCase().includes(buscador.value.toLowerCase()) )

console.log(eventosFiltrados);


if (eventosFiltrados.length > 0){
  containerCards.innerHTML = traerTarjeta(eventosFiltrados);
  let buscadorControl=eventosFiltrados.filter(data => data.category.includes(masData.toString()))
  containerCards.innerHTML=traerTarjeta(buscadorControl)

console.log(buscadorControl);

    }else if (eventosFiltrados == 0){
      containerCards.innerHTML = elementoTarjetas;
      } 
    


}  

let masInfoData = totalData.filter((categoryData) =>masData.includes(categoryData.category))

searchCards()


