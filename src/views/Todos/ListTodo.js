import React from 'react';
import './ListTodo.scss';
import AddTodo from'./AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component{

	state={
		listTodos:[
			{id: 'todo1', title: 'Doing Homework'},
			{id: 'todo2', title: 'Making Video'},
			{id: 'todo3', title: 'Fixing Bugs'},
		],
		editTodo: {}
	}

	addNewTodo = (todo) => {
		/*c1
		let currentListTodo = this.state.listTodos;
		currentListTodo.push(todo);*/
		//set lai state parent
		this.setState({
			//c1: listTodos: currentListTodo,
			listTodos: [...this.state.listTodos, todo],

		})

		toast.success('add new success')
	}

	handleDeleteTodo = (todo) => {
		console.log('check todo', todo)
		let currentTodos = this.state.listTodos;
		currentTodos = currentTodos.filter(item => item.id !== todo.id)
		this.setState({
			listTodos: currentTodos
		})

		toast.success('Delete Item success')
	}

	handleEditTodo = (todo) => {
		this.setState({
			editTodo: todo
		})
	}


	render() {
		let {listTodos, editTodo } = this.state;
		//let listTodos = this.state.listTodos;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		console.log('check empty object', isEmptyObj);
		return (
			<div className="list-todo-container">Hello ListTodo
				<AddTodo
					addNewTodo ={this.addNewTodo}
				/>

				<div className="list-todo-content">
					{listTodos && listTodos.length > 0 &&
						listTodos.map((item, index) => {
							return(
								<div className="todo-child" key={item.id}>
								<span> {index + 1 } - {item.title}</span>&nbsp;
								<button type="button" className="edit"
									onClick={() => this.handleEditTodo(item)}
								>Edit</button>
								<button type="button" className="delete"
								onClick ={() => this.handleDeleteTodo(item)}
								>Delete</button>
								</div>
							)
						})
					}
					
				</div>
			</div>
		)
	}
}
export default ListTodo;