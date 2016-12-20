import React from 'react';

export default function ({ id, closeConfirm, onDeleteStudent }){	
	return (
		<div className="confirm-modal">
			<h1>Are you sure?</h1>
			<button onClick={()=>onDeleteStudent(+id)}>Yes</button>
			<button onClick={closeConfirm}>No</button>
		</div>
	);
}