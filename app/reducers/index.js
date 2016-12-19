import { combineReducers } from 'redux';
import { students, isFormOpened, editableId } from './reducers';

export default combineReducers({
	students,
	isFormOpened,
	editableId
})