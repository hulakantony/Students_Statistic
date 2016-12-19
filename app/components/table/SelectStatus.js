import React from 'react';

const statuses = ['red', 'yellow', 'green'];

export default function({status, id, onChangeStatus}) {	
	return (
		<select value={status} onChange={(value)=>onChangeStatus(value, id)}>
			{
				statuses.map((el, index) => {					
					return <option key={index} value={el} >{el}</option>
				})
			}
		</select>
	);
}