import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import axios from 'axios';

const URL = 'http://localhost:9000/api/todos';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: [],
      inputValue: '',
      hideCompleted: false
    }
  }

  componentDidMount(){
    console.log('App: Component Mounted');
    axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state,
          todoList: res.data.data
        })
        console.log(res);
      })
      .catch(err => console.log('App: The following error occured', err));
  }

  toggleHidden = ()=>{
    this.setState({
      ...this.state,
      hideCompleted: !this.state.hideCompleted
    })
  }

  toggleCompleted = (itemId)=>{
    this.setState({
      todoList: this.state.todoList.map(item => {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        };
        return {...item};
      })
    });
    axios.patch(`${URL}/${itemId}`, { data: [...this.state.todoList] })
      .then(res =>{
        console.log('App: Successful patch made', res)
      })
      .catch(err =>{
        console.log('App: Failed patch', err);
      })
  };

  inputChange = (e)=>{
    this.setState({
      ...this.state,
      inputValue: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    const newListItem = {
      name: this.state.inputValue,
      id: new Date().getTime(),
      completed: false 
    }
    axios.post(URL, newListItem)
      .then(res => {
        this.setState({
          ...this.state,
          todoList: [...this.state.todoList, res.data.data],
          inputValue: ''
        })
      })
      .catch(err => console.log('App: Failed to post to API', err));
  }

  render() {
    console.log('App: Rendered Component', this.state.todoList);
    return (
      <div className='App'>
        <TodoList todoItems={this.state.todoList} toggleCompleted={this.toggleCompleted} hideCompleted={this.state.hideCompleted} />
        <Form inputValue={this.state.inputValue} inputChange={this.inputChange} handleSubmit={this.handleSubmit} />
        <button onClick={this.toggleHidden}>{this.state.hideCompleted ? 'Show Completed' : 'Hide Completed'}</button>
      </div>
    )
  }
};