const containerCards = document.getElementById(`container-cards`)
const currentDate = dataCards.currentDate

function traerTarjeta(data) {
  let tarjeta = "";

  for (const event of data) {
      if (event.date > currentDate) {

          tarjeta +=`<div class="card">
          <img
            src="${event.image}"
            class="card-img-top imagen-card"
            alt="museum"
          >
          <div class="card-body">
            <h3>${event.category}</h3>
            <p class="card-text">
             ${event.description}
      
            </p>
            <a href="./Details.html"  class="btn btn-secondary">More Info</a>
            </div>
          </div>`
      }
  }
  return tarjeta;
}

let tarjetaElement = traerTarjeta(dataCards.events);

containerCards.innerHTML = tarjetaElement;



//crear un array de categoria
const utilInfoData = Array.from(
  dataCards.events.map((categoryData) => {
    return categoryData.category;
  })
  
);


//quita los duplicados de array de categorias
const categorias = utilInfoData.filter(
  (item, index) => utilInfoData.indexOf(item) == index
);

const contLabel = document.getElementById("contLabel");

function agregaCheck(arrayCategorias){
  let inputCategoria = "";

  for (let categoria of arrayCategorias) {
         inputCategoria += ` 
           <input type="checkbox" name="${categoria}" id="${categoria}" value="${categoria}">
         <label for="category">${categoria}</label>
  `;
}
return inputCategoria
}

let elementoCheckbox = agregaCheck(categorias)
contLabel.innerHTML = elementoCheckbox


//FILTRO ELEMENTOS PARA EL BUSCADOR 

let buscador = document.getElementById("buscadorr")

buscador.addEventListener("change", () => {
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
