let totalData='https://mindhub-xj03.onrender.com/api/amazing'
fetch(totalData)
.then(response => response.json())
.then(datos => {     
  let totalData = datos    
 
console.log(totalData);

const containerCards = document.getElementById(`cont-cards`);
const conteLabel = document.getElementById("conteLabel");
let buscador = document.getElementById("buscar")


function crearTarjetas(arrayDatos) {
  let tarjetas = "";
  for (const event of arrayDatos) {
    tarjetas += `<div class="card cardDark">
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
const utilInfoData = totalData.events.map((categoryData) => categoryData.category)


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
let megaFiltro =[]

 function searchCards(){
  eventosFiltrados = totalData.events.filter((event) => event.name.toLowerCase().includes(buscador.value.toLowerCase()) )
  let masInfoData = totalData.events.filter((categoryData) =>masData.includes(categoryData.category))

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
    
     megaFiltro = masInfoData.filter(mdata => mdata.name.toLowerCase().includes(buscador.value.toString()));
      containerCards.innerHTML = crearTarjetas(megaFiltro);    

    }


}
  

searchCards()

//***************modo oscuro******************

const btnModoOscuro=document.getElementById("btnModoOscuro");
const mOscuroBody=document.getElementById("mOscuroBody");
const mOscuroContainer=document.getElementById("mOscuroContainer");
const mOscuroHeader=document.getElementById("mOscuroHeader");
const cardDark=document.querySelectorAll(".cardDark")
const navDark=document.querySelectorAll(".navDark")
const iconDark=document.querySelectorAll(".iconDark")
console.log(cardDark);



loadMDark()
loadCardsDark()
loadNavDark()
loadIconDark()


btnModoOscuro.addEventListener("click", () => {
  mOscuroBody.classList.toggle("modeDark")
  mOscuroContainer.classList.toggle("modeDark")
  mOscuroHeader.classList.toggle("modeDark")
  cardDark.forEach(card => {card.classList.toggle("cardDark")
})
navDark.forEach(nav => {nav.classList.toggle("navDark")
})
  iconDark.forEach(icon => {icon.classList.toggle("iconDark")
})

storeMDark(mOscuroBody.classList.contains("modeDark"))
storeMDark(cardDark.classList.contains("cardDark"))
storeMDark(navDark.classList.contains("navDark"))
storeMDark(iconDark.classList.contains("iconDark"))
})


function loadMDark() {
    let modeDark = localStorage.getItem("modeDark");
    console.log(modeDark);
    if(!modeDark) {
        storeMDark("false")
    } else if(modeDark == "true"){
        mOscuroBody.classList.add("modeDark") 
        mOscuroContainer.classList.add("modeDark")
        mOscuroHeader.classList.add("modeDark")
    
    }
}

function loadCardsDark(){
    if (!cardDark) {
        storeMDark("false")
  
    }else if(cardDark == "true"){
         cardDark.forEach(card => {card.classList.add("cardDark")
      })
    }
}


function loadNavDark() {
  if (!navDark) {
    storeMDark("false")
    
  }else if(navDark == "true"){
         navDark.forEach(nav => {nav.classList.add("navDark")
      })
  }
  
}

function loadIconDark() {
  if (!iconDark) {
    storeMDark("false")
    
  }else if(iconDark == "true"){
         iconDark.forEach(icon => {icon.classList.add("iconDark")
      }) 
  }
  
}


function storeMDark(value) {
    localStorage.setItem("modeDark", value)
    localStorage.setItem("cardDark", value)
    localStorage.setItem("navDark", value)
    localStorage.setItem("iconDark", value)
}




localStorage.clear()

})
