import React from 'react';
import EditButton from './EditButton';

export default function({toggleEdit, id}) {
	return (
		<td>
			<EditButton id={id} toggleEdit={toggleEdit}/>
		</td>
	);
}