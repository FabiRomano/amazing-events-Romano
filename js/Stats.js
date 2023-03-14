let totalData='https://mindhub-xj03.onrender.com/api/amazing'
const containerTable = document.getElementById ("containerTable")


fetch(totalData)
.then(response => response.json())
.then(datos => {     
  let totalData = datos    
  const currentDate = totalData.currentDate
  const events = datos.events


console.log(events);  
console.log(currentDate); 
console.log(totalData);

//FILTROS Y MAPEOS DE LOS EVENTOS CON "ASSISTANCE"
//filtro los eventos con asistencia y saco porcentajes
let filtAsisPorcentaje = events.filter(filtAsisP => filtAsisP.assistance !== undefined).map(filtAsisP => {return{
  id: filtAsisP._id,
 name: filtAsisP.name,
 assistance: filtAsisP.assistance,
 capacity: filtAsisP.capacity,
 percentage: Math.round((filtAsisP.assistance / filtAsisP.capacity ) * 100)

}} )
console.log("todos los eventos ya asistidos y sus porcentajes:", filtAsisPorcentaje);
     
    // Primera tabla
    // Esta constante ordena de mayor a menor porcentaje y guarda solo los datos utiles
    const ordenAsis = filtAsisPorcentaje.sort((a,b) => b.percentage - a.percentage).map(filtAsisP => {return `${filtAsisP.name}: ${filtAsisP.percentage}%`})
console.log(ordenAsis);

   // Esta constante toma solo los ultimos 3 eventos
    const tresUltimos = ordenAsis.slice(-3)
console.log(tresUltimos);

    // Esta constante ordena de mayor a menor segun la capacidad
    const capacidadOrden = events.sort((a,b) => a.capacity - b.capacity).map(filtAsisP => {return `${filtAsisP.name}: ${filtAsisP.capacity}`})
console.log(capacidadOrden);

const granCapacity = capacidadOrden.slice(-2)
console.log(granCapacity);


//FILTROS Y MAPEOS DE LOS EVENTOS CON "ESTIMATE"
//Filtro los eventos con la una estimacion de asistencia
let estimateFilter = events.filter(esti => esti.estimate != undefined).map(estimateFilter =>{return{
  id: estimateFilter._id,
  name: estimateFilter.name,
  category:estimateFilter.category,
  estimate: estimateFilter.estimate,
  capacity: estimateFilter.capacity,
  percentage: Math.round((estimateFilter.estimate / estimateFilter.capacity ) * 100)
}})
 console.log("todos los eventos futuros:", estimateFilter);





 //segunda tabla
  // Esta constante ordena de mayor a menor porcentaje y guarda solo los datos utiles
  const ordEstimate = estimateFilter.sort((a,b) => a.estimate - b.estimate).map(estimateFilter => {return `${estimateFilter.category}: ${estimateFilter.percentage}%`})
  console.log(ordEstimate);
   const maxEstimate = ordEstimate.filter(
    (item, index) => ordEstimate.indexOf(item) !== index
  );
       console.log(maxEstimate);








function infoTable() {
  containerTable.innerHTML=`<thead>
  <tr>
    <th colspan="3">Events Statistics</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Events with the highest persentage of aftendancen</td>
    <td>Events with the lowest persentage of aftendancen</td>
    <td>Events with large capacity</td>
  </tr>
  <tr>
    <td>${ordenAsis[0]}</td>
    <td>${tresUltimos[0]}</td>
    <td>${granCapacity[0]}</td>
  </tr>

  <tr>
  <td>${ordenAsis[1]}</td>
  <td>${tresUltimos[1]}</td>
  <td>${granCapacity[1]}</td>
</tr>

<tr>
<td>${ordenAsis[2]}</td>
<td>${tresUltimos[2]}</td>
<td>.</td>

</tr>

  <tr>
    <th colspan="3">Upcoming Events Statistics by category</th>
  </tr>

  <tr>
    <td>Categories</td>
    <td>Revenues</td>
    <td>Percentage</td>
  </tr>

  <tr>
    <td>${maxEstimate[0]}</td>
    <td>.</td>
    <td>.</td>
  </tr>

  <tr>
    <td>${maxEstimate[1]}</td>
    <td>.</td>
    <td>.</td>
  </tr>

  <tr>
    <td>${maxEstimate[2]}</td>
    <td>.</td>
    <td>.</td>
  </tr>

  <tr>
    <th colspan="3">Past Events Statistics by category</th>
  </tr>

  <tr>
    <td>Categories</td>
    <td>Renueves</td>
    <td>Percentage</td>
  </tr>

  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>

  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>

  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>

  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>

  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>
</tbody>
</table>`
  
return containerTable.innerHTML
}

infoTable()







//mapeo la capacidad de todos los eventos
let mapCapacidad = events.map((cap) => cap.capacity)
console.log("capacidad de todos los eventos:", mapCapacidad);








})