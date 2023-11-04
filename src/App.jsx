//import {NoControler} from './components/NoControler'
import {useEffect, useState} from 'react'
import {BodyTodo} from './components/Todos/BodyTodo'
import {Formulario} from './components/fromControler/Controler'
import {Task} from './model/TaskTodo'
import Swal from 'sweetalert2'

const initialState = JSON.parse(localStorage.getItem('todos')) || []

const App = () => {
  const [todos, setTodos] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    const {todoTitulo, todoDescription, todoEstado, todoPriority} = todo
    setTodos([
      ...todos,
      new Task(todoTitulo, todoDescription, todoEstado, todoPriority),
    ])
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Task agregada',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const deleteTask = (id) => {
    const newArray = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newArray)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Task eliminada',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const changeTask = (id) => {
    let textChange = ''
    const newArrays = todos.map((todo) => {
      if (todo.id === id) {
        textChange = todo.todoTitulo
        todo.todoEstado === 'pendiente'
          ? (todo.todoEstado = 'completado')
          : (todo.todoEstado = 'pendiente')
      }
      return todo
    })
    setTodos(newArrays)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Task ${textChange} cambiada`,
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const orderTodo = (arrayTodo) => {
    return arrayTodo.sort((a, b) => {
      if (a.todoPriority === b.todoPriority) return 0
      if (a.todoPriority) return -1
      if (!a.todoPriority) return 1
      return 0
    })
  }

  return (
    <div className='container mt-4'>
      <h1>Form control</h1>
      <Formulario addTodo={addTodo} />
      <hr />
      <BodyTodo
        todos={orderTodo(todos)}
        deleteTask={deleteTask}
        changeTask={changeTask}
      />
    </div>
  )
}
export default App
