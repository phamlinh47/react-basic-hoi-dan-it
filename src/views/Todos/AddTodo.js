import React from 'react';
import { toast } from 'react-toastify';

class AddTodo extends React.Component{

	state = {
		title: ''
	}
	handleOnChangeTitle = (event) =>{
		this.setState({
			title: event.target.value
		})
	}

	handleAddTodo = () =>{
		if(!this.state.title){
			//if(undefined/null/empty) => false thi no ko thuc hien
			// dung ! de phu dinh lai no la true va thuc thi
			toast.error(`Missing Title's Todo`)
			return;// no out ra khoi ham
		}
		let todo = {
			id: Math.floor(Math.random() * 10000),
			title: this.state.title
		}
		this.props.addNewTodo(todo);//goi nguoc len cha de them item vao list
		this.setState({
			title: ''
		})
	}

	render () {
		let {title} = this.state;
		return (
			<div className="add-todo">
					<input type="text" value={title}
						onChange={(event) => this.handleOnChangeTitle(event)}
					/>
					<button type="button" className="add"
						onClick={() => this.handleAddTodo()}
					>Add</button>
			</div>
		)
	}

}
export default AddTodo;