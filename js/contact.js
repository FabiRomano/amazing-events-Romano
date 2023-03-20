let totalData='https://mindhub-xj03.onrender.com/api/amazing'
fetch(totalData)
.then(response => response.json())
.then(datos => {     
  let totalData = datos    
console.log(totalData);



//***************modo oscuro******************

const btnModoOscuro=document.getElementById("btnModoOscuro");
const mOscuroBody=document.getElementById("mOscuroBody");
const mOscuroContainer=document.getElementById("mOscuroContainer");
const mOscuroHeader=document.getElementById("mOscuroHeader");
const navDark=document.querySelectorAll(".navDark")
const iconDark=document.querySelectorAll(".iconDark")
const labelDark=document.querySelectorAll(".labelDark")





btnModoOscuro.addEventListener("click", () => {
    mOscuroBody.classList.toggle("modeDark")
    mOscuroContainer.classList.toggle("modeDark")
    mOscuroHeader.classList.toggle("modeDark")
    navDark.forEach(nav => {nav.classList.toggle("navDark")
})
    iconDark.forEach(icon => {icon.classList.toggle("iconDark")
})
    labelDark.forEach(label => {label.classList.toggle("labelDark")
})




storeMDark(mOscuroBody.classList.contains("modeDark"))
storeMDark(navDark.classList.contains("navDark"))
storeMDark(iconDark.classList.contains("iconDark"))
storeMDark(labelDark.classList.contains("labelDark"))


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
loadMDark()

    function loadNavDark() {
        if (!navDark) {
          storeMDark("false")
          
        }else if(navDark == "true"){
               navDark.forEach(nav => {nav.classList.add("navDark")
            })
        }
        
      }
loadNavDark()
      function loadIconDark() {
        if (!iconDark) {
          storeMDark("false")
          
        }else if(iconDark == "true"){
               iconDark.forEach(icon => {icon.classList.add("iconDark")
            }) 
        }
        
      }  
    loadIconDark() 
    

    
function loadlabelDark() {
    if (!labelDark) {
        storeMDark("false")
        
    }else if(labelDark == "true"){
        labelDark.forEach(label => {label.classList.add("labelDark")
    })

    }

}
loadlabelDark()

 function storeMDark(value) {
        localStorage.setItem("modeDark", value)
        localStorage.setItem("navDark", value)
        localStorage.setItem("iconDark", value)
        localStorage.setItem("labelDark", value)
      
    }
     
  
    
})

localStorage.clear()


})