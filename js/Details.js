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


})