import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import todos from "./todos"

ReactDOM.render(
  <App title="React ToDo" todos={todos} />,
  document.getElementById("root")
)
