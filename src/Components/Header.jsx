import React from "react"
import PropTypes from "prop-types"

import Stats from "./Stats"

function Header(props) {
  return (
    <header>
      <Stats todos={props.todos} />
      <h1>{props.title}</h1>
    </header>
  )
}

Header.propTtpes = {
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: "Def ToDo",
  todos: PropTypes.array
}
export default Header
