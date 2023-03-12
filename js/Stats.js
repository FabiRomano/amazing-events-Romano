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











})