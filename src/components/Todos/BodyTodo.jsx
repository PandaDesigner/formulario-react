/* eslint-disable react/prop-types */
import {TodoItem} from '../itemTable/TodoItem'

export const BodyTodo = ({todos, deleteTask, changeTask}) => {
  return (
    <>
      <div className='container mt-4 pt-4'>
        <h1>List Task</h1>
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
            {
              (console.log(todos),
              todos.map(
                (
                  {id, todoTitulo, todoDescription, todoEstado, todoPriority},
                  index
                ) => (
                  <TodoItem
                    todoTitulo={todoTitulo}
                    todoDescription={todoDescription}
                    todoEstado={todoEstado}
                    todoPriority={todoPriority}
                    key={id}
                    id={id}
                    index={index}
                    deleteTask={deleteTask}
                    changeTask={changeTask}
                  />
                )
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
