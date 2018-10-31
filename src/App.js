import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [
      { todo: 'Eat', done: false },
      { todo: 'Bath', done: false },
      { todo: 'Toothbrush', done: false }
    ],
    todo: ''
  };
  
  handleChangeCheckbox = (index) => {
    const todos = this.state.todos.map((todo, todoIndex) => {
      return {
        ...todo,
        done: index === todoIndex ? !todo.done : todo.done
      }
    })

    this.setState({
      todos
    })
  }

  handleChangeTodo = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  handleAddTodo = (e) => {
    const todos = [...this.state.todos, {
      todo: this.state.todo,
      done: false
    }]

    this.setState({
      todos
    })

    this.setState({
      todo: ''
    })
    e.preventDefault()
  }

  render() {
    return (
      <div className="container">
          <h1>Simple React Todo</h1>
          <form onSubmit={this.handleAddTodo}>
            <input type="text" value={this.state.todo} onChange={this.handleChangeTodo} /> &nbsp;
            <input type="submit" value="Submit" />
          </form>
          <ul>
              {this.state.todos.map((todo, index) => 
                <li key={index}>
                  {todo.todo}
                  <input 
                    checked={todo.done}
                    onChange={() => this.handleChangeCheckbox(index)}
                    type='checkbox'
                  />
                </li>
              )}
          </ul>
      </div>
    );
  }
}

export default App;
