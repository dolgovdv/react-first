import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "./Button"

const Form = props => {
  const [state, setState] = useState({ value: "" })

  const handleSubmit = event => {
    event.preventDefault()
    const title = state.value
    if (title) {
      props.onAdd(title)
      setState({ value: "" })
    }
  }

  const handleChange = event => {
    setState({ value: event.target.value })
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={state.value}
        placeholder="Что нужно сделать!"
        onChange={handleChange}
      />
      <Button type="submit">Добавить</Button>
    </form>
  )
}

Form.propTypes = { onAdd: PropTypes.func.isRequired }

export default Form
