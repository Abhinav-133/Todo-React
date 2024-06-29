import React from 'react'
import Todo1 from './Todo1'

function Todos({todos,toggleCompleted,removeTodo}) {
  return (
    <div>
        {todos.map((todo)=>(
            <Todo1 {...todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
        ))}
    </div>
  )
}

export default Todos
