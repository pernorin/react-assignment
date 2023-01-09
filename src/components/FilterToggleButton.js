import React from 'react';

function FilterToggleButton({ showFilter, setShowFilter }) {
	const toggleClickHandler = () => {
		setShowFilter(!showFilter);
	};

	return (
		<button onClick={toggleClickHandler}>
			{showFilter ? 'Hide filter' : 'Show filter'}
		</button>
	);
}

export default FilterToggleButton;
