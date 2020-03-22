import React from "react"
import PropTypes from "prop-types"
const Stats = props => {
  const count = props.todos.length
  const completed = props.todos.filter(item => item.completed).length
  const notCompleted = props.todos.filter(item => item.completed !== true)
    .length
  return (
    <table className="stats">
      <tbody>
        <tr>
          <th>All events</th>
          <td>{count}</td>
        </tr>
        <tr>
          <th>Success</th>
          <td>{completed}</td>
        </tr>
        <tr>
          <th>Unsuccess</th>
          <td>{notCompleted}</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = { todos: PropTypes.array }
export default Stats
