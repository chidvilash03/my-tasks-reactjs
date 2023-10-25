import './index.css'

const Task1 = props => {
  const {item} = props
  const {text, tag} = item
  return (
    <p className="task-item">
      <p className="text">{text}</p>
      <p className="tag">{tag}</p>
    </p>
  )
}
export default Task1
