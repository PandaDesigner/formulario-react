/* eslint-disable react/prop-types */
import {useState} from 'react'
import Swal from 'sweetalert2'
import {Task} from '../../model/TaskTodo'

export const Formulario = ({addTodo}) => {
  const [todo, setTodo] = useState(new Task())

  const {todoTitulo, todoDescription, todoEstado, todoPriority} = todo

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todoTitulo.trim()) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `No se permiten el campo Titulo vacios`,
      })
    }

    if (!todoDescription.trim()) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `No se permiten el campo Descripción vacios`,
      })
    }

    addTodo(todo)
  }

  const handelChangeTodo = ({target}) => {
    const {name, checked, value} = target
    setTodo({...todo, [name]: target.type === 'checkbox' ? checked : value})
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='mb-4 pb-4'>
        <input
          onChange={handelChangeTodo}
          type='text'
          placeholder='Ingrese el titulo del Todo'
          className='form-control mb-2'
          name='todoTitulo'
          value={todoTitulo}
        />
        <textarea
          onChange={handelChangeTodo}
          cols={2}
          rows={2}
          placeholder='Ingrese la descricción del Todo'
          className='form-control mb-2'
          name='todoDescription'
          value={todoDescription}
        />
        <div className='form-check mb-2'>
          <input
            type='checkbox'
            name='todoPriority'
            className='form-check-input'
            id='inputCheck'
            checked={todoPriority}
            onChange={handelChangeTodo}
          />
          <label className='form-check-label' htmlFor='inputCheck'>
            Dar Prioridad
          </label>
        </div>
        <select
          onChange={handelChangeTodo}
          className='form-select mb-2'
          name='todoEstado'
          value={todoEstado}
        >
          <option value='pendiente'>Pendiente</option>
          <option value='completado'>Completado</option>
        </select>

        <button type='submit' className='btn btn-primary'>
          Agregar Task
        </button>
      </form>
    </>
  )
}
