import {v4 as uuid} from 'uuid'

export class Task {
  id
  todoTitulo
  todoDescription
  todoEstado
  todoPriority
  constructor(
    todoTitulo = '',
    todoDescription = '',
    todoEstado = 'estado',
    todoPriority = false
  ) {
    this.id = uuid()
    this.todoTitulo = todoTitulo
    this.todoDescription = todoDescription
    this.todoEstado = todoEstado
    this.todoPriority = todoPriority
  }
}
