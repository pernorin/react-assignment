import React from 'react';
import '../styling/filterToggleButton.scss';

function FilterToggleButton({ showFilter, setShowFilter }) {
	const toggleClickHandler = () => {
		setShowFilter(!showFilter);
	};

	return (
		<button onClick={toggleClickHandler} className='filter-toggle-btn'>
			{showFilter ? 'Hide filter' : 'Show filter'}
		</button>
	);
}

export default FilterToggleButton;
