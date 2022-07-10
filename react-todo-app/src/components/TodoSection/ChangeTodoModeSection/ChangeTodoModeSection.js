
function ChangeTodoModeSection({todos,setTodos,currentMode,setCurrentMode}){
    let findSelectedMode= (buttonName)=>{
        if(buttonName===currentMode){
          return "selected"
        }
        else{
          return ""
        }
      }
      let countUncompletedTodos = ()=> {
        let count=0;
        todos.map(todo=> {
          if(!todo.isCompleted){
            ++count
          }
          
            
        })
        return count
      }


    return(
    <>
    <footer className="footer">
		<span className="todo-count">
			<strong>{countUncompletedTodos()} </strong>
			 items left
		</span>

		<ul className="filters">
			<li>
				<a  href="#/" className={findSelectedMode("all")} onClick={(e)=>{
        
          setCurrentMode("all")
        }}>All</a>
			</li>
			<li>
				<a href="#/" className={findSelectedMode("active")} onClick={(e)=>{
         
          setCurrentMode("active")
        }}>Active</a>
			</li>
			<li>
				<a href="#/" className={findSelectedMode("completed")} onClick={(e)=>{
        
          setCurrentMode("completed")
        }}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={(e)=>{
       var filtered = todos.filter(function(todo, index, arr){ 
        return  (!todo.isCompleted)
    });
      setTodos([...filtered])
    }}>
			Clear completed
		</button>
	</footer>
    
    </>)
}
export default ChangeTodoModeSection