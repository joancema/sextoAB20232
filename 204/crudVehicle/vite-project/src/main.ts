import './style.css'




(async ()=>{

  const response = await fetch('http://localhost:3000/api/vehicles')
  const data = await response.json()
  
  let divTable= `<table>`
  divTable += `<tr><th>Id</th><th>code</th><th>Detail</th><th>Acciones</th></tr>`
  data.forEach((vehicle: any) => {
    divTable += `<tr><td>${vehicle.id}</td><td>${vehicle.code}</td><td>${vehicle.detail}</td><td><button class="btn btn-danger">Eliminar</button></td></tr>`
  })
  divTable += `</table>`


  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable


  
  


})()


