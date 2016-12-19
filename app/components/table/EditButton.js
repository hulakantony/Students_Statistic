import React from 'react';

export default function({toggleEdit, id}) {
	return (
		<button onClick={()=>toggleEdit(id)}>EDIT</button>
	);
}