import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeStatus, openModalForm, getStudentId } from '../actions/actions';
import Table from '../components/table/Table';
import Form from './Form';
import AddStudent from '../components/table/AddNewStudentBut';

class App extends Component{
	constructor(props){
		super(props);

	}
	static onEnter(nextState, replace) {
    	const login = window.localStorage.getItem('std_login')
    	if(!login){
    		replace('/home')
    	}
    	
  	}
	onChangeStatus(e, id){
		const value = e.target.value;		
		const {changeStatus} = this.props;
		changeStatus(id, value);
	}
	toggleFormForNewStudent(){
		const { openModalForm, isFormOpened } = this.props;
		openModalForm(!isFormOpened);
	}
	toggleEdit(id){
		const { openModalForm, isFormOpened, getStudentId } = this.props;
		getStudentId(id);
		openModalForm(!isFormOpened);
	}	

	render(){
		const {students, changeStatus } = this.props;		
		return (
			<div className="table-wrapper">
				<AddStudent 
					toggleFormForNewStudent={() => this.toggleFormForNewStudent()} 
				/>
				<Table  
					students={students} 
					onChangeStatus={(e, id) => this.onChangeStatus(e,id)}
					toggleEdit={(id)=>this.toggleEdit(id)}
				/>
				<Form />
			</div>
		);
	}
}

const mapStateToProps = ({ students, isFormOpened, editableId }) => ({ 
	students, isFormOpened, editableId
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeStatus: (id, value) => dispatch(changeStatus(id, value)),
        openModalForm: (bool) => dispatch(openModalForm(bool)),
        getStudentId: (id) => dispatch(getStudentId(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);