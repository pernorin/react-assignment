import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import './styling/app.scss';

function App() {
	const [todos, setTodos] = useState([]);
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [showFilter, setShowFilter] = useState(false);
	const executedRef = useRef(false);

	useEffect(() => {
		if (executedRef.current) {
			return;
		}

		setTodos(JSON.parse(localStorage.getItem('todos')));

		/* 
		// ----- Exempel-todos -----
		setTodos([
			{ todo: 'Rulla tummarna', due_date: '2023-01-08', category: 'work', id: 1 },
			{ todo: 'Slå dank', due_date: '2023-01-17', category: 'work', id: 2 },
			{ todo: 'Inget särskilt', due_date: '2023-01-16', category: 'home', id: 3 },
		]);
    */
		console.log('it ran');

		executedRef.current = true;
	}, []);

	useEffect(() => {
		if (todos !== []) {
			localStorage.setItem('todos', JSON.stringify(todos));
			console.log('ls set');
		}

		setFilteredTodos(todos);
	}, [todos]);

	const today = new Date(Date.now()).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});

	const addTodo = useCallback(
		(todo) => {
			setTodos((todos) => [...todos, todo]);
			localStorage.setItem('todos', JSON.stringify(todos));
		},
		[todos]
	);

	return (
		<div className='App'>
			<Header setTodos={setTodos}></Header>
			<div className='formAndFilterSection'>
				{showFilter ? (
					<Filter
						todos={todos}
						setFilteredTodos={setFilteredTodos}
						showFilter={showFilter}
						setShowFilter={setShowFilter}
					></Filter>
				) : (
					<Form
						addTodo={addTodo}
						today={today}
						showFilter={showFilter}
						setShowFilter={setShowFilter}
					></Form>
				)}
			</div>
			<TodoList todos={filteredTodos} setTodos={setTodos} today={today}></TodoList>
		</div>
	);
}

export default App;
