import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"

const Form = props => {
  const myRef = React.createRef()
  const handleSubmit = event => {
    event.preventDefault()
    const title = myRef.current.value
    if (title) {
      props.onAdd(title)
      myRef.current.value = ""
    }
    // console.log("event = ", myRef.current.value)
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" ref={myRef} placeholder="Что нужно сделать!" />
      <Button type="submit">Добавить</Button>
    </form>
  )
}

Form.propTypes = { onAdd: PropTypes.func.isRequired }

export default Form
