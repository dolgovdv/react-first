import React from "react"
// import PropTypes from "prop-types"
import Button from "./Button"

const Form = props => {
  // const [state, setState] = useState({ value: "" })
  const fileInput = React.createRef()

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Selected file - ${fileInput.current.files[0].name}`)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="file" ref={fileInput} />
      <Button type="submit">Отправить</Button>
    </form>
  )
}

Form.propTypes = {}

export default Form
