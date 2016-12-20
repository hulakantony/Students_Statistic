
const initialStudents = [
	{
		id: 1,
		name: 'Vasya',
		department: 'React',
		status: 'green',
	},
	{
		id: 2,
		name: 'Serega',
		department: 'NodeJS',
		status: 'yellow',
	},
	{
		id: 3,
		name: 'Kate',
		department: 'JS-Core',
		status: 'green',
	},
	{
		id: 4,
		name: 'Vlad',
		department: 'Markup',
		status: 'green',
	},
	{
		id: 5,
		name: 'Ilya',
		department: 'jQuery',
		status: 'red',
	}
];

export function students(state = initialStudents, action) {
	switch (action.type){
		case 'ADD_STUDENT':
			return [...state, action.student];
		case 'CHANGE_STATUS':		
			let copy = state.slice();
			const {id, value} = action;
			copy.forEach(el => {
				if(el.id === id){
					el.status = value;
				}
			})			
			return copy;
		case 'EDIT_STUDENT':			
			const {student} = action;			
			const newState = state.slice();
			newState.forEach(el =>{				
				if(el.id === +student.id){					
					el.name = student.name;
					el.department = student.department;
					el.status = student.status;
				} 				
			});
			return newState;
		case 'DELETE_STUDENT':
			const {deleteId} = action;			
			let withDeleted = state.filter(el =>{				
				return el.id !== +deleteId;
			})
			return withDeleted;
		default:
			return state;
	}
}

export function isFormOpened(state = false, action){
	switch (action.type){
		case 'OPEN_FORM':
			return action.isOpened;
		default:
			return state;
	}
}

export function editableId(state = 0, action){
	switch (action.type){
		case 'GET_STUDENT_ID':
			return action.id;
		default:
			return state;
	}
}
