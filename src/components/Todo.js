import React from 'react';

function Todo({ todo, todos, setTodos, today }) {
	const deleteTodo = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	return (
		//<div className={todo.due_date < today && 'overdue'}>
		//<div className={`todo-div ${todo.due_date < today ? 'overdue' : undefined}`}>
		<div className={todo.due_date < today ? 'overdue' : undefined}>
			<li>
				{todo.todo} - {todo.due_date}
			</li>
			<button onClick={deleteTodo}>bort</button>
		</div>
	);
}

export default Todo;
