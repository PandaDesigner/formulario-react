/* eslint-disable react/prop-types */
export function TodoItem({
  id,
  todoTitulo,
  todoDescription,
  todoEstado,
  todoPriority,
  index,
  deleteTask,
  changeTask,
}) {
  return (
    <>
      <tr className='align-middle'>
        <th scope='row'>{index + 1}</th>
        <td>
          <h5 className='d-flex justify-content-start align-items-center gap-2 m-0'>
            {todoTitulo}
            {'  '}
            {todoPriority && (
              <span
                className='badge rounded-pill text-bg-info  fw-normal'
                style={{fontSize: '8px'}}
              >
                Prioritario
              </span>
            )}
          </h5>
        </td>
        <td>{todoDescription}</td>
        <td>
          <span
            className={`badge ${
              todoEstado === 'completado' ? 'bg-success' : 'bg-danger'
            }`}
          >
            {todoEstado === 'completado' ? 'completado' : 'pendiente'}
          </span>
        </td>
        <td className='d-flex flex-row justify-content-end align-items-centerv flex-wrap gap-2 '>
          <button
            onClick={() => changeTask(id)}
            className={`btn btn-sm d-flex ${
              todoEstado === 'completado' ? 'link-primary' : 'link-danger'
            } justify-content-center align-items-center gap-1 
                `}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-pencil-square'
              viewBox='0 0 16 16'
            >
              <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
              <path
                fillRule='evenodd'
                d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
              />
            </svg>
            {todoEstado === 'completado' ? 'completado' : 'pendiente'}
          </button>
          <button
            onClick={() => deleteTask(id)}
            className='btn btn-sm btn-warning ms-2 d-flex justify-content-center align-items-center gap-1'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-eraser'
              viewBox='0 0 16 16'
            >
              <path d='M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z' />
            </svg>
            Eliminar
          </button>
        </td>
      </tr>
    </>
  )
}
