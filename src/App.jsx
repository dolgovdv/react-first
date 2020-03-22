import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "./Components/Header"
import Todo from "./Components/Todo"
import Form from "./Components/Form"
function App(props) {
  const [state, setState] = useState(props.todos)

  const handleStatusChange = id => {
    // const todos = state.map(item => {
    //   if (item.id === id) item.completed = !item.completed
    // })

    setState(
      state.map(item => {
        if (item.id === id) item.completed = !item.completed
        return item
      })
    )

    // console.log("onStatusChange ", id, state)
  }

  const handleDeleteItem = id => {
    setState(
      state.filter(item => {
        return item.id !== id
      })
    )
    // console.log("onDelete ", id, state)
  }

  const handleAdd = title => {
    const newTodo = [...state, { id: 4, title: title, completed: false }]
    setState(newTodo)
    console.log(state)
  }
  return (
    <main>
      <Header title={props.title} todos={state} />

      <section className="todo-list">
        {state.map(item => (
          <Todo
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
            onStatusChange={handleStatusChange}
            onDelete={handleDeleteItem}
          />
        ))}
      </section>

      <Form onAdd={handleAdd} />
    </main>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  )
}

App.defaultProps = { title: "default ToDo" }

export default App
