const containerCards = document.getElementById(`cont-cards`);
const conteLabel = document.getElementById("conteLabel");
let buscador = document.getElementById("buscar")


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
      ${event.category}
     </p>
      <p class="card-text">
       ${event.description}
      </p>
      <a href="./Details.html?id=${event._id}" class="btn btn-secondary">More Info</a>
    </div>
    </div>`;
  }
  return tarjetas;
}


//crear un array de categoria
const utilInfoData = dataCards.events.map((categoryData) => categoryData.category)


//quita los duplicados de array de categorias
const categorias = utilInfoData.filter(
  (item, index) => utilInfoData.indexOf(item) == index
);


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

let masData=[]

conteLabel.addEventListener('change', (e)=>{
  if(e.target.checked) {
    masData.push(e.target.value)
}
else {
  let indice= masData.indexOf(e.target.value)
   if (indice !== -1){
      masData.splice(indice, 1)


   }

  }
 searchCards();
})



//FILTRO ELEMENTOS PARA EL BUSCADOR 

let escuchador=""
let eventosFiltrados=[]
buscador.addEventListener('keyup', (e) =>{
       escuchador=e.target.value.toLowerCase()
       searchCards()

})


// cruze de datos


 function searchCards(){
  eventosFiltrados = totalData.filter((event) => event.name.toLowerCase().includes(buscador.value.toLowerCase()) )
  let masInfoData = totalData.filter((categoryData) =>masData.includes(categoryData.category))

console.log(masInfoData);


if (eventosFiltrados.length > 0){
  containerCards.innerHTML = crearTarjetas(eventosFiltrados);
  let buscadorControl=eventosFiltrados.filter(data => data.category.includes(masData.toString()))
  containerCards.innerHTML=crearTarjetas(buscadorControl)

// console.log(buscadorControl);

    }
    
    
else if (eventosFiltrados == 0){
  containerCards.innerHTML ='<div class="contNoHayResult"><img class="noHayResut" src="./assest/img/AmazingNotFound.png" alt="image"><h3>Not Found</h3></div>';
                                 

   }

     
 if(masInfoData.length > 0){
      containerCards.innerHTML = crearTarjetas(masInfoData);
    
      let megaFiltro = masInfoData.filter(mdata => mdata.name.toLowerCase().includes(buscador.value.toString()));
      containerCards.innerHTML = crearTarjetas(megaFiltro);    

    }
 
    
  }  
  

searchCards()

// FILTRA LOS DATOS POR CADA EVENTO DEL BUSCADOR
// eventosFiltrados = dataCards.events.filter((event) => event.name.toLowerCase().includes(buscador.value.toLowerCase()) )
// FILTRA LOS DATOS POR CADA EVENTO DEL CHECKBOX
// const masInfoData = dataCards.events.filter((categoryData) =>masData.includes(categoryData.category))
