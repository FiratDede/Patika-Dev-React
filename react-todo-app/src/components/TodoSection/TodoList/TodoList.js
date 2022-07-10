
function TodoList({todos, setTodos,currentMode, setCurrentMode}){
       
    let checkTodoCompleted= (todo)=> {
        if(todo.isCompleted===true){
          return "completed"
        }
        else{
          return ""
        }
      }
      let handleCheckOperation= (todo)=>{
        return ()=>{
            if(todo.isCompleted){
              todo.isCompleted=false
            }
            else{
              todo.isCompleted=true
            }
            setTodos([...todos])
        }
    
      }



    return (
    <>
    	<section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
      {
        currentMode=== "all" &&       
        todos.map((todo,index)=>
        {
          return (<li className={checkTodoCompleted(todo)} key={index}>
          <div>
            <input className="toggle" type="checkbox" onClick={handleCheckOperation(todo)} checked={todo.isCompleted} />
            <label>{todo.content}</label>
            <button className="destroy"></button>
          </div>
        </li>)
        })
        
      }

      {
        currentMode=== "completed" &&       
        todos.map((todo,index)=>
        { if(todo.isCompleted)
          return (<li className={checkTodoCompleted(todo)} key={index}>
          <div>
            <input className="toggle" type="checkbox" onClick={handleCheckOperation(todo)} checked={todo.isCompleted} />
            <label>{todo.content}</label>
            <button className="destroy"></button>
          </div>
        </li>)
        })
      }


{
        currentMode=== "active" &&       
        todos.map((todo,index)=>
        { if(!todo.isCompleted)
          return (<li className={checkTodoCompleted(todo)} key={index}>
          <div>
            <input className="toggle" type="checkbox" onClick={handleCheckOperation(todo)} checked={todo.isCompleted} />
            <label>{todo.content}</label>
            <button className="destroy"></button>
          </div>
        </li>)
        })
      }


		</ul>
	</section>
    
    </>)

}

export default TodoList