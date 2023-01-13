import React from 'react';
import FilterToggleButton from './FilterToggleButton';
import '../styling/form.scss';

function Form({ addTodo, today, showFilter, setShowFilter }) {
	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const res = Object.fromEntries(formData);
		res.id = Math.random() * 100000;
		e.target.reset();
		e.target.children[0].children[1].focus();

		console.log(res);

		addTodo(res);
	};

	return (
		<div className='container form-container'>
			<form onSubmit={handleSubmit} className='todo-form'>
				<div className='form-box'>
					<label htmlFor='todo'>Do:</label>
					<input
						type='text'
						placeholder='Todo'
						name='todo'
						id='todo'
						autoComplete='off'
						autoFocus
						required
					/>
					<label htmlFor='due_date'>Done:</label>
					<input
						type='date'
						name='due_date'
						id='due_date'
						defaultValue={today}
						min={today}
					/>

					<label htmlFor='category'>At:</label>
					<select name='category' id='category'>
						<option value='work'>Work</option>
						<option value='home'>Home</option>
					</select>
				</div>
				<button type='submit'>Add</button>
			</form>

			<FilterToggleButton setShowFilter={setShowFilter} showFilter={showFilter} />
		</div>
	);
}

export default Form;
