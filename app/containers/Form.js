import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNewStudent, openModalForm, editStudent, getStudentId, deleteStudent } from '../actions/actions';
import Confirm from '../components/form/Confirm';

class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
			confirmIsOpen: false
		}
	}	

	onAddNewStudent(e){
		e.preventDefault();
		const { id, name, depart, status } = this.refs;
		const { addNewStudent, openModalForm, isFormOpened } = this.props;
		const newStudent = {
			id: +id.value,
			name: name.value,
			department: depart.value,
			status: status.value,
		};
		addNewStudent(newStudent);
		openModalForm(!isFormOpened);
	}

	onEditStudentProps(e){
		e.preventDefault();
		const { id, name, depart, status } = this.refs;
		const { editStudent, openModalForm, isFormOpened, getStudentId } = this.props;
		const editedStudent = {
			id: +id.value,
			name: name.value,
			department: depart.value,
			status: status.value,
		}		
		editStudent(editedStudent);
		openModalForm(!isFormOpened);
		getStudentId(0)
	}
	closeModal(e){
		e.preventDefault()
		const { openModalForm, getStudentId } = this.props;
		openModalForm(false);
		getStudentId(0)
	}
	deleteCurrentStudent(id){		
		const { deleteStudent, openModalForm, getStudentId } = this.props;
		deleteStudent(id);
		this.closeConfirm()
		openModalForm(false);
		getStudentId(0)
	}
	openConfirm(e){
		e.preventDefault()
		this.setState({confirmIsOpen: true})
		
	}
	closeConfirm(){
		this.setState({confirmIsOpen: false})
	}
	render(){	
		const { isFormOpened, students, editableId } = this.props;
		const { confirmIsOpen } = this.state;		
		let	name = null, status = null, department = null;
		let latestId = 0;
		students.forEach(el=>{
			latestId = el.id;
			if(el.id === editableId){
				name = el.name;
				status = el.status;
				department = el.department;				
			}
		}) 	
		if(isFormOpened) {
			return (
				<div>
				<form onSubmit={editableId ? (e)=>this.onEditStudentProps(e) :(e)=>this.onAddNewStudent(e)} className="modal-form">
					<label>Id: <input type="text" required ref="id" readOnly defaultValue={editableId ? editableId : latestId+1}/> </label>
					<label>Name: <input type="text" required ref="name" defaultValue={name ? name : ''} /> </label>
					<label>Department: <input type="text" required ref="depart" defaultValue={department ? department : ''} /> </label>
					<label>Status: 
						<select ref="status" defaultValue={status ? status : ''}>
							<option>red</option>
							<option>yellow</option>
							<option>green</option>
						</select>
					</label>
					<input type="submit" value={editableId ? 'Save' : `Add`} />
					{editableId ? <button onClick={(e)=>this.closeModal(e)} >Close</button> : null}
					{editableId ? <button onClick={(e)=>this.openConfirm(e)} >Delete</button> : null}
					
				</form>
				{confirmIsOpen ? <Confirm 
						id={this.refs.id.value} 
						closeConfirm={()=>this.closeConfirm()}
						onDeleteStudent={(id)=>this.deleteCurrentStudent(id)} 
						/> : null	}
				</div>
			);
		} else {
			return null;
		}
	}
}

const mapStateToProps = (state) => {    
    return {
        students: state.students,
        isFormOpened: state.isFormOpened,
        editableId: state.editableId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewStudent: (student) => dispatch(addNewStudent(student)),
        openModalForm: (bool) => dispatch(openModalForm(bool)),
        editStudent: (student) => dispatch(editStudent(student)),
        getStudentId: (id) => dispatch(getStudentId(id)),
        deleteStudent: (id) => dispatch(deleteStudent(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);