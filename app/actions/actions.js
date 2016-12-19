
export function changeStatus(id, value){
	return {
		type: 'CHANGE_STATUS',
		id,
		value
	}	
}

export function addNewStudent(student){
	return {
		type: 'ADD_STUDENT',
		student
	}
}

export function openModalForm(bool) {
	return {
		type: 'OPEN_FORM',
		isOpened: bool
	}
}

export function getStudentId(id) {
	return {
		type: 'GET_STUDENT_ID',
		id
	}
}
export function editStudent(student){
	return {
		type: 'EDIT_STUDENT',
		student
	}
}