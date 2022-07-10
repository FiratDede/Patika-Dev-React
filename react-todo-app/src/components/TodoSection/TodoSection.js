import AddTodoSection  from './AddTodoSection/AddTodoSection';
import TodoList from './TodoList/TodoList';
import ChangeTodoModeSection from './ChangeTodoModeSection/ChangeTodoModeSection';
import {useState} from "react"

function TodoSection(){
    let [todos, setTodos]= useState([])
    let [currentMode,setCurrentMode]= useState("all")
    return (
    <>
    <section className="todoapp" >
        <AddTodoSection todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos} currentMode={currentMode} setCurrentMode= {setCurrentMode} />
        <ChangeTodoModeSection todos={todos} setTodos={setTodos} currentMode={currentMode} setCurrentMode= {setCurrentMode}/>





    </section>
    <footer className="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
    </>)
}


export default TodoSection