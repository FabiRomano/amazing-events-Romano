let totalData='https://mindhub-xj03.onrender.com/api/amazing'
fetch(totalData)
.then(response => response.json())
.then(datos => {     
  let totalData = datos    
  const currentDate = totalData.currentDate
  const events = datos.events

console.log(events);  
console.log(currentDate); 
console.log(totalData);


//filtro los eventos con asistencia
let filtAsistencia = events.filter((filtAsis) => filtAsis.assistance)
console.log(filtAsistencia);

//mapeo la asistencia 
let mapeoAsistencia = filtAsistencia.map((asist) => asist.assistance)
console.log(mapeoAsistencia);


//mapeo la capacidad de todos los eventos
let mapCapacidad = events.map((cap) => cap.capacity)
console.log(mapCapacidad);








})