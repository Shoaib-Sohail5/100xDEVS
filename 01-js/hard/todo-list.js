/*
  Implement a class `Todo` having below methods  
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todolist = []

  add(todo) {
    this.todolist.push(todo)
  }

  remove(index) {
    this.todolist.splice(index, 1)
  }

  update(index,todo) {
    if(index < this.todolist.length) {
      this.todolist[index] = todo
    }
  }
  getAll() {
    return this.todolist
  }
  get(index) {
    if(this.todolist[index] === undefined) {
      return null
    }
    else {
      return this.todolist[index]
    }
  }
  clear() {
    this.todolist.splice(0, this.todolist.length)
  }


  

}

module.exports = Todo;
