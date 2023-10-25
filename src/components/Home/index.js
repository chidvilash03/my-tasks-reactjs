import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'
import Tag from '../Tag'
import Task from '../Task'
import Task1 from '../Task1'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {
    text: '',
    tag: tagsList[0].optionId,
    list: [],
    filterList: [],
    filter: false,
    activeId: '',
  }

  task = event => {
    this.setState({text: event.target.value})
  }

  tag = event => {
    console.log(event.target.value)
    this.setState({tag: event.target.value})
  }

  addTask = () => {
    const {text, tag, list} = this.state
    const s = tagsList.filter(each => each.optionId === tag)
    // console.log(s[0].displayText)
    const item = {
      id: uuidv4(),
      text,
      tag: s[0].displayText,
      oid: s[0].optionId,
    }
    this.setState({
      list: [...list, item],
      text: '',
      filter: false,
    })
  }

  filterTasks = id => {
    // console.log(id)\
    const {activeId} = this.state
    if (activeId === id) {
      this.setState({filter: false})
    } else {
      const {list} = this.state
      const req = list.filter(each => each.oid === id)
      // console.log(req)
      this.setState({filterList: req, filter: true, activeId: id})
    }
  }

  render() {
    const {text, list, filterList, filter, activeId} = this.state
    return (
      <div className="main-container">
        <form className="form-container">
          <h1 className="form-heading">Create a task!</h1>
          <div className="con">
            <label htmlFor="text" className="para">
              Task
            </label>
            <br />
            <input
              type="text"
              className="text-bar"
              placeholder="Enter the Task here"
              id="text"
              value={text}
              onChange={this.task}
            />
          </div>
          <div className="con">
            <label className="para" htmlFor="id">
              Tags
            </label>
            <select className="select-bar" onChange={this.tag} id="id">
              {tagsList.map(each => (
                <option id={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="button" className="btn" onClick={this.addTask}>
            Add Task
          </button>
        </form>
        <div className="list-container">
          <h1 className="para">Tags</h1>
          <ul className="tag-container">
            {tagsList.map(each => (
              <Tag
                item={each}
                filterTasks={this.filterTasks}
                activeId={activeId}
                key={each.optionId}
              />
            ))}
          </ul>
          <h1 className="para">Tasks</h1>
          <ul className="tasks-container">
            {list.length === 0 ? (
              <p className="para">No Tasks Added Yet</p>
            ) : (
              <>
                {filter ? (
                  <>
                    {filterList.length !== 0 ? (
                      <>
                        {filterList.map(each => (
                          <Task1 item={each} key={each.id} />
                        ))}
                      </>
                    ) : (
                      <p className="para">No Tasks Added Yet</p>
                    )}
                  </>
                ) : (
                  <>
                    {list.map(each => (
                      <Task item={each} key={each.id} />
                    ))}
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
