import React from 'react';
import IDCell from './IDCell';
import NameCell from './NameCell';
import DepartmentCell from './DepartmentCell';
import StatusCell from './StatusCell';
import EditButCell from './EditButtonCell';

export default function({ id, name, department, status, onChangeStatus, toggleEdit }) {		
	return (
		<tr>
			<IDCell id={id} />
			<NameCell name={name} />
			<DepartmentCell department={department} />
			<StatusCell status={status} id={id} onChangeStatus={onChangeStatus}/>
			<EditButCell id={id} toggleEdit={toggleEdit}/>
		</tr>
	)
}