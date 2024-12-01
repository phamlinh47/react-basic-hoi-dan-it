import React from 'react';

class AddComponent extends React.Component {

	state = {
		title: '',
		salary: '',
	}
	handleChangetitle = (event) =>{
		this.setState({
			title: event.target.value
		})
	}

	handleChangeSalary = (event) =>{
		this.setState({
			salary: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if(!this.state.title || !this.state.salary){
			alert('missing required params')
			return;
		}
		console.log('re-render', this.state)
		//this.props.addNewJob('add new job');
		this.props.addNewJob({
			id: Math.floor(Math.random() * 1001),
			title: this.state.title,
			salary: this.state.salary
		})
		// sau khi them thanh cong clear input
		this.setState({
			title: '',
			salary: ''
		})
	}

	render (){
		return (
			<>
			<div>add</div>
			<form>
			  <label htmlFor="fname">Job Title:</label><br/>
			  <input type="text" 
			  	value={this.state.title} 
			  	onChange={(event)=> this.handleChangetitle(event)}
			  /><br/>
			  <label htmlFor="lname">Salary:</label><br/>
			  <input type="text" 
			  	value={this.state.salary}
			  	onChange = {(event)=> this.handleChangeSalary(event)}
			  /><br/><br/>
			  <input type="button" value="Submit"
			  	onClick={(event)=>this.handleSubmit(event)}
			  />
			</form> 
			</>
		)
	}

}


export default AddComponent;