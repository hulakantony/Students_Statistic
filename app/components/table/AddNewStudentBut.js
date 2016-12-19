import React from 'react';

export default function({toggleFormForNewStudent}) {
	return (
		<button onClick={toggleFormForNewStudent}>Add student</button>
	);
}