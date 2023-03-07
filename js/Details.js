const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get('id')

let cards = dataCards.events.find(data => data._id == id)

const ContenedorDetails = document.getElementById('ContenedorDetails')


ContenedorDetails.innerHTML=  `<div class="col">
                            <img div class="imgDetails"
                                    src= "${cards.image}"
                                    alt="img">

                                  </div>
                    <div class="col">

                        <h1>${cards.name}</h1>
                        <h3>${cards.category}</h1>
                        <p>Description: ${cards.description}</p>
                        <p>Place: ${cards.place}</p>
                        <p>Date: ${cards.date}</p>
                        <p>Estimate: ${cards.estimate}</p>
                        <p>Price: $${cards.price}</p>

 
</div>`


console.log(cards)

console.log(cards._id)


