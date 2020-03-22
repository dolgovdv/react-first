import React from "react"
import PropTypes from "prop-types"
import Checkbox from "./Checkbox"
import Button from "./Button"

const Todo = props => {
  // const handleChange = () => {
  //   props.onStatusChange(props.id)
  // }
  return (
    <div className={`todo${props.completed ? " completed" : ""}`}>
      <Checkbox
        checked={props.completed}
        onChange={() => props.onStatusChange(props.id)}
      />

      <span className="todo-title">{props.title}</span>

      <Button
        className="delete icon"
        icon="delete"
        onClick={() => props.onDelete(props.id)}
      />
    </div>
  )
}

Todo.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  onStatusChange: PropTypes.func,
  onDelete: PropTypes.func
}
export default Todo
