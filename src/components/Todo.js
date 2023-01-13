import React from 'react';

function Todo({ todo, todos, setTodos, today }) {
	const deleteTodo = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	return (
		<div className={todo.due_date < today ? 'overdue' : undefined}>
			<li>
				<span className='todo-text'>{todo.todo}</span>
				<span className='todo-date'>{todo.due_date}</span>
				<span className='todo-category'>{todo.category}</span>
			</li>
			<button onClick={deleteTodo} className='delete-btn'>
				Remove
			</button>
		</div>
	);
}

export default Todo;
