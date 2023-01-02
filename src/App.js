import Header from './components/Header';
import Form from './components/Form';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Form></Form>
			<Filter></Filter>
			<TodoList></TodoList>
		</div>
	);
}

export default App;

// <form onSubmit={handleSubmit}></form>   https://www.w3schools.com/react/react_forms.asp
