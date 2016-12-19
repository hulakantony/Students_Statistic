import React from 'react';
import SelectStatus from './SelectStatus';

export default function({status, id, onChangeStatus}) {	
	const backStyle = {
		background: `${status}`
	}
	return (
		<td style={backStyle}>
			<SelectStatus id={id} status={status} onChangeStatus={onChangeStatus}/>
		</td>
	);
}