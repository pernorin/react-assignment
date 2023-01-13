import React, { useEffect, useState } from 'react';
import FilterToggleButton from './FilterToggleButton';
import '../styling/filter.scss';

function Filter({ todos, setFilteredTodos, showFilter, setShowFilter }) {
	const [searchWord, setSearchWord] = useState('');
	const [categorySearch, setCategorySearch] = useState('');

	const todoSearchHandler = (e) => {
		setSearchWord(e.target.value);
	};
	const categorySearchHandler = (e) => {
		setCategorySearch(e.target.value);
	};

	useEffect(() => {
		switch (categorySearch) {
			case 'all':
				setFilteredTodos(
					todos.filter((todo) => {
						return todo.todo.toLowerCase().includes(searchWord.toLowerCase());
					})
				);
				break;
			case 'work':
				setFilteredTodos(
					todos.filter(
						(todo) =>
							todo.category === 'work' &&
							todo.todo.toLowerCase().includes(searchWord.toLowerCase())
					)
				);
				break;
			case 'home':
				setFilteredTodos(
					todos.filter(
						(todo) =>
							todo.category === 'home' &&
							todo.todo.toLowerCase().includes(searchWord.toLowerCase())
					)
				);
				break;
			default:
				setFilteredTodos(
					todos.filter((todo) => {
						return todo.todo.toLowerCase().includes(searchWord.toLowerCase());
					})
				);
				break;
		}
	}, [searchWord, categorySearch, setFilteredTodos, todos]);

	//https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
	// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#filtering_tasks_in_the_ui

	return (
		<div className='container filter-container'>
			<form className='filter-form'>
				<label htmlFor='search'>Find todo:</label>
				<input
					type='search'
					id='search'
					autoComplete='off'
					onChange={todoSearchHandler}
				/>
				<fieldset onChange={categorySearchHandler}>
					<legend>Category:</legend>
					<input
						type='radio'
						id='all'
						value='all'
						name='search_category'
						defaultChecked
					/>
					<label htmlFor='all'>All</label>
					<input type='radio' id='work' value='work' name='search_category' />
					<label htmlFor='work'>Work</label>
					<input type='radio' id='home' value='home' name='search_category' />
					<label htmlFor='home'>Home</label>
				</fieldset>
			</form>
			<FilterToggleButton setShowFilter={setShowFilter} showFilter={showFilter} />
		</div>
	);
}

export default Filter;
