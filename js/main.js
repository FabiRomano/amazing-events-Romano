const containerCards = document.getElementById(`cont-cards`);


function crearTarjetas(arrayDatos) {
  let tarjetas = "";
  for (const event of arrayDatos) {
    tarjetas += `<div class="card">
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
    </div>`;
  }
  return tarjetas;
}

let elementoTarjetas = crearTarjetas(dataCards.events);
containerCards.innerHTML = elementoTarjetas;


//crear un array de categoria
const utilInfoData = dataCards.events.map((categoryData) => categoryData.category)


//quita los duplicados de array de categorias
const categorias = utilInfoData.filter(
  (item, index) => utilInfoData.indexOf(item) == index
);

const conteLabel = document.getElementById("conteLabel");

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
conteLabel.innerHTML = elementoCheckbox

// filtro para el checkbox

let masData =[]
conteLabel.addEventListener('change', (e)=>{
 const masInfoData = dataCards.events.filter((categoryData) =>masData.includes(categoryData.category))
console.log(masData);

 if(e.target.checked) {
      masData.push(e.target.value)
      containerCards.innerHTML = crearTarjetas(masInfoData);
 }

  else{
      let indice= masData.indexOf(e.target.value)
        console.log(indice);
       if (indice !== -1){
          masData.splice(indice, 1)

    }
   }
})


//FILTRO ELEMENTOS PARA EL BUSCADOR 

let buscador = document.getElementById("buscar")

buscador.addEventListener('search', () =>{
  let eventosFiltrados=[]
       eventosFiltrados = dataCards.events.filter((event) => event.name.toLowerCase().includes(buscador.value.toLowerCase()) )
    
     if (eventosFiltrados.length > 0) {
      containerCards.innerHTML = crearTarjetas(eventosFiltrados)

     }
     else{
      alert ("no se encuentra la info")
      containerCards.innerHTML=crearTarjetas(dataCards.events)
     }
})
