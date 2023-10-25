import './index.css'

const Tag = props => {
  const {item, filterTasks, activeId} = props
  const {displayText, optionId} = item
  const selected = () => {
    filterTasks(optionId)
  }
  return (
    <li>
      <button
        className={activeId !== optionId ? 'tag-btn' : 'spl'}
        type="button"
        onClick={selected}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tag
