import './style.css'




(async ()=>{

  const response = await fetch('http://localhost:3000/api/vehicles')
  const data = await response.json()
  
  let divTable= `<table>`
  divTable += `<tr><th>Id</th><th>code</th><th>Detail</th><th>Acciones</th></tr>`
  data.forEach((vehicle: IVehicle) => {
    divTable += `<tr><td>${vehicle.id}</td><td>${vehicle.code}</td><td>${vehicle.detail}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button> </td> </tr>`
  })
  divTable += `</table>`

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable


  const divButton = `<button class="btn btn-primary" >Agregar</button>`
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary')
  btnAgregar?.addEventListener('click', ()=>{
    const divForm = `<form>
    <div class="mb-3">
      <label for="code" class="form-label">Code</label>
      <input type="text" class="form-control" id="code" aria-describedby="code">
    </div>
    <div class="mb-3">
      <label for="detail" class="form-label">Detail</label>
      <input type="text" class="form-control" id="detail">
    </div>
    <button type='submit'  class="btn btn-save">Save</button>
    <button type='submit'  class="btn btn-cancel">Cancel</button>
    </form>`
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
    btnSave?.addEventListener('click', async (e)=>{
      e.preventDefault()
      const code = document.querySelector<HTMLInputElement>('#code')!.value
      const detail = document.querySelector<HTMLInputElement>('#detail')!.value
      const response = await fetch('http://localhost:3000/api/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({code, detail, customerId:1})
      })
      const data = await response.json()
      console.log(data)
      // reload page
      location.reload()
    })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      console.log(id)
      await fetch(`http://localhost:3000/api/vehicles/${id}`, {
        method: 'DELETE'
      })
      location.reload()

     })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      const response = await fetch(`http://localhost:3000/api/vehicles/${id}`)
      const data = await response.json()
      //add button for cancel
      const btnCancel = `<button class="btn btn-cancel">Cancel</button>`
      const divForm = `<form>
      <div class="mb-3">
        <label for="code" class="form-label">Code</label>
        <input type="text" class="form-control" id="code" aria-describedby="code" value="${data.code}">
      </div>
      <div class="mb-3">
        <label for="detail" class="form-label">Detail</label>
        <input type="text" class="form-control" id="detail" value="${data.detail}">
      </div>
      <button type='submit'  class="btn btn-save">Save</button>
      ${btnCancel}
      </form>`
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
      btnSave?.addEventListener('click', async (e)=>{
        e.preventDefault()
        const code = document.querySelector<HTMLInputElement>('#code')!.value
        const detail = document.querySelector<HTMLInputElement>('#detail')!.value
        const response = await fetch(`http://localhost:3000/api/vehicles/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({code, detail, customerId:1})
        })
        const data = await response.json()
        console.log(data)
        // reload page
        location.reload()
      })
     })
  })

  
  


})()


