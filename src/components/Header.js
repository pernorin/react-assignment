import React from 'react';
import '../styling/header.scss';

function Header({ setTodos }) {
	const clearTodos = () => {
		setTodos([]);
	};

	return (
		<header>
			<h1>TODO</h1>
			<button onClick={clearTodos}>
				CLEAR <br /> ALL
			</button>
		</header>
	);
}

export default Header;
