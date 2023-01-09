import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import './App.css';

// https://www.youtube.com/watch?v=u6gSSpfsoOQ&t=3275s  prop drilling
// https://www.freecodecamp.org/news/what-is-lifting-state-up-in-react/

const defaultTodos = [
	{ todo: 'Rulla tummarna', due_date: '2023-01-08', category: 'work', id: 1 },
	{ todo: 'Slå dank', due_date: '2023-01-17', category: 'work', id: 2 },
	{ todo: 'Inget särskilt', due_date: '2023-01-14', category: 'home', id: 3 },
];

function App() {
	const [todos, setTodos] = useState(defaultTodos);
	const [filteredTodos, setFilteredTodos] = useState(defaultTodos); //en useEffect som sätter denna till todos när det förändras
	const [showFilter, setShowFilter] = useState(false);
	//--------test------------

	useEffect(() => {
		console.log('ft:', filteredTodos);
		console.log('t:', todos);
	}, [filteredTodos, todos]);

	//------------------------

	const today = new Date(Date.now()).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});

	function addTodo(todo) {
		setTodos((todos) => [...todos, todo]);
	}

	return (
		<div className='App'>
			<Header setTodos={setTodos}></Header>
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

			{/* alt. lägg func i forms och skicka ner todos och setTodos */}

			<TodoList todos={filteredTodos} setTodos={setTodos} today={today}></TodoList>
		</div>
	);
}

export default App;

// <form onSubmit={handleSubmit}></form>   https://www.w3schools.com/react/react_forms.asp

// https://www.youtube.com/watch?v=nyg5Lpl6AiM  filter

// ec-js3: dag4(23-10) vid3 (16min)

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
