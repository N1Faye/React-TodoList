import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css'

export default class App extends Component {
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '敲代码', done: false },
        ]
    }
    //添加Todo
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }
    //修改Todo完成情况
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            //浅拷贝+覆盖 
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj
        })
        this.setState({ todos: newTodos })
    }
    //删除Todo
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter(todoObj => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }
    //全选/全不选
    checkAll = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
        })
        this.setState({ todos: newTodos })
    }
    //清除已完成任务
    clearDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter(todoObj => {
            return !todoObj.done
        })
        this.setState({ todos: newTodos })
    }
    render () {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAll={this.checkAll} clearDone={this.clearDone} />
                </div>
            </div>
        )
    }
}
