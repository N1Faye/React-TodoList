import React, { Component } from 'react'
import propTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
  //对props类型进行限制
  static propTypes={
    addTodo:propTypes.func.isRequired
  }
  handleKeyUp=(e)=>{
    const {keyCode,target}=e
    //判断是否回车案件
    if(keyCode!==13) return
    if(target.value.trim()==''){
      alert('输入不能为空')
      return
    }
    const todoObj={id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoObj)
    target.value=''
 }
  render() {
    return (
        <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
    </div>
    )
  }
}
