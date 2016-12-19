import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNewStudent, openModalForm, editStudent, getStudentId } from '../actions/actions';

class Form extends Component{
	constructor(props){
		super(props);
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
	render(){	
		const { isFormOpened, students, editableId } = this.props;
		let	name = null, status = null, department = null;
		students.forEach(el=>{
			if(el.id === editableId){
				name = el.name;
				status = el.status;
				department = el.department;
			}
		}) 	
		if(isFormOpened) {
			return (
				<form onSubmit={editableId ? (e)=>this.onEditStudentProps(e) :(e)=>this.onAddNewStudent(e)} className="modal-form">
					<label>Id: <input type="text" required ref="id" readOnly defaultValue={editableId ? editableId : students.length+1}/> </label>
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
				</form>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);