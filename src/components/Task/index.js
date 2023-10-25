import './index.css'

const Task = props => {
  const {item} = props
  const {text, tag} = item
  return (
    <li className="task-item">
      <p className="text">{text}</p>
      <p className="tag">{tag}</p>
    </li>
  )
}
export default Task
