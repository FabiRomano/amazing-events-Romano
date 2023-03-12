let totalData='https://mindhub-xj03.onrender.com/api/amazing'
fetch(totalData)
.then(response => response.json())
.then(datos => {     
  let totalData = datos    
 
console.log(totalData);


const containerCards = document.getElementById(`container-cards`)
const currentDate = totalData.currentDate
let buscador = document.getElementById("buscadorr")


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
        <p class="card-text">
        ${event.category}

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

const utilInfoData = totalData.events.map((categoryData) => categoryData.category)


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

//datos para el checkbox

let masData =[]
contLabel.addEventListener('change', (e)=>{

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
  eventosFiltrados = totalData.events.filter((event) => event.name.toLowerCase().includes(buscador.value.toLowerCase()) )
  let masInfoData = totalData.events.filter((categoryData) =>masData.includes(categoryData.category))



if (eventosFiltrados.length > 0){
  containerCards.innerHTML = traerTarjeta(eventosFiltrados);
  let buscadorControl=eventosFiltrados.filter(data => data.category.includes(masData.toString()))
  containerCards.innerHTML=traerTarjeta(buscadorControl)

console.log(buscadorControl);

    }else if (eventosFiltrados == 0){
    containerCards.innerHTML ='<div class="contNoHayResult"><img class="noHayResut" src="./assest/img/AmazingNotFound.png" alt="image"><h3>Not Found</h3></div>';
      ;
      } 
    
     
      if(masInfoData.length > 0){
        containerCards.innerHTML = traerTarjeta(masInfoData);
      
        let megaFiltro = masInfoData.filter(mdata => mdata.name.toLowerCase().includes(buscador.value.toString()));
        containerCards.innerHTML = traerTarjeta(megaFiltro);    
  
      }

}  


searchCards()

})