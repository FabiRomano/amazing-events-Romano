const queryString = location.search
const params = new URLSearchParams("event.id")
const id = params.get('id')


let cards = dataCards.events.find(data => data.id == id)

const ContenedorDetails = document.getElementById('ContenedorDetails')


ContenedorDetails.innerHTML= `<div class="col">
                            <img div class="imgDetails"
                                    src= "${cards.image}"
                                    alt="img">

                                  </div>
                    <div class="col">

                        <h1>${cards.name}</h1>
<p>${cards.description},${cards.category}</p>

 
</div>`


console.log(cards)

console.log("card")


