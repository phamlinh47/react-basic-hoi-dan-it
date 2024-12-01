import React from 'react';
import './Demo.scss';

class ChildComponent extends React.Component {
	/*
	JSX = return block
	State: update data real time lien tuc, memory save
	state: 1 object
	*
	//key:value
	//arrow function: co const giong nhu 1 bien, k co class nua
	//function chi dung voi hook co huu ich
	//class thi dung class function

	//if(+item.salary >= 500): convert từ string => number

	//<button style={{ color:'#ff2200' }} dung cho css inline
	*/
	state = {
		showJobs: false
	}
	handleShowHide = () =>{
		this.setState({
			showJobs: !this.state.showJobs
		})
	}
	handleOnclickDelete = (job) =>{
		console.log('delete', job);
		this.props.deleteAJob(job);
	}
	render() {
		// <></> /* use khi dung 2 div ngang cap rieng biet k can boc lai trong 1 div parent*/
		// console.log('re-render', this.state)
		//console.log('check props', this.props)
		//c1
		/*let name = this.props.name;
		let age = this.props.age;
*/
		//c2:
		//key:value
		//lam duoc kieu nay khi dat ten bien bang ten key
		let{arrJobs} = this.props;
		let{showJobs} = this.state;

		let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
		//console.log('check conditional', check);
			//c1
			/*{showJobs === false && <div><button onClick={() => this.handleShowHide()}>Show</button></div> }
			{showJobs === true && 
			<>
				<div className="job-list">
					{
						arrJobs.map((item, index) => {
							if(+item.salary >= 500){
								return (
									<div key={item.id}>
										{item.title} - {item.salary}
									</div>
								)
							}
						})
					}
				</div>
				<div><button onClick={() => this.handleShowHide()}>Hide</button></div>
				</>
				}
				
			</>
			//c2
			{showJobs === false ? <div><button onClick={() => this.handleShowHide()}>Show</button></div> 
			:
			<>
				<div className="job-list">
					{
						arrJobs.map((item, index) => {
							if(+item.salary >= 500){
								return (
									<div key={item.id}>
										{item.title} - {item.salary}
									</div>
								)
							}
						})
					}
				</div>
				<div><button onClick={() => this.handleShowHide()}>Hide</button></div>
				</>
				}
				
			</>
			*/
		//<></> x tuong tu &nbsp x
		return (
			<> 


			{showJobs === false ? <div><button className="btn-show" onClick={() => this.handleShowHide()}>Show</button></div> 
			:
			<>
				<div className="job-list">
					{
						arrJobs.map((item, index) => {
							if(+item.salary >= 500){
								return (
									<div key={item.id}>
										{item.title} - {item.salary} 
										<></> <span onClick={()=>this.handleOnclickDelete(item)} >x</span>
									</div>
								)
							}
						})
					}
				</div>
				<div><button style={{ color:'#ff2200'}} onClick={() => this.handleShowHide()}>Hide</button></div>
				</>
				}
				
			</>
		)
	}
}


export default ChildComponent;