import React from 'react';
import './ListTodo.scss';

class ListTodo extends React.Component{

	state={
		listTodos:[
			{id: 'todo1', title: 'Doing Homework'},
			{id: 'todo2', title: 'Making Video'},
			{id: 'todo3', title: 'Fixing Bugs'},
		]
	}


	render() {
		let {listTodos} = this.state;
		//let listTodos = this.state.listTodos;
		return (
			<div className="list-todo-container">Hello ListTodo
				<div className="add-todo">
						<input type="text"

						/>
						<button type="button">Add</button>
				</div>

				<div className="list-todo-content">
					{listTodos && listTodos.length > 0 &&
						listTodos.map((item, index) => {
							return(
								<div className="todo-child">
								<span>fgfg</span>
								<button type="button">Edit</button>
								<button type="button">Delete</button>
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