const containerCards = document.getElementById(`contenedor-cards`)
  const currentDate = dataCards.currentDate
  
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
  
  let tarjetaElement = traerTarjeta(dataCards.events);
  containerCards.innerHTML = tarjetaElement;
  
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


//datos para el checkbox

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
   const masInfoData = dataCards.events.filter((categoryData) =>masData.includes(categoryData.category))
   console.log(masData);
   console.log(masInfoData);
   containerCards.innerHTML = traerTarjeta(masInfoData);

})



//FILTRO ELEMENTOS PARA EL BUSCADOR 

let buscador = document.getElementById("buscador")

buscador.addEventListener('search', () => {
  let eventosFiltrados=[]
       eventosFiltrados = dataCards.events.filter((event) => event.name.toLowerCase().includes(buscador.value.toLowerCase()) )
    

     if (eventosFiltrados.length > 0) {
      containerCards.innerHTML = traerTarjeta(eventosFiltrados)

     }
     else{
      alert ("no se encuentra la info")
      containerCards.innerHTML=traerTarjeta(dataCards.events)
     }
})


