let totalData='https://mindhub-xj03.onrender.com/api/amazing'
const containerTable = document.getElementById ("containerTable")

fetch(totalData)
.then(response => response.json())
.then(datos => {     
  let totalData = datos    
  const currentDate = totalData.currentDate
  const events = datos.events


//FILTROS Y MAPEOS DE LOS EVENTOS CON "ASSISTANCE"
//filtro los eventos con asistencia y saco porcentajes
let filtAsisPorcentaje = events.filter(filtAsisP => filtAsisP.assistance !== undefined).map(filtAsisP => {return{
  id: filtAsisP._id,
 name: filtAsisP.name,
 category: filtAsisP.category,
 assistance: filtAsisP.assistance,
 capacity: filtAsisP.capacity,
 price: filtAsisP.price,
 total: filtAsisP.price * filtAsisP.assistance,
 percentage: Math.round((filtAsisP.assistance / filtAsisP.capacity ) * 100)

}} )
     
    // Primera tabla
    // Esta constante ordena de mayor a menor porcentaje y guarda solo los datos utiles
    const ordenAsis = filtAsisPorcentaje.sort((a,b) => b.percentage - a.percentage).map(filtAsisP => {return `${filtAsisP.name}: ${filtAsisP.percentage}%`})

   // Esta constante toma solo los ultimos 3 eventos
    const tresUltimos = ordenAsis.slice(-3)

    // Esta constante ordena de mayor a menor segun la capacidad
    const capacidadOrden = filtAsisPorcentaje.sort((a,b) => a.capacity - b.capacity).map(filtAsisP => {return `${filtAsisP.name}: ${filtAsisP.capacity}`})

const granCapacity = capacidadOrden.slice(-3)


 //segunda tabla
//FILTROS Y MAPEOS DE LOS EVENTOS CON "ESTIMATE"
//Filtro los eventos con la una estimacion de asistencia
let estimateFilter = events.filter(esti => esti.estimate != undefined).map(estimateFilter =>{return{
  id: estimateFilter._id,
  name: estimateFilter.name,
  category:estimateFilter.category,
  estimate: estimateFilter.estimate,
  capacity: estimateFilter.capacity,
  price: estimateFilter.price,
  total: estimateFilter.price * estimateFilter.estimate,
  percentage:(estimateFilter.estimate / estimateFilter.capacity ) * 100
}} )

//  console.log("todos los eventos futuros:", estimateFilter);


//funcion para sumar los totales por categoria y aplicarlos a cada una
function sumaPorCategory(category) {
  let totalPorCategory=0
  let totalCapacidad=0
  let totalEstimate=0
  let porcentajeDeEstimate=[]
estimateFilter.forEach(event=> {if( event.category == category){
                            totalPorCategory +=  event.total
                            totalCapacidad += event.capacity
                            totalEstimate += event.estimate

}
});

let porcenTotalCate= ((totalEstimate / totalCapacidad) *100).toFixed(2)

porcentajeDeEstimate.push(totalPorCategory)
porcentajeDeEstimate.push(porcenTotalCate)


return porcentajeDeEstimate  
}

let arraySumas=[]
function sumaTodasCate() {
  categorias.forEach(categoria => { 
    arraySumas.push(sumaPorCategory(categoria))
  })
  
}

//mapeo las categorias delos eventos futuros y saco las repetidas
  let mapCategorias = estimateFilter.map((cat) => cat.category)
  // console.log(mapCategorias);
  const categorias = mapCategorias.filter(
    (item, index) => mapCategorias.indexOf(item) == index
  )

sumaTodasCate()





//***************************tercer tabla eventos asistidos***************************************


//funcion para sumar los totales por categorias asistida y aplicarlos a cada una
function sumaPorCateAsis(cate) {
  let totalPorCategoryAsis=0
  let totalCapacidadAsis=0
  let totalAsistencia=0
  let porcentajeDeAsis=[]
filtAsisPorcentaje.forEach(e=> {if( e.category == cate){
                            totalPorCategoryAsis +=  e.total
                            totalCapacidadAsis += e.capacity
                            totalAsistencia += e.assistance
                            // console.log(totalPorCategoryAsis);

}
});

let porcenTotalCateAsis= ((totalAsistencia / totalCapacidadAsis) *100).toFixed(2)
console.log(porcenTotalCateAsis);

porcentajeDeAsis.push(totalPorCategoryAsis)
porcentajeDeAsis.push(porcenTotalCateAsis)


return porcentajeDeAsis  
}

let arraySumasAsis=[]
function sumaTodasCateAsisti() {
  categoriasAsis.forEach(cate => { 
    arraySumasAsis.push(sumaPorCateAsis(cate))
    console.log(arraySumasAsis);

  })
}

//mapeo las categorias de los eventos asistidos y saco las repetidas
  let mapCategoriasAsis = filtAsisPorcentaje.map((category) => category.category
  )
  console.log(mapCategoriasAsis);
  const categoriasAsis = mapCategoriasAsis.filter(
    (item, index) => mapCategoriasAsis.indexOf(item) == index

  )
  console.log(categoriasAsis);

sumaTodasCateAsisti()


// ******************tabla*******************
function infoTable() {
  containerTable.innerHTML=`<thead>
  <tr>
    <th colspan="3">Events Statistics</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="estyleSub">Events with the highest persentage of aftendancen</td>
    <td class="estyleSub">Events with the lowest persentage of aftendancen</td>
    <td class="estyleSub">Events with large capacity</td>
  </tr>
  <tr>
    <td>${ordenAsis[0]}</td>
    <td>${tresUltimos[0]}</td>
    <td>${granCapacity[2]}</td>
  </tr>

  <tr>
  <td>${ordenAsis[1]}</td>
  <td>${tresUltimos[1]}</td>
  <td>${granCapacity[1]}</td>
</tr>

<tr>
<td>${ordenAsis[2]}</td>
<td>${tresUltimos[2]}</td>
<td>${granCapacity[0]}</td>

</tr>

  <tr>
    <th colspan="3">Upcoming Events Statistics by category</th>
  </tr>

  <tr>
    <td class="estyleSub">Categories</td>
    <td class="estyleSub">Revenues</td>
    <td class="estyleSub">Percentage</td>
  </tr>

  <tr>
    <td>${categorias[0]}</td>
    <td>$${arraySumas[0][0]}</td>
    <td>${arraySumas[0][1]}%</td>
  </tr>

  <tr>
    <td>${categorias[1]}</td>
    <td>$${arraySumas[1][0]}</td>
    <td>${arraySumas[1][1]}%</td>
  </tr>

  <tr>
    <td>${categorias[2]}</td>
    <td>$${arraySumas[2][0]}</td>
    <td>${arraySumas[2][1]}%</td>
  </tr>

  <tr>
  <td>${categorias[3]}</td>
  <td>$${arraySumas[3][0]}</td>
  <td>${arraySumas[3][1]}%</td>
</tr>

<tr>
<td>${categorias[4]}</td>
<td>$${arraySumas[4][0]}</td>
<td>${arraySumas[4][1]}%</td>
</tr>

<tr>
<td>${categorias[5]}</td>
<td>$${arraySumas[5][0]}</td>
<td>${arraySumas[5][1]}%</td>
</tr>



  <tr>
    <th colspan="3">Past Events Statistics by category</th>
  </tr>

  <tr>
    <td class="estyleSub">Categories</td>
    <td class="estyleSub">Renueves</td>
    <td class="estyleSub">Percentage</td>
  </tr>

  <tr>
  <td>${categoriasAsis[0]}</td>
  <td>$${arraySumasAsis[0][0]}</td>
  <td>${arraySumasAsis[0][1]}%</td>
</tr>

<tr>
  <td>${categoriasAsis[1]}</td>
  <td>$${arraySumasAsis[1][0]}</td>
  <td>${arraySumasAsis[1][1]}%</td>
</tr>

<tr>
  <td>${categoriasAsis[2]}</td>
  <td>$${arraySumasAsis[2][0]}</td>
  <td>${arraySumasAsis[2][1]}%</td>
</tr>

<tr>
<td>${categoriasAsis[3]}</td>
<td>$${arraySumasAsis[3][0]}</td>
<td>${arraySumasAsis[3][1]}%</td>
</tr>

<tr>
<td>${categoriasAsis[4]}</td>
<td>$${arraySumasAsis[4][0]}</td>
<td>${arraySumasAsis[4][1]}%</td>
</tr>

<tr>
<td>${categoriasAsis[5]}</td>
<td>$${arraySumasAsis[5][0]}</td>
<td>${arraySumasAsis[5][1]}%</td>
</tr>

<tr>
<td>${categoriasAsis[6]}</td>
<td>$${arraySumasAsis[6][0]}</td>
<td>${arraySumasAsis[6][1]}%</td>
</tr>


</tbody>
</table>`
  
return containerTable.innerHTML
}

infoTable()




//***************modo oscuro******************

const btnModoOscuro=document.getElementById("btnModoOscuro");
const mOscuroBody=document.getElementById("mOscuroBody");
const mOscuroContainer=document.getElementById("mOscuroContainer");
const mOscuroHeader=document.getElementById("mOscuroHeader");
const navDark=document.querySelectorAll(".navDark")
const iconDark=document.querySelectorAll(".iconDark")



loadMDark()
loadNavDark()
loadIconDark()


btnModoOscuro.addEventListener("click", () => {
  mOscuroBody.classList.toggle("modeDark")
  mOscuroContainer.classList.toggle("modeDark")
  mOscuroHeader.classList.toggle("modeDark")
navDark.forEach(nav => {nav.classList.toggle("navDark")
})
  iconDark.forEach(icon => {icon.classList.toggle("iconDark")
})

storeMDark(mOscuroBody.classList.contains("modeDark"))
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
    localStorage.setItem("navDark", value)
    localStorage.setItem("iconDark", value)
}




localStorage.clear()




})