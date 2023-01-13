import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import './styling/app.scss';

// https://www.youtube.com/watch?v=u6gSSpfsoOQ&t=3275s  prop drilling
// https://www.freecodecamp.org/news/what-is-lifting-state-up-in-react/

// const storedTodos = JSON.parse(localStorage.getItem('todos'));

// if (storedTodos === null) {
// }

function App() {
	const [todos, setTodos] = useState([]);
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [showFilter, setShowFilter] = useState(false);
	const executedRef = useRef(false);

	const defaultTodos = [
		{ todo: 'Rulla tummarna', due_date: '2023-01-08', category: 'work', id: 1 },
		{ todo: 'Slå dank', due_date: '2023-01-17', category: 'work', id: 2 },
		{ todo: 'Inget särskilt', due_date: '2023-01-14', category: 'home', id: 3 },
	];

	const storedTodos = JSON.parse(localStorage.getItem('todos'));

	useEffect(() => {
		if (executedRef.current) {
			return;
		}

		console.log('st:', storedTodos);
		console.log('dt:', defaultTodos);
		console.log(window.localStorage.length[0]);
		/*
		if (storedTodos !== []) {
			setTodos(storedTodos);
			//return;
		} else {
			setTodos(defaultTodos);
		}
    */
		if (window.localStorage.length[0] !== undefined) {
			setTodos(storedTodos);
			console.log('hee-hee');
		} else {
			setTodos(defaultTodos);
		}

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

// <form onSubmit={handleSubmit}></form>   https://www.w3schools.com/react/react_forms.asp

// https://www.youtube.com/watch?v=nyg5Lpl6AiM  filter

// ec-js3: dag4(23-10) vid3 (16min)

// https://youtu.be/HPoC-k7Rxwo?t=1266 fix för flera exe

/* 
https://reactjs.org/docs/animation.html
transitions: https://www.youtube.com/watch?v=-nCOjH0XOos
animations: https://www.youtube.com/watch?v=kYVPoo9iGNQ
*/

// https://www.w3schools.com/react/react_memo.asp rendera endast det som behövs

//https://www.makeuseof.com/react-sass-how-use/

/* FRÅGOR:
-Är det ok att sätta ett default state till värdet av ett annat state? (todos/filteredTodos)
*/
