let totalData='https://mindhub-xj03.onrender.com/api/amazing'
const containerTable = document.getElementById ("containerTable")

fetch(totalData)
.then(response => response.json())
.then(datos => {     
  let totalData = datos    
  const currentDate = totalData.currentDate
  const events = datos.events


const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get('id')

let cards = totalData.events.find(data => data._id == id)

const ContenedorDetails = document.getElementById('ContenedorDetails')


ContenedorDetails.innerHTML=  `<div class="col">
                            <img div class="imgDetails"
                                    src= "${cards.image}"
                                    alt="img">

                                  </div>
                    <div class="col">

                       <h2>${cards.name}</h2>
                        <h5>${cards.description}</h5>
                        <h5>${cards.place}</h5>
                        <h5>${cards.date}</h5>
                        <h5>${cards.estimate}</h5>
                        <h5>$${cards.price}</h5>

 
</div>`


console.log(cards)

console.log(cards._id)


//***************modo oscuro******************

const btnModoOscuro=document.getElementById("btnModoOscuro");
const mOscuroBody=document.getElementById("mOscuroBody");
const mOscuroContainer=document.getElementById("mOscuroContainer");
const mOscuroHeader=document.getElementById("mOscuroHeader");
const navDark=document.querySelectorAll(".navDark")
const iconDark=document.querySelectorAll(".iconDark")
const contDark=document.getElementById("ContenedorDetails");



loadMDark()
loadNavDark()
loadIconDark()
loadContDark()


btnModoOscuro.addEventListener("click", () => {
  mOscuroBody.classList.toggle("modeDark")
  mOscuroContainer.classList.toggle("modeDark")
  mOscuroHeader.classList.toggle("modeDark")
  navDark.forEach(nav => {nav.classList.toggle("navDark")
})
  iconDark.forEach(icon => {icon.classList.toggle("iconDark")
})
  contDark.classList.toggle("contDark")


storeMDark(mOscuroBody.classList.contains("modeDark"))
storeMDark(navDark.classList.contains("navDark"))
storeMDark(iconDark.classList.contains("iconDark"))
storeMDark(contDark.classList.contains("contDark"))
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

function loadContDark() {
  if (contDark) {
    storeMDark("false")
    
  }else if(contDark == "true"){
        contDark.classList.add("contDark")
  }
  
}



function storeMDark(value) {
    localStorage.setItem("modeDark", value)
    localStorage.setItem("navDark", value)
    localStorage.setItem("iconDark", value)
    localStorage.setItem("contDark", value)
}




localStorage.clear()



})