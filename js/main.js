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
      <a href="./Details.html" class="btn btn-secondary">More Info</a>
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


//datos para el checkbox

conteLabel.addEventListener('click', (e)=>{

  const masInfoData = dataCards.events.filter((categoryData) => categoryData.category == e.target.value)
  containerCards.innerHTML = crearTarjetas(masInfoData);

  
  console.log(e.target.value);
})




//crear un evento que cada ves que se modifique el input de texto se cree una array que coincida el value del
//input de texto con el .nombre del array
// y despues llamar a la funcion crear cards pero en ves de pasarle el data event sino pasarle el array filtrado.



//FILTRO ELEMENTOS PARA EL BUSCADOR 

let buscador = document.getElementById("buscar")

buscador.addEventListener("change", () => {
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
