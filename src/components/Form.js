import React from 'react';
import FilterToggleButton from './FilterToggleButton';
import '../styling/form.scss';

function Form({ addTodo, today, showFilter, setShowFilter }) {
	//const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const res = Object.fromEntries(formData); // kolla om formdata behövs
		res.id = Math.random() * 100000;
		e.target.reset();
		e.target.children[1].focus();

		console.log(res);
		//return res;
		addTodo(res);
		//setTodos((todos) => [...todos, res]);

		//setTodos([...todos, res]);
		//todos.push(res);

		//console.log(todos);

		//console.log(e.target.children);
		//e.target.children[1].value = '';
		// e.target.children[3]  - datumfält
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

// gör export på slutet istället:  rfce
// döpa filer till .jsx?
