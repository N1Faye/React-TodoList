import React, { Component } from 'react'
import propTypes from 'prop-types'
import './index.css'
export default class Footer extends Component {
  static propTypes = {
    todos: propTypes.array.isRequired,
    checkAll: propTypes.func.isRequired,
    clearDone: propTypes.func.isRequired
  }
  // 勾选/取消 全选
  handleCheckAll = (e) => {
    console.log(e.target.checked);
    this.props.checkAll(e.target.checked)
  }
  //清除已完成任务
  clickClear = () => {
    this.props.clearDone()
  }
  render () {
    const { todos } = this.props
    const total = todos.length
    let doneTodo = todos.reduce((pre, todoObj) => { return pre + (todoObj.done ? 1 : 0) }, 0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={total !== 0 && total === doneTodo ? true : false} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneTodo}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.clickClear}>清除已完成任务</button>
      </div>
    )
  }
}
