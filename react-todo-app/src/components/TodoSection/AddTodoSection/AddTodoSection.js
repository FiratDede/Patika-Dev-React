import {useState} from "react"
function AddTodoSection({todos, setTodos}){
    let [newTodo, setNewTodo] = useState("")


    let newTodoChanged= (e)=> {
        setNewTodo(e.target.value)
      }

    let submitForm=(e)=> {
        e.preventDefault();
        setTodos([...todos, {content:newTodo, isCompleted: false}])
      }

    return (
    <>
    <header className="header">
		<h1>todos</h1>
		<form onSubmit={submitForm}>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus value={newTodo} onChange={newTodoChanged}  />
      <input type="submit" hidden />
		</form>
	</header>
    </>)
}

export default AddTodoSection