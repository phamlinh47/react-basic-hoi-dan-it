import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
	/*
	JSX = return block
	State: update data real time lien tuc, memory save
	state: 1 object
	props: property
	props: tuong tu bien. input dau vao, truyen tu cha sang con
	truyen dc con len cha bang function, con lai chi co the truyen data tu cha xuong con
	//react chi nen dung map, k nen dung for, while
	*/
	//key:value
	state = {
		arrJobs: [
				{id: '1',title: 'job 1', salary: '500'},
				{id: '2',title: 'job 2', salary: '600'},
				{id: '3',title: 'job 3', salary: '100'},
			]
	}

	addNewJob = (job) => {
		//c1
		/*let currentJobs = this.state.arrJobs;
		currentJobs.push(job)
		this.setState({
			arrJobs: currentJobs
		})*/

		//c2
		//console.log('check job', job);
		//
		console.log('check job', job);
		this.setState({
			arrJobs: [...this.state.arrJobs, job] // toan tu copy(...), copy 3 phan tu o tren xong add them phan tu vao duoi
		})
	}

	deleteAJob = (job) =>{
		let currentJobs = this.state.arrJobs;
		//filter item => item.id  !== job.id: loc tat ca phan tu lay ra id nao khac voi job id 
		//item: item chi dung trong filter,copy array vao 1 item moi
		currentJobs = currentJobs.filter(item => item.id  !== job.id)
		this.setState({
			arrJobs:currentJobs
		})
	}

	componentDidUpdate(prevProps, prevState){
		console.log('run didupdaet:', 'prev state:', prevState, 'current state', this.state);
	}
	componentDidMount(){ //componentDidMount thich hop goi API
		console.log('componentDidMount');
	}
	

	render() {
		// <></> /* use khi dung 2 div ngang cap rieng biet k can boc lai trong 1 div parent*/
		console.log('re-render', this.state)
		//this.addNewJob: co input dau vao nen k dung ()
		return (
			<> 	
				<AddComponent
					addNewJob = {this.addNewJob}
					
				/>
				<div>
					
					<ChildComponent 
						arrJobs ={this.state.arrJobs}
						deleteAJob = {this.deleteAJob}
					/>
				</div>
			</>
		)
	}
}

export default MyComponent;