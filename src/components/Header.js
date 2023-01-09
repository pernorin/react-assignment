import React from 'react';

function Header({ setTodos }) {
	const clearTodos = () => {
		setTodos([]);
	};

	return (
		<div>
			Header
			<button onClick={clearTodos}>clear all</button>
		</div>
	);
}

export default Header;
