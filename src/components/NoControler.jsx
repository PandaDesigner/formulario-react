import {useRef, useState} from 'react'
import {TodoItem} from './itemTable/TodoItem'

import {data} from '../db/todoDB'

export const NoControler = () => {
  const [error, setError] = useState({error: '', message: ''})
  const form = useRef(null)

  const handelError = (error) => {
    console.log(
      `favor los campos son obligatorios llene el campo de ${error.error}`
    )
    alert(error.message)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    const formData = new FormData(form.current).entries()

    const {todoTitulo, todoDescripcion, todoEstado} =
      Object.fromEntries(formData)

    if (todoTitulo.trim().length === 0) {
      setError({
        error: 'Titulo',
        message: 'El titulo es obligatorio',
      })
      return handelError(error)
    }
    if (todoDescripcion.trim().length === 0) {
      setError({
        error: 'Descripcion',
        message: 'La descripcion es obligatorio',
      })
      return handelError(error)
    }
    if (todoEstado.trim().length === 0) {
      setError({
        error: 'Estado',
        message: 'El estado es obligatorio',
      })
      return handelError(error)
    }

    console.log(todoTitulo, todoDescripcion, todoEstado)
    console.log('este es con el objeto:', form.current)
  }

  return (
    <>
      <form onSubmit={handleSubmit} ref={form} className='mb-4 pb-4'>
        <input
          type='text'
          placeholder='Ingrese el titulo del Todo'
          className='form-control mb-2'
          name='todoTitulo'
        />
        {error.error === 'Titulo' && (
          <p
            className='alert mt-2 alert-danger  p-2 rounded-2'
            role='alert'
          >{`El campo ${error.error} es Oblicatorio`}</p>
        )}
        <textarea
          className='form-control mb-2'
          type='text'
          placeholder='Ingrese la descricción del Todo'
          name='todoDescripcion'
        />
        {error.error === 'Descripcion' && (
          <p
            className='alert mt-2 alert-danger  p-2 rounded-2'
            role='alert'
          >{`El campo ${error.error} es Oblicatorio`}</p>
        )}

        <select className='form-select mb-2' name='todoEstado'>
          <option value='Estado'>Selector</option>
          <option value='pendiente'>Pendiente</option>
          <option value='conpletado'>Completado</option>
        </select>
        {error.error === 'Estado' && (
          <p
            className='alert mt-2 alert-danger  p-2 rounded-2'
            role='alert'
          >{`El campo ${error.error} es Oblicatorio`}</p>
        )}
        <button type='submit' className='btn btn-primary'>
          Agregar
        </button>
      </form>
      <hr />
      <div className='container mt-4 pt-4'>
        <h1>Formulario no controlado</h1>
        <p>los siguiente son todo</p>
        <table className='table table-striped'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Descricción</th>
              <th scope='col'>Estado</th>
              <th scope='col' className='align-middle text-center'>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({name, description, state}, index) => (
              <TodoItem
                name={name}
                description={description}
                state={state}
                key={index}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
