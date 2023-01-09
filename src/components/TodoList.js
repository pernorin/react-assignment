import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos, today }) {
	return (
		<ul>
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
