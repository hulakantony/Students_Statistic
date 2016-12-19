import React from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';
import '../../styles/main.css';

export default function({students, onChangeStatus, toggleEdit}) {
	return (
		<table className="students-table">
			<TableHead />
			<tbody>
			{students.map(el => {
				const {id, name, department, status} = el;
				return <TableRow 
						key={id} 
						id={id} 
						name={name} 
						department={department} 
						status={status} 
						onChangeStatus={onChangeStatus}
						toggleEdit={toggleEdit}
						/>
			})}
			</tbody>
		</table>
	);
}