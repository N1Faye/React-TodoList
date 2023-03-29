import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { mouse: false }
  //鼠标移入移除
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  //勾选/取消 
  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }
  //删除
  handleDelete=(id)=>{
    if(window.confirm('确定删除吗?')){
      this.props.deleteTodo(id)
    }
  }
  render () {
    const { name, done, id } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={()=>this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
