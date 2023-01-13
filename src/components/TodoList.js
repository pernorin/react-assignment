import React from 'react';
import Todo from './Todo';
import '../styling/todoList.scss';

function TodoList({ todos, setTodos, today }) {
	return (
		<ul className='container'>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todos={todos}
					setTodos={setTodos}
					todo={todo}
					today={today}
				></Todo>
			))}
		</ul>
	);
}

export default TodoList;
